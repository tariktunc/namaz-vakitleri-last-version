import type { PrayerTimes } from '@/types/prayer';

interface PrayerTimeCardProps {
  times: PrayerTimes;
  isIftar: boolean;
}

export function PrayerTimeCard({ times, isIftar }: PrayerTimeCardProps) {
  const prayers = [
    { label: 'İmsak', value: times.imsak },
    { label: 'Güneş', value: times.gunes },
    { label: 'Öğle', value: times.ogle },
    { label: 'İkindi', value: times.ikindi },
    { label: 'Akşam', value: times.aksam },
    { label: 'Yatsı', value: times.yatsi }
  ];

  return (
    <>
      {prayers.map((prayer, idx) => (
        <div 
          key={idx} 
          className={`prayer-row ${
            (isIftar && prayer.label === 'Akşam') || (!isIftar && prayer.label === 'İmsak')
              ? 'border-brand-gold bg-brand-gold-50'
              : 'border-brand-primary-100'
          }`}
        >
          <span className="font-medium text-brand-primary">{prayer.label}:</span>
          <span className="text-neutral-800">{prayer.value}</span>
        </div>
      ))}
    </>
  );
} 