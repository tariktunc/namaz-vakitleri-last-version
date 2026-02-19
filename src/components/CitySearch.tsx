'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useCity } from '@/context/CityContext';
import { getCityNameFromInput, cityCoordinates } from '@/utils/cities';

export function CitySearch() {
  const { selectedCity, setSelectedCity, displayCity, setDisplayCity, isLoading, detectLocation, isDetecting, locationError } = useCity();
  const [searchInput, setSearchInput] = useState(displayCity);
  const [suggestions, setSuggestions] = useState<Array<{ id: string; display: string }>>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isInputError, setIsInputError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  const suggestedCities = [
    { id: 'istanbul', display: 'İstanbul' },
    { id: 'ankara', display: 'Ankara' },
    { id: 'trabzon', display: 'Trabzon' }
  ];

  const normalizeStr = useCallback((str: string) => {
    return str
      .toLowerCase()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .trim();
  }, []);

  const filterCities = useCallback((input: string) => {
    if (!input) return [];
    const normalizedInput = normalizeStr(input);
    const matches = Object.entries(cityCoordinates)
      .filter(([key, value]) => {
        const normalizedKey = normalizeStr(key);
        const normalizedName = normalizeStr(value.name);
        return normalizedKey.includes(normalizedInput) || 
               normalizedName.includes(normalizedInput) ||
               (key.length === 2 && key === input);
      })
      .map(([key, value]) => ({
        id: key,
        display: value.name
      }))
      .slice(0, 5);

    return matches;
  }, [normalizeStr]);

  useEffect(() => {
    const filteredSuggestions = filterCities(searchInput);
    setSuggestions(filteredSuggestions);
  }, [searchInput, filterCities]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    setIsInputError(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current && 
        !inputRef.current.contains(event.target as Node) &&
        suggestionsRef.current && 
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleSuggestionClick = (suggestion: { id: string; display: string }) => {
    setSearchInput(suggestion.display);
    setSelectedCity(suggestion.id);
    setDisplayCity(suggestion.display);
    setSuggestions([]);
    setIsFocused(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const normalizedCity = getCityNameFromInput(searchInput);
      const cityData = cityCoordinates[normalizedCity];
      if (cityData) {
        setSelectedCity(normalizedCity);
        setDisplayCity(cityData.name);
        setSuggestions([]);
        setErrorMessage('');
        setIsInputError(false);
      } else {
        setErrorMessage('Geçerli bir şehir adı veya plaka kodu giriniz');
        setIsInputError(true);
      }
    } catch (_err) {
      setErrorMessage('Geçerli bir şehir adı veya plaka kodu giriniz');
      setIsInputError(true);
    }
  };

  const handleCityClick = (cityInfo: { id: string; display: string }) => {
    try {
      const normalizedCity = getCityNameFromInput(cityInfo.id);
      setSelectedCity(normalizedCity);
      setDisplayCity(cityInfo.display);
      setSearchInput(cityInfo.display);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Geçerli bir şehir adı veya plaka kodu giriniz');
      setIsInputError(true);
    }
  };

  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleDetectLocation = async () => {
    await detectLocation();
    setSearchInput(displayCity);
  };

  useEffect(() => {
    setSearchInput(displayCity);
  }, [displayCity]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 mb-4 sm:mb-8">
      <form onSubmit={handleSubmit} className="mb-6 sm:mb-8 relative">
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={isBrowser ? searchInput : displayCity}
              onChange={handleInputChange}
              onFocus={handleFocus}
              placeholder="Şehir adı veya plaka kodu giriniz"
              className={`w-full p-2.5 sm:p-3 text-sm sm:text-base border ${
                isInputError
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-[#8FB3D6] focus:ring-[#1E4D7B] focus:border-[#1E4D7B]'
              } rounded-lg focus:ring-2 text-[#2C3E50] placeholder-gray-400 transition-colors`}
              aria-invalid={isInputError}
              aria-describedby={errorMessage ? "error-message" : undefined}
            />
            {errorMessage && (
              <p
                id="error-message"
                className="absolute -bottom-5 left-0 text-xs sm:text-sm text-red-600"
              >
                {errorMessage}
              </p>
            )}
            {locationError && (
              <p className="absolute -bottom-5 left-0 text-xs sm:text-sm text-red-600">
                {locationError}
              </p>
            )}
            {suggestions.length > 0 && isFocused && (
              <div
                ref={suggestionsRef}
                className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto"
              >
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    type="button"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full px-3 sm:px-4 py-2 text-left text-sm sm:text-base hover:bg-gray-100 text-[#2C3E50]"
                  >
                    {suggestion.display}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex gap-2 sm:gap-3">
            <button
              type="submit"
              disabled={isLoading}
              className={`flex-1 p-2.5 sm:p-3 text-sm sm:text-base bg-[#1E4D7B] text-white rounded-lg transition-colors ${
                isLoading
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-[#1E4D7B]/90'
              }`}
            >
              {isLoading ? 'Aranıyor...' : 'Ara'}
            </button>
            <button
              type="button"
              onClick={handleDetectLocation}
              disabled={isDetecting || isLoading}
              className={`flex items-center gap-1.5 px-3 sm:px-4 p-2.5 sm:p-3 text-sm sm:text-base border-2 border-[#1E4D7B] text-[#1E4D7B] rounded-lg transition-colors ${
                isDetecting || isLoading
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-[#1E4D7B] hover:text-white'
              }`}
              title="Konumumu Tespit Et"
            >
              {isDetecting ? (
                <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
              <span className="hidden sm:inline">{isDetecting ? 'Tespit ediliyor...' : 'Konum'}</span>
            </button>
          </div>
        </div>
      </form>

      <div className="text-center space-y-3">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#8FB3D6]"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-3 sm:px-4 text-xs sm:text-sm font-medium text-[#1E4D7B]">
              Popüler Şehirler
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {suggestedCities.map((cityInfo) => (
            <button
              key={cityInfo.id}
              type="button"
              disabled={isLoading}
              onClick={() => handleCityClick(cityInfo)}
              className={`px-3 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-base rounded-full transition-colors ${
                selectedCity === cityInfo.id
                  ? 'bg-[#1E4D7B] text-white hover:bg-[#1E4D7B]/90'
                  : 'bg-[#F5F7FA] text-[#2C3E50] hover:bg-[#8FB3D6] hover:text-white'
              } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {cityInfo.display}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 