'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { CountdownTimer } from '@/components/ui/CountdownTimer';
import { getPrayerTimes } from '@/services/api';
import type { PrayerTimes } from '@/types/prayer';
import { useCity } from '@/context/CityContext';
import { CitySearch } from '@/components/ui/CitySearch';
import { Footer } from '@/components/ui/Footer';
import { PrayerTimeCard } from './PrayerTimeCard';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
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

  if (!isMounted) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F5F7FA] to-[#8FB3D6]">
      <main className="flex-grow">
        <div className="max-w-2xl mx-auto px-4 py-4 sm:py-8">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center text-[#1E4D7B]">
            {isIftar ? 'İftara Ne Kadar Kaldı?' : 'Sahura Ne Kadar Kaldı?'}
          </h1>

          <CitySearch />

          {isLoading ? (
            <LoadingSpinner />
          ) : prayerTimes && formattedDate && (
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
              <div className="text-center space-y-2 mb-8">
                <h2 className="text-2xl font-bold text-[#1E4D7B] capitalize">
                  {displayCity}
                </h2>
                <p className="text-[#2C3E50] text-sm">
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
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
} 