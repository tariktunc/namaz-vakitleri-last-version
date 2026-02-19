'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { LocationDetector } from '@/components/LocationDetector';
import { getCityNameFromInput, cityCoordinates } from '@/utils/cities';

interface CityContextType {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  displayCity: string;
  setDisplayCity: (city: string) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  detectLocation: () => Promise<void>;
  isDetecting: boolean;
  locationError: string | null;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export function CityProvider({ children }: { children: ReactNode }) {
  const [selectedCity, setSelectedCity] = useState<string>('istanbul');
  const [displayCity, setDisplayCity] = useState<string>('İstanbul');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isDetecting, setIsDetecting] = useState<boolean>(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const initializeCity = async () => {
      try {
        setIsLoading(true);

        // 1. Önce localStorage'dan kontrol et
        const savedCity = localStorage.getItem('selectedCity');
        const savedDisplayCity = localStorage.getItem('displayCity');

        if (savedCity && savedDisplayCity) {
          try {
            const cityData = cityCoordinates[savedCity];
            if (cityData) {
              setSelectedCity(savedCity);
              setDisplayCity(savedDisplayCity);
              return;
            }
          } catch (error) {
            console.warn('Kaydedilmiş şehir yüklenemedi:', error);
          }
        }

        // 2. localStorage yoksa konum tespiti yap
        try {
          const detectedCity = await LocationDetector();
          const normalizedCity = getCityNameFromInput(detectedCity.toLowerCase());
          const cityData = cityCoordinates[normalizedCity];

          if (cityData) {
            setSelectedCity(normalizedCity);
            setDisplayCity(cityData.name);
            // İlk konum tespitinde kaydet
            localStorage.setItem('selectedCity', normalizedCity);
            localStorage.setItem('displayCity', cityData.name);
            return;
          }
        } catch (error) {
          console.warn('Konum tespit edilemedi:', error);
        }

        // 3. Her ikisi de başarısız olursa İstanbul
        setSelectedCity('istanbul');
        setDisplayCity('İstanbul');
        localStorage.setItem('selectedCity', 'istanbul');
        localStorage.setItem('displayCity', 'İstanbul');
      } catch (error) {
        console.error('Şehir başlatma hatası:', error);
        setSelectedCity('istanbul');
        setDisplayCity('İstanbul');
      } finally {
        setIsLoading(false);
      }
    };

    initializeCity();
  }, [isMounted]);

  const handleSetSelectedCity = (city: string) => {
    setSelectedCity(city);
    // localStorage'a kaydet
    localStorage.setItem('selectedCity', city);
    // Display city'yi de güncelle ve kaydet
    const cityData = cityCoordinates[city];
    if (cityData) {
      setDisplayCity(cityData.name);
      localStorage.setItem('displayCity', cityData.name);
    }
  };

  const detectLocation = async () => {
    setIsDetecting(true);
    setLocationError(null);
    try {
      const detectedCity = await LocationDetector();
      const normalizedCity = getCityNameFromInput(detectedCity.toLowerCase());
      const cityData = cityCoordinates[normalizedCity];

      if (cityData) {
        setSelectedCity(normalizedCity);
        setDisplayCity(cityData.name);
        localStorage.setItem('selectedCity', normalizedCity);
        localStorage.setItem('displayCity', cityData.name);
      } else {
        setLocationError('Konumunuz Türkiye sınırları içinde tespit edilemedi');
      }
    } catch (error) {
      setLocationError(typeof error === 'string' ? error : 'Konum tespit edilemedi');
    } finally {
      setIsDetecting(false);
    }
  };

  if (!isMounted) {
    return (
      <CityContext.Provider
        value={{
          selectedCity: 'istanbul',
          setSelectedCity: () => {},
          displayCity: 'İstanbul',
          setDisplayCity: () => {},
          isLoading: true,
          setIsLoading: () => {},
          detectLocation: async () => {},
          isDetecting: false,
          locationError: null
        }}
      >
        {children}
      </CityContext.Provider>
    );
  }

  return (
    <CityContext.Provider
      value={{
        selectedCity,
        setSelectedCity: handleSetSelectedCity,
        displayCity,
        setDisplayCity,
        isLoading,
        setIsLoading,
        detectLocation,
        isDetecting,
        locationError
      }}
    >
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  const context = useContext(CityContext);
  if (context === undefined) {
    throw new Error('useCity must be used within a CityProvider');
  }
  return context;
} 