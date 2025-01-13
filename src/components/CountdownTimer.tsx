'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetTime: string;
  onComplete: () => void;
}

export function CountdownTimer({ targetTime, onComplete }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  }>({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const target = new Date(`${now.toDateString()} ${targetTime}`);
      
      if (target < now) {
        target.setDate(target.getDate() + 1);
      }

      const difference = target.getTime() - now.getTime();
      
      if (difference <= 0) {
        onComplete();
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetTime, onComplete]);

  return (
    <div className="text-center">
      <div className="flex justify-center gap-4">
        <div className="bg-[#1E4D7B] text-white rounded-lg p-4 min-w-[100px]">
          <div className="text-4xl font-bold">{timeLeft.hours}</div>
          <div className="text-sm">Saat</div>
        </div>
        <div className="bg-[#1E4D7B] text-white rounded-lg p-4 min-w-[100px]">
          <div className="text-4xl font-bold">{timeLeft.minutes}</div>
          <div className="text-sm">Dakika</div>
        </div>
        <div className="bg-[#1E4D7B] text-white rounded-lg p-4 min-w-[100px]">
          <div className="text-4xl font-bold">{timeLeft.seconds}</div>
          <div className="text-sm">Saniye</div>
        </div>
      </div>
    </div>
  );
} 