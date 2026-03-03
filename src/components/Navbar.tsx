'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'bg-brand-primary text-white' : 'text-brand-primary hover:bg-brand-primary-50';
  };

  return (
    <nav className="bg-white shadow-sm border-b border-neutral-200" aria-label="Ana navigasyon">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center h-16 gap-4">
          <Link
            href="/"
            className={`px-4 py-2 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary ${isActive('/')}`}
            {...(pathname === '/' ? { 'aria-current': 'page' as const } : {})}
          >
            Namaz Vakitleri
          </Link>
          <div className="w-px h-6 bg-neutral-200" aria-hidden="true"></div>
          <Link
            href="/iftar"
            className={`px-4 py-2 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary ${isActive('/iftar')}`}
            {...(pathname === '/iftar' ? { 'aria-current': 'page' as const } : {})}
          >
            İftara Ne Kadar Kaldı?
          </Link>
        </div>
      </div>
    </nav>
  );
}
