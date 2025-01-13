'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'bg-[#1E4D7B] text-white' : 'text-[#1E4D7B] hover:bg-[#1E4D7B]/10';
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center h-16 gap-4">
          <Link
            href="/"
            className={`px-4 py-2 rounded-lg transition-colors ${isActive('/')}`}
          >
            Namaz Vakitleri
          </Link>
          <div className="w-px h-6 bg-gray-200"></div>
          <Link
            href="/iftar"
            className={`px-4 py-2 rounded-lg transition-colors ${isActive('/iftar')}`}
          >
            İftara Ne Kadar Kaldı?
          </Link>
        </div>
      </div>
    </nav>
  );
} 