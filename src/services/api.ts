import axios from 'axios';
import type { PrayerTimes, ApiResponse } from '../types/prayer';
import { getCityCoordinates } from '../utils/cities';

export const getPrayerTimes = async (city: string): Promise<PrayerTimes> => {
  try {
    const cityData = getCityCoordinates(city);
    const today = new Date().toISOString().split('T')[0];
    
    const response = await axios.get<ApiResponse>(
      'https://vakit.vercel.app/api/timesFromCoordinates',
      {
        params: {
          lat: cityData.lat,
          lng: cityData.lng,
          date: today,
          days: 1,
          timezoneOffset: 180,
          calculationMethod: 'Turkey'
        }
      }
    );

    const times = response.data.times[today];

    if (!times || times.length !== 6) {
      throw new Error('Namaz vakitleri alınamadı');
    }

    return {
      imsak: times[0],
      gunes: times[1],
      ogle: times[2],
      ikindi: times[3],
      aksam: times[4],
      yatsi: times[5]
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`${city} için namaz vakitleri alınamadı: ${error.message}`);
    }
    throw new Error('Namaz vakitleri alınamadı');
  }
}; 