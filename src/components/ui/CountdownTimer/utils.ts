export function calculateTimeRemaining(targetTime: string): string {
  const now = new Date();
  const target = new Date(`${now.toDateString()} ${targetTime}`);

  if (target < now) {
    target.setDate(target.getDate() + 1);
  }

  const diff = target.getTime() - now.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return [hours, minutes, seconds]
    .map(n => n.toString().padStart(2, '0'))
    .join(':');
} 