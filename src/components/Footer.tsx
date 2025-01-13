'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E4D7B] text-white py-4 mt-auto">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="text-sm sm:text-base">
          © {currentYear}{' '}
          <a 
            href="https://tariktunc.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#C3A878] transition-colors font-medium"
          >
            Tarık Tunç
          </a>
          {' '}tarafından geliştirilmiştir.
        </p>
        <div className="text-xs sm:text-sm mt-2 space-y-1 text-gray-300">
          <p>
            Namaz vakitleri{' '}
            <a 
              href="https://namazvakitleri.diyanet.gov.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C3A878] transition-colors underline"
            >
              Diyanet İşleri Başkanlığı
            </a>
            {' '}kaynaklıdır.
          </p>
          <p className="mt-1">
            Bu proje açık kaynak kodludur.{' '}
            <a 
              href="https://github.com/tariktunc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C3A878] transition-colors underline"
            >
              GitHub
            </a>
            {' '}üzerinden kaynak kodlara ulaşabilir ve katkıda bulunabilirsiniz.
          </p>
          <p className="text-xs opacity-75 mt-2">
            Bu site tamamen ücretsiz bir hizmet olup, ticari amaç gütmemektedir.
          </p>
        </div>
      </div>
    </footer>
  );
} 