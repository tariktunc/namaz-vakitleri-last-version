'use client';

import { useState, useRef, useEffect } from 'react';
import { useCity } from '@/context/CityContext';
import { cityCoordinates, getCityNameFromInput } from '@/utils/cities';

export function CitySearch() {
  const { setSelectedCity, setDisplayCity, displayCity, detectLocation, isDetecting, isLoading, locationError } = useCity();
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

  const handleDetectLocation = async () => {
    await detectLocation();
  };

  useEffect(() => {
    if (displayCity) {
      setSearchInput(displayCity);
    }
  }, [displayCity]);

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
            disabled={isLoading}
            className={`px-6 py-4 bg-[#1E4D7B] text-white font-semibold rounded-lg shadow-sm hover:bg-[#2C3E50] focus:ring-2 focus:ring-[#1E4D7B] focus:ring-offset-2 transition-all ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Ara
          </button>
          <button
            type="button"
            onClick={handleDetectLocation}
            disabled={isDetecting || isLoading}
            className={`flex items-center gap-1.5 px-4 py-4 border-2 border-[#1E4D7B] text-[#1E4D7B] font-semibold rounded-lg shadow-sm transition-all ${
              isDetecting || isLoading
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-[#1E4D7B] hover:text-white'
            }`}
            title="Konumumu Tespit Et"
          >
            {isDetecting ? (
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            )}
            <span className="hidden sm:inline">{isDetecting ? 'Tespit ediliyor...' : 'Konum'}</span>
          </button>
        </div>
        {errorMessage && (
          <p className="absolute -bottom-6 left-0 text-red-500 text-sm">
            {errorMessage}
          </p>
        )}
        {locationError && !errorMessage && (
          <p className="absolute -bottom-6 left-0 text-red-500 text-sm">
            {locationError}
          </p>
        )}
      </div>
    </form>
  );
} 