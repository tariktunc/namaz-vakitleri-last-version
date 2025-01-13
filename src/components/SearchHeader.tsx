'use client';

import { useState } from 'react';
import { getCityNameFromInput } from '@/utils/cities';

interface SearchHeaderProps {
  onCitySelect: (city: string) => void;
}

export function SearchHeader({ onCitySelect }: SearchHeaderProps) {
  const [searchInput, setSearchInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const normalizedCity = getCityNameFromInput(searchInput);
      onCitySelect(normalizedCity);
      setSearchInput('');
      setErrorMessage('');
    } catch (_err) {
      setErrorMessage('Geçerli bir şehir adı giriniz');
    }
  };

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-4xl mx-auto p-4">
        <form onSubmit={handleSearch} className="flex gap-4">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Şehir adı veya plaka kodu giriniz"
            className="flex-1 p-3 border border-[#8FB3D6] rounded-lg focus:ring-2 focus:ring-[#1E4D7B] focus:border-[#1E4D7B] text-[#2C3E50]"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[#1E4D7B] text-white rounded-lg hover:bg-[#1E4D7B]/90 transition-colors"
          >
            Ara
          </button>
        </form>
        {errorMessage && (
          <p className="mt-2 text-sm text-red-600">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
} 