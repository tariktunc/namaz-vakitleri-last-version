'use client';

import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white mt-auto border-t-4 border-brand-gold">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="20" y="28" width="8" height="15" fill="#FFFFFF" rx="1"/>
                <rect x="21" y="23" width="6" height="5" fill="#FFFFFF" rx="0.5"/>
                <rect x="22" y="18" width="4" height="5" fill="#FFFFFF" rx="0.5"/>
                <path d="M 18 28 L 30 28 L 30 29 L 18 29 Z" fill="#C3A878"/>
                <path d="M 19 23 L 29 23 L 29 24 L 19 24 Z" fill="#C3A878"/>
                <path d="M 12 15 Q 8 15 8 11 Q 8 7 12 7 Q 10 9 10 11 Q 10 13 12 15 Z" fill="#C3A878"/>
                <path d="M 35 11 L 36 13 L 38 13 L 36.5 14.5 L 37 16.5 L 35 15.5 L 33 16.5 L 33.5 14.5 L 32 13 L 34 13 Z" fill="#C3A878"/>
              </svg>
              <span className="ml-3 text-xl font-bold">Namaz Vakitleri</span>
            </div>
            <p className="text-sm text-neutral-100 leading-relaxed">
              Her Vakit Yanınızda
            </p>
            <p className="text-xs text-neutral-100 mt-2 opacity-90">
              Diyanet onaylı, güncel ve doğru namaz vakitleri bilgisi.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-semibold mb-4 text-brand-gold">Hızlı Erişim</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-brand-gold transition-colors inline-block hover:translate-x-1 transform duration-200"
                >
                  İftar Saatleri
                </a>
              </li>
              <li>
                <a
                  href="/namaz-vakitleri"
                  className="hover:text-brand-gold transition-colors inline-block hover:translate-x-1 transform duration-200"
                >
                  Namaz Vakitleri
                </a>
              </li>
              <li>
                <a
                  href="https://namazvakitleri.diyanet.gov.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors inline-block hover:translate-x-1 transform duration-200"
                >
                  Diyanet Resmi Sitesi →
                </a>
              </li>
            </ul>
          </div>

          {/* About & Credits */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-semibold mb-4 text-brand-gold">Hakkında</h3>
            <div className="text-sm text-neutral-100 space-y-2">
              <p>
                Bu proje{' '}
                <a
                  href="https://tariktunc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-brand-gold transition-colors underline decoration-brand-gold/50"
                >
                  Tarık Tunç
                </a>
                {' '}tarafından geliştirilmiştir.
              </p>
              <p>
                <a
                  href="https://github.com/tariktunc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-brand-gold transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                  Açık Kaynak
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-6">
          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-100">
            <p className="order-2 sm:order-1">
              © {currentYear} Namaz Vakitleri. Tüm hakları saklıdır.
            </p>

            <div className="order-1 sm:order-2 flex items-center gap-4">
              <p className="flex items-center gap-1">
                <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Diyanet Onaylı</span>
              </p>
              <p className="flex items-center gap-1">
                <svg className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
                <span>Ücretsiz Hizmet</span>
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-neutral-100 opacity-75 leading-relaxed">
            Bu site ticari amaç gütmemektedir. Vakitler{' '}
            <a
              href="https://aladhan.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand-gold transition-colors"
            >
              AlAdhan API
            </a>
            {' '}kullanılarak Diyanet İşleri Başkanlığı hesaplama metoduyla sağlanmaktadır.
          </p>
        </div>
      </div>
    </footer>
  );
}
