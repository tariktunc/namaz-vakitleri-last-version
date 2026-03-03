'use client';

function SkeletonBlock({ className = '' }: { className?: string }) {
  return (
    <div
      className={`bg-neutral-200 rounded animate-shimmer ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(90deg, #E0DCD2 0%, #F0EDE5 50%, #E0DCD2 100%)',
        backgroundSize: '200% 100%',
      }}
    />
  );
}

/**
 * Namaz Vakitleri sayfasi icin tam skeleton
 * h1 baslik + arama cubugu + icerik karti tamami
 */
export function PrayerTimesPageSkeleton() {
  return (
    <div className="page-container animate-fade-in" role="status" aria-label="Yükleniyor">
      {/* h1 - Sayfa basligi */}
      <div className="text-center mb-4 sm:mb-6">
        <SkeletonBlock className="h-8 sm:h-10 w-52 mx-auto rounded-lg" />
      </div>

      {/* Arama cubugu */}
      <div className="mb-4 sm:mb-8">
        <SkeletonBlock className="h-12 w-full rounded-lg" />
        <div className="flex gap-2 mt-3 justify-center flex-wrap">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonBlock key={i} className="h-8 w-20 rounded-full" />
          ))}
        </div>
      </div>

      {/* Icerik karti */}
      <div className="content-card">
        {/* h2 - Sehir adi */}
        <div className="text-center space-y-1 sm:space-y-2 mb-6 sm:mb-8">
          <SkeletonBlock className="h-7 sm:h-8 w-32 mx-auto rounded-lg" />
          <SkeletonBlock className="h-4 w-64 mx-auto rounded" />
        </div>

        {/* h3 - Geri sayim basligi */}
        <div className="mb-6 sm:mb-8">
          <div className="text-center mb-4">
            <SkeletonBlock className="h-6 w-56 mx-auto rounded-lg" />
          </div>
          {/* Geri sayim kutulari */}
          <div className="flex justify-center gap-2 sm:gap-3">
            <SkeletonBlock className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl" />
            <SkeletonBlock className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl" />
            <SkeletonBlock className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl" />
          </div>
        </div>

        {/* 6 vakit satiri - 2 kolon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex justify-between items-center p-3 sm:p-4 bg-white rounded shadow-sm border-l-4 border-neutral-200"
            >
              <SkeletonBlock className="h-5 w-16 rounded" />
              <SkeletonBlock className="h-5 w-14 rounded" />
            </div>
          ))}
        </div>
      </div>

      <span className="sr-only">Namaz vakitleri yükleniyor...</span>
    </div>
  );
}

/**
 * Iftar sayfasi icin tam skeleton
 * h1 baslik + arama cubugu + icerik karti tamami
 */
export function IftarPageSkeleton() {
  return (
    <div className="page-container animate-fade-in" role="status" aria-label="Yükleniyor">
      {/* h1 - Sayfa basligi */}
      <div className="text-center mb-4 sm:mb-6">
        <SkeletonBlock className="h-8 sm:h-10 w-64 mx-auto rounded-lg" />
      </div>

      {/* Arama cubugu */}
      <div className="mb-4 sm:mb-8">
        <SkeletonBlock className="h-12 w-full rounded-lg" />
        <div className="flex gap-2 mt-3 justify-center flex-wrap">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonBlock key={i} className="h-8 w-20 rounded-full" />
          ))}
        </div>
      </div>

      {/* Icerik karti */}
      <div className="content-card">
        {/* h2 - Sehir adi */}
        <div className="text-center space-y-2 mb-8">
          <SkeletonBlock className="h-8 w-32 mx-auto rounded-lg" />
          <SkeletonBlock className="h-4 w-64 mx-auto rounded" />
        </div>

        {/* Geri sayim kutulari */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-8">
          <SkeletonBlock className="h-20 w-20 sm:h-24 sm:w-24 rounded-xl" />
          <SkeletonBlock className="h-20 w-20 sm:h-24 sm:w-24 rounded-xl" />
          <SkeletonBlock className="h-20 w-20 sm:h-24 sm:w-24 rounded-xl" />
        </div>

        {/* 6 vakit karti - 2 kolon */}
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex justify-between items-center p-3 bg-white rounded shadow-sm border-l-4 border-neutral-200"
            >
              <SkeletonBlock className="h-5 w-14 rounded" />
              <SkeletonBlock className="h-5 w-12 rounded" />
            </div>
          ))}
        </div>
      </div>

      <span className="sr-only">İftar vakitleri yükleniyor...</span>
    </div>
  );
}
