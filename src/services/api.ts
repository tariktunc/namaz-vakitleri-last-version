import axios from 'axios';
import type { PrayerTimes, AladhanApiResponse } from '../types/prayer';
import { getCityCoordinates } from '../utils/cities';

export const getPrayerTimes = async (city: string): Promise<PrayerTimes> => {
  try {
    const cityData = getCityCoordinates(city);
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '-'); // Format: DD-MM-YYYY

    const response = await axios.get<AladhanApiResponse>(
      `https://api.aladhan.com/v1/timingsByCity/${formattedDate}`,
      {
        params: {
          city: cityData.name,
          country: 'Turkey',
          method: 13 // Diyanet İşleri Başkanlığı, Turkey
        }
      }
    );

    if (response.data.code !== 200 || !response.data.data) {
      throw new Error('Namaz vakitleri alınamadı');
    }

    const timings = response.data.data.timings;

    return {
      imsak: timings.Imsak,
      gunes: timings.Sunrise,
      ogle: timings.Dhuhr,
      ikindi: timings.Asr,
      aksam: timings.Maghrib,
      yatsi: timings.Isha
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`${city} için namaz vakitleri alınamadı: ${error.message}`);
    }
    throw new Error('Namaz vakitleri alınamadı');
  }
}; 