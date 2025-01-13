'use client';

import { useState, useEffect } from 'react';
import { calculateTimeRemaining } from './utils';

interface CountdownTimerProps {
  targetTime: string;
  onComplete: () => void;
}

export function CountdownTimer({ targetTime, onComplete }: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeRemaining(targetTime);
      if (remaining === '00:00:00') {
        onComplete();
      }
      setTimeRemaining(remaining);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime, onComplete]);

  return (
    <div className="text-center py-6">
      <div className="text-4xl sm:text-6xl font-bold text-[#1E4D7B] font-mono">
        {timeRemaining}
      </div>
    </div>
  );
} 