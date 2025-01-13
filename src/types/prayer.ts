export interface PrayerTimes {
  imsak: string;
  gunes: string;
  ogle: string;
  ikindi: string;
  aksam: string;
  yatsi: string;
}

export interface Place {
  countryCode: string;
  country: string;
  region: string;
  city: string;
  latitude: number;
  longitude: number;
}

export interface ApiResponse {
  place: Place;
  times: {
    [date: string]: string[];
  };
}

// Boş bir export ekleyelim ki dosya modül olarak tanınsın
export {} 