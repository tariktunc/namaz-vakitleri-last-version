'use client';

import { useState, useEffect } from 'react';
import { useCity } from '@/context/CityContext';
import { getPrayerTimes } from '@/services/api';
import type { PrayerTimes } from '@/types/prayer';
import { CitySearch } from '@/components/CitySearch';
import { CountdownTimer } from '@/components/ui/CountdownTimer';
import { PrayerTimesPageSkeleton } from '@/components/ui/Skeleton';

interface PrayerTimesViewProps {
  title: string;
}

export function PrayerTimesView({ title }: PrayerTimesViewProps) {
  const { selectedCity, displayCity, isLoading, setIsLoading } = useCity();
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);
  const [formattedDate, setFormattedDate] = useState<string>('');
  const [isMounted, setIsMounted] = useState(false);
  const [nextPrayer, setNextPrayer] = useState<{ name: string; time: string } | null>(null);

  useEffect(() => {
    setIsMounted(true);

    const today = new Date();
    const formatted = today.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long'
    });
    setFormattedDate(formatted);
  }, []);

  const findNextPrayer = (times: PrayerTimes) => {
    const now = new Date();
    const prayers = [
      { name: 'İmsak', time: times.imsak },
      { name: 'Güneş', time: times.gunes },
      { name: 'Öğle', time: times.ogle },
      { name: 'İkindi', time: times.ikindi },
      { name: 'Akşam', time: times.aksam },
      { name: 'Yatsı', time: times.yatsi }
    ];

    for (const prayer of prayers) {
      const [hours, minutes] = prayer.time.split(':').map(Number);
      const prayerTime = new Date();
      prayerTime.setHours(hours, minutes, 0, 0);

      if (prayerTime > now) {
        return prayer;
      }
    }

    return { name: 'İmsak', time: times.imsak };
  };

  useEffect(() => {
    if (!isMounted) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const times = await getPrayerTimes(selectedCity);
        setPrayerTimes(times);
        setNextPrayer(findNextPrayer(times));
      } catch (error) {
        setPrayerTimes(null);
        setNextPrayer(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedCity, isMounted, setIsLoading]);

  // Henuz mount olmadi veya veri yukleniyor -> tam sayfa skeleton
  if (!isMounted || isLoading) {
    return <PrayerTimesPageSkeleton />;
  }

  if (!prayerTimes || !formattedDate) {
    return null;
  }

  return (
    <div className="page-container animate-fade-in">
      <h1 className="page-title">
        {title}
      </h1>

      <CitySearch />

      <div className="content-card">
        <div className="text-center space-y-1 sm:space-y-2 mb-6 sm:mb-8">
          <h2 className="section-title">
            {displayCity}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600">
            {displayCity} ili için {formattedDate} tarihli vakitler
          </p>
        </div>

        {nextPrayer && (
          <div className="mb-6 sm:mb-8">
            <div className="text-center mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-brand-primary">
                {nextPrayer.name} Vaktine Kalan Süre
              </h3>
            </div>
            <CountdownTimer
              targetTime={nextPrayer.time}
              onComplete={() => {
                const updatedNextPrayer = findNextPrayer(prayerTimes);
                setNextPrayer(updatedNextPrayer);
              }}
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {[
            { label: 'İmsak', value: prayerTimes.imsak },
            { label: 'Güneş', value: prayerTimes.gunes },
            { label: 'Öğle', value: prayerTimes.ogle },
            { label: 'İkindi', value: prayerTimes.ikindi },
            { label: 'Akşam', value: prayerTimes.aksam },
            { label: 'Yatsı', value: prayerTimes.yatsi }
          ].map((prayer, idx) => (
            <div
              key={idx}
              className="prayer-row border-brand-primary-100"
            >
              <span className="text-sm sm:text-base font-medium text-brand-primary">{prayer.label}:</span>
              <span className="text-sm sm:text-base text-neutral-600">{prayer.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
