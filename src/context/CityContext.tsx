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
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export function CityProvider({ children }: { children: ReactNode }) {
  const [selectedCity, setSelectedCity] = useState<string>('istanbul');
  const [displayCity, setDisplayCity] = useState<string>('İstanbul');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const initializeCity = async () => {
      try {
        setIsLoading(true);
        try {
          const detectedCity = await LocationDetector();
          const normalizedCity = getCityNameFromInput(detectedCity.toLowerCase());
          const cityData = cityCoordinates[normalizedCity];
          
          if (cityData) {
            setSelectedCity(normalizedCity);
            setDisplayCity(cityData.name);
            return;
          }
        } catch (error) {
          console.warn('Konum tespit edilemedi:', error);
        }

        setSelectedCity('istanbul');
        setDisplayCity('İstanbul');
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
          setIsLoading: () => {}
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
        setIsLoading
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