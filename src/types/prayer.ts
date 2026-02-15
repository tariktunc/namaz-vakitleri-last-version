export interface PrayerTimes {
  imsak: string;
  gunes: string;
  ogle: string;
  ikindi: string;
  aksam: string;
  yatsi: string;
}

// Aladhan API Response Types
export interface AladhanTimings {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
  Firstthird: string;
  Lastthird: string;
}

export interface AladhanDate {
  readable: string;
  timestamp: string;
  hijri: {
    date: string;
    day: string;
    month: {
      number: number;
      en: string;
      ar: string;
    };
    year: string;
  };
  gregorian: {
    date: string;
    day: string;
    month: {
      number: number;
      en: string;
    };
    year: string;
  };
}

export interface AladhanMeta {
  latitude: number;
  longitude: number;
  timezone: string;
  method: {
    id: number;
    name: string;
  };
}

export interface AladhanData {
  timings: AladhanTimings;
  date: AladhanDate;
  meta: AladhanMeta;
}

export interface AladhanApiResponse {
  code: number;
  status: string;
  data: AladhanData;
} 