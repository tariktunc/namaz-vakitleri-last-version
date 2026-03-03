'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { CountdownTimer } from '@/components/ui/CountdownTimer';
import { getPrayerTimes } from '@/services/api';
import type { PrayerTimes } from '@/types/prayer';
import { useCity } from '@/context/CityContext';
import { CitySearch } from '@/components/CitySearch';
import { PrayerTimeCard } from './PrayerTimeCard';
import { IftarPageSkeleton } from '@/components/ui/Skeleton';
import { formatDate } from '@/utils/date';

export function IftarVakti() {
  const { selectedCity, displayCity, isLoading, setIsLoading } = useCity();
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);
  const [isIftar, setIsIftar] = useState(true);
  const [formattedDate, setFormattedDate] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setFormattedDate(formatDate(new Date()));
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    fetchPrayerTimes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity, isMounted]);

  useEffect(() => {
    document.title = isIftar
      ? 'İftar Vakitleri | Namaz ve İftar Vakitleri'
      : 'Sahur Vakitleri | Namaz ve İftar Vakitleri';
  }, [isIftar]);

  const fetchPrayerTimes = async () => {
    setIsLoading(true);
    try {
      const times = await getPrayerTimes(selectedCity);
      setPrayerTimes(times);
      checkTimeForIftar(times);
    } catch (error) {
      setPrayerTimes(null);
    } finally {
      setIsLoading(false);
    }
  };

  const checkTimeForIftar = (times: PrayerTimes) => {
    const now = new Date();
    const aksam = new Date(`${now.toDateString()} ${times.aksam}`);
    const imsak = new Date(`${now.toDateString()} ${times.imsak}`);

    setIsIftar(!(now > aksam || now < imsak));
  };

  // Henuz mount olmadi veya veri yukleniyor -> tam sayfa skeleton
  if (!isMounted || isLoading) {
    return <IftarPageSkeleton />;
  }

  if (!prayerTimes || !formattedDate) {
    return null;
  }

  return (
    <div className="page-container animate-fade-in">
      <h1 className="page-title">
        {isIftar ? 'İftara Ne Kadar Kaldı?' : 'Sahura Ne Kadar Kaldı?'}
      </h1>

      <CitySearch />

      <div className="content-card">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-2xl font-bold text-brand-primary capitalize">
            {displayCity}
          </h2>
          <p className="text-neutral-600 text-sm">
            {displayCity} ili için {formattedDate} tarihli vakitler
          </p>
        </div>

        <CountdownTimer
          targetTime={isIftar ? prayerTimes.aksam : prayerTimes.imsak}
          onComplete={() => setIsIftar(!isIftar)}
        />

        <div className="grid grid-cols-2 gap-4 mt-8">
          <PrayerTimeCard
            times={prayerTimes}
            isIftar={isIftar}
          />
        </div>
      </div>
    </div>
  );
}
