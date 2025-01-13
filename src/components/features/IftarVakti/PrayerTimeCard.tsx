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
          className={`flex justify-between p-4 bg-white rounded shadow-sm hover:shadow-md transition-shadow border-l-4 ${
            (isIftar && prayer.label === 'Akşam') || (!isIftar && prayer.label === 'İmsak')
              ? 'border-blue-500 bg-blue-50'
              : 'border-[#C3A878]'
          }`}
        >
          <span className="font-medium text-[#1E4D7B]">{prayer.label}:</span>
          <span className="text-[#2C3E50]">{prayer.value}</span>
        </div>
      ))}
    </>
  );
} 