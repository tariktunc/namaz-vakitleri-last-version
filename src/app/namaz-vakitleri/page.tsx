'use client';

import { useState, useEffect } from 'react';
import { useCity } from '@/context/CityContext';
import { getPrayerTimes } from '@/services/api';
import type { PrayerTimes } from '@/types/prayer';
import { CitySearch } from '@/components/CitySearch';
import { Footer } from '@/components/Footer';
import { CountdownTimer } from '@/components/ui/CountdownTimer';

export default function Home() {
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

  // En yakın namaz vaktini bul
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

    // Tüm vakitler geçtiyse yarının imsağı
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

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F5F7FA] to-[#8FB3D6] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E4D7B]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#F5F7FA] to-[#8FB3D6]">
      <main className="flex-grow">
        <div className="max-w-2xl mx-auto px-4 py-4 sm:py-8">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center text-[#1E4D7B]">
            Namaz Vakitleri
          </h1>

          <CitySearch />

          {isLoading ? (
            <div className="text-center py-6 sm:py-8">
              <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-[#1E4D7B] mx-auto"></div>
            </div>
          ) : prayerTimes && formattedDate && (
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
              <div className="text-center space-y-1 sm:space-y-2 mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-[#1E4D7B] capitalize">
                  {displayCity}
                </h2>
                <p className="text-xs sm:text-sm text-[#2C3E50]">
                  {displayCity} ili için {formattedDate} tarihli vakitler
                </p>
              </div>

              {nextPrayer && (
                <div className="mb-6 sm:mb-8">
                  <div className="text-center mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#1E4D7B]">
                      {nextPrayer.name} Vaktine Kalan Süre
                    </h3>
                  </div>
                  <CountdownTimer
                    targetTime={nextPrayer.time}
                    onComplete={() => {
                      // Vaktin adını güncelle
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
                    className="flex justify-between p-3 sm:p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#C3A878]"
                  >
                    <span className="text-sm sm:text-base font-medium text-[#1E4D7B]">{prayer.label}:</span>
                    <span className="text-sm sm:text-base text-[#2C3E50]">{prayer.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
