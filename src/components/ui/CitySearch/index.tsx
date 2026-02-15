'use client';

import { useState, useRef, useEffect } from 'react';
import { useCity } from '@/context/CityContext';
import { cityCoordinates, getCityNameFromInput } from '@/utils/cities';

export function CitySearch() {
  const { setSelectedCity, setDisplayCity } = useCity();
  const [searchInput, setSearchInput] = useState('');
  const [isInputError, setIsInputError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const cityName = getCityNameFromInput(searchInput);
      const cityInfo = cityCoordinates[cityName];
      setSelectedCity(cityName);
      setDisplayCity(cityInfo.name);
      setSearchInput(cityInfo.name);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Geçerli bir şehir adı veya plaka kodu giriniz');
      setIsInputError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="relative">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              setIsInputError(false);
            }}
            placeholder="Şehir adı veya plaka kodu giriniz"
            className={`flex-1 p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-[#1E4D7B] focus:border-[#1E4D7B] outline-none transition-all ${
              isInputError ? 'border-red-500' : 'border-[#8FB3D6]'
            }`}
          />
          <button
            type="submit"
            className="px-6 py-4 bg-[#1E4D7B] text-white font-semibold rounded-lg shadow-sm hover:bg-[#2C3E50] focus:ring-2 focus:ring-[#1E4D7B] focus:ring-offset-2 transition-all"
          >
            Ara
          </button>
        </div>
        {errorMessage && (
          <p className="absolute -bottom-6 left-0 text-red-500 text-sm">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
} 