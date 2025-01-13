interface CityData {
  [key: string]: string;
}

interface CityCoordinates {
  [key: string]: {
    lat: number;
    lng: number;
    name: string;
  };
}

export const cityPlates: CityData = {
  '01': 'adana',
  '02': 'adıyaman',
  '03': 'afyonkarahisar',
  '04': 'ağrı',
  '05': 'amasya',
  '06': 'ankara',
  '07': 'antalya',
  '08': 'artvin',
  '09': 'aydın',
  '10': 'balıkesir',
  '11': 'bilecik',
  '12': 'bingöl',
  '13': 'bitlis',
  '14': 'bolu',
  '15': 'burdur',
  '16': 'bursa',
  '17': 'çanakkale',
  '18': 'çankırı',
  '19': 'çorum',
  '20': 'denizli',
  '21': 'diyarbakır',
  '22': 'edirne',
  '23': 'elazığ',
  '24': 'erzincan',
  '25': 'erzurum',
  '26': 'eskişehir',
  '27': 'gaziantep',
  '28': 'giresun',
  '29': 'gümüşhane',
  '30': 'hakkari',
  '31': 'hatay',
  '32': 'ısparta',
  '33': 'mersin',
  '34': 'istanbul',
  '35': 'izmir',
  '36': 'kars',
  '37': 'kastamonu',
  '38': 'kayseri',
  '39': 'kırklareli',
  '40': 'kırşehir',
  '41': 'kocaeli',
  '42': 'konya',
  '43': 'kütahya',
  '44': 'malatya',
  '45': 'manisa',
  '46': 'kahramanmaraş',
  '47': 'mardin',
  '48': 'muğla',
  '49': 'muş',
  '50': 'nevşehir',
  '51': 'niğde',
  '52': 'ordu',
  '53': 'rize',
  '54': 'sakarya',
  '55': 'samsun',
  '56': 'siirt',
  '57': 'sinop',
  '58': 'sivas',
  '59': 'tekirdağ',
  '60': 'tokat',
  '61': 'trabzon',
  '62': 'tunceli',
  '63': 'şanlıurfa',
  '64': 'uşak',
  '65': 'van',
  '66': 'yozgat',
  '67': 'zonguldak',
  '68': 'aksaray',
  '69': 'bayburt',
  '70': 'karaman',
  '71': 'kırıkkale',
  '72': 'batman',
  '73': 'şırnak',
  '74': 'bartın',
  '75': 'ardahan',
  '76': 'ığdır',
  '77': 'yalova',
  '78': 'karabük',
  '79': 'kilis',
  '80': 'osmaniye',
  '81': 'düzce'
};

export const cityCoordinates: CityCoordinates = {
  'adana': { lat: 37.0000, lng: 35.3213, name: 'Adana' },
  'adiyaman': { lat: 37.7648, lng: 38.2786, name: 'Adıyaman' },
  'afyonkarahisar': { lat: 38.7507, lng: 30.5567, name: 'Afyonkarahisar' },
  'agri': { lat: 39.7191, lng: 43.0503, name: 'Ağrı' },
  'amasya': { lat: 40.6499, lng: 35.8353, name: 'Amasya' },
  'ankara': { lat: 39.9334, lng: 32.8597, name: 'Ankara' },
  'antalya': { lat: 36.8969, lng: 30.7133, name: 'Antalya' },
  'artvin': { lat: 41.1828, lng: 41.8183, name: 'Artvin' },
  'aydin': { lat: 37.8560, lng: 27.8416, name: 'Aydın' },
  'balikesir': { lat: 39.6484, lng: 27.8826, name: 'Balıkesir' },
  'bilecik': { lat: 40.1506, lng: 29.9791, name: 'Bilecik' },
  'bingol': { lat: 38.8854, lng: 40.4980, name: 'Bingöl' },
  'bitlis': { lat: 38.4006, lng: 42.1095, name: 'Bitlis' },
  'bolu': { lat: 40.7392, lng: 31.6089, name: 'Bolu' },
  'burdur': { lat: 37.7765, lng: 30.2903, name: 'Burdur' },
  'bursa': { lat: 40.1885, lng: 29.0610, name: 'Bursa' },
  'canakkale': { lat: 40.1553, lng: 26.4142, name: 'Çanakkale' },
  'cankiri': { lat: 40.6013, lng: 33.6134, name: 'Çankırı' },
  'corum': { lat: 40.5506, lng: 34.9556, name: 'Çorum' },
  'denizli': { lat: 37.7765, lng: 29.0864, name: 'Denizli' },
  'diyarbakir': { lat: 37.9144, lng: 40.2306, name: 'Diyarbakır' },
  'edirne': { lat: 41.6818, lng: 26.5623, name: 'Edirne' },
  'elazig': { lat: 38.6810, lng: 39.2264, name: 'Elazığ' },
  'erzincan': { lat: 39.7500, lng: 39.5000, name: 'Erzincan' },
  'erzurum': { lat: 39.9000, lng: 41.2700, name: 'Erzurum' },
  'eskisehir': { lat: 39.7767, lng: 30.5206, name: 'Eskişehir' },
  'gaziantep': { lat: 37.0662, lng: 37.3833, name: 'Gaziantep' },
  'giresun': { lat: 40.9128, lng: 38.3895, name: 'Giresun' },
  'gumushane': { lat: 40.4386, lng: 39.5086, name: 'Gümüşhane' },
  'hakkari': { lat: 37.5833, lng: 43.7333, name: 'Hakkari' },
  'hatay': { lat: 36.4018, lng: 36.3498, name: 'Hatay' },
  'isparta': { lat: 37.7648, lng: 30.5566, name: 'Isparta' },
  'mersin': { lat: 36.8000, lng: 34.6333, name: 'Mersin' },
  'istanbul': { lat: 41.0082, lng: 28.9784, name: 'İstanbul' },
  'izmir': { lat: 38.4192, lng: 27.1287, name: 'İzmir' },
  'kars': { lat: 40.6167, lng: 43.1000, name: 'Kars' },
  'kastamonu': { lat: 41.3887, lng: 33.7827, name: 'Kastamonu' },
  'kayseri': { lat: 38.7312, lng: 35.4787, name: 'Kayseri' },
  'kirklareli': { lat: 41.7333, lng: 27.2167, name: 'Kırklareli' },
  'kirsehir': { lat: 39.1425, lng: 34.1709, name: 'Kırşehir' },
  'kocaeli': { lat: 40.8533, lng: 29.8815, name: 'Kocaeli' },
  'konya': { lat: 37.8667, lng: 32.4833, name: 'Konya' },
  'kutahya': { lat: 39.4167, lng: 29.9833, name: 'Kütahya' },
  'malatya': { lat: 38.3552, lng: 38.3095, name: 'Malatya' },
  'manisa': { lat: 38.6191, lng: 27.4289, name: 'Manisa' },
  'kahramanmaras': { lat: 37.5858, lng: 36.9371, name: 'Kahramanmaraş' },
  'mardin': { lat: 37.3212, lng: 40.7245, name: 'Mardin' },
  'mugla': { lat: 37.2153, lng: 28.3636, name: 'Muğla' },
  'mus': { lat: 38.7432, lng: 41.5064, name: 'Muş' },
  'nevsehir': { lat: 38.6244, lng: 34.7144, name: 'Nevşehir' },
  'nigde': { lat: 37.9667, lng: 34.6833, name: 'Niğde' },
  'ordu': { lat: 40.9839, lng: 37.8764, name: 'Ordu' },
  'rize': { lat: 41.0201, lng: 40.5234, name: 'Rize' },
  'sakarya': { lat: 40.7569, lng: 30.3783, name: 'Sakarya' },
  'samsun': { lat: 41.2867, lng: 36.3300, name: 'Samsun' },
  'siirt': { lat: 37.9333, lng: 41.9500, name: 'Siirt' },
  'sinop': { lat: 42.0231, lng: 35.1531, name: 'Sinop' },
  'sivas': { lat: 39.7477, lng: 37.0179, name: 'Sivas' },
  'tekirdag': { lat: 40.9833, lng: 27.5167, name: 'Tekirdağ' },
  'tokat': { lat: 40.3167, lng: 36.5500, name: 'Tokat' },
  'trabzon': { lat: 41.0027, lng: 39.7168, name: 'Trabzon' },
  'tunceli': { lat: 39.1079, lng: 39.5401, name: 'Tunceli' },
  'sanliurfa': { lat: 37.1591, lng: 38.7969, name: 'Şanlıurfa' },
  'usak': { lat: 38.6823, lng: 29.4082, name: 'Uşak' },
  'van': { lat: 38.4891, lng: 43.4089, name: 'Van' },
  'yozgat': { lat: 39.8181, lng: 34.8147, name: 'Yozgat' },
  'zonguldak': { lat: 41.4564, lng: 31.7987, name: 'Zonguldak' },
  'aksaray': { lat: 38.3687, lng: 34.0370, name: 'Aksaray' },
  'bayburt': { lat: 40.2552, lng: 40.2249, name: 'Bayburt' },
  'karaman': { lat: 37.1759, lng: 33.2287, name: 'Karaman' },
  'kirikkale': { lat: 39.8468, lng: 33.5153, name: 'Kırıkkale' },
  'batman': { lat: 37.8812, lng: 41.1351, name: 'Batman' },
  'sirnak': { lat: 37.5164, lng: 42.4611, name: 'Şırnak' },
  'bartin': { lat: 41.6344, lng: 32.3375, name: 'Bartın' },
  'ardahan': { lat: 41.1105, lng: 42.7022, name: 'Ardahan' },
  'igdir': { lat: 39.9167, lng: 44.0333, name: 'Iğdır' },
  'yalova': { lat: 40.6500, lng: 29.2667, name: 'Yalova' },
  'karabuk': { lat: 41.2061, lng: 32.6204, name: 'Karabük' },
  'kilis': { lat: 36.7184, lng: 37.1212, name: 'Kilis' },
  'osmaniye': { lat: 37.0742, lng: 36.2472, name: 'Osmaniye' },
  'duzce': { lat: 40.8438, lng: 31.1565, name: 'Düzce' }
};

// Levenshtein Distance algoritması
function levenshteinDistance(a: string, b: string): number {
  const matrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));

  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + indicator
      );
    }
  }

  return matrix[b.length][a.length];
}

// Türkçe karakterleri normalize etme
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/İ/g, 'i')
    .replace(/Ğ/g, 'g')
    .replace(/Ü/g, 'u')
    .replace(/Ş/g, 's')
    .replace(/Ö/g, 'o')
    .replace(/Ç/g, 'c')
    .replace(/[^a-z]/g, '')
    .trim();
}

// Tüm şehirlerin referans listesi
const cityReferences = {
  'istanbul': ['istanbul', 'İstanbul'],
  'ankara': ['ankara', 'Ankara'],
  'izmir': ['izmir', 'İzmir'],
  'bursa': ['bursa', 'Bursa'],
  'antalya': ['antalya', 'Antalya'],
  'trabzon': ['trabzon', 'Trabzon'],
  'adana': ['adana', 'Adana'],
  'konya': ['konya', 'Konya'],
  'duzce': ['düzce', 'duzce', 'Düzce'],
  // ... diğer şehirler eklenebilir
};

// Şehir adını düzeltme fonksiyonu
export function findCorrectCityName(input: string): string {
  const normalizedInput = normalizeText(input);
  
  // Önce tam eşleşme kontrolü
  for (const [cityKey, variations] of Object.entries(cityReferences)) {
    if (variations.some(v => normalizeText(v) === normalizedInput)) {
      return cityKey;
    }
  }

  // Tam eşleşme yoksa en yakın eşleşmeyi bul
  let closestMatch = '';
  let minDistance = Infinity;

  for (const [cityKey, variations] of Object.entries(cityReferences)) {
    for (const variation of variations) {
      const distance = levenshteinDistance(normalizedInput, normalizeText(variation));
      if (distance < minDistance) {
        minDistance = distance;
        closestMatch = cityKey;
      }
    }
  }

  // Eğer benzerlik skoru kabul edilebilir seviyedeyse (örn: 3'ten küçükse)
  if (minDistance <= 3) {
    return closestMatch;
  }

  throw new Error('Geçerli bir şehir adı bulunamadı');
}

// Mevcut getCityNameFromInput fonksiyonunu güncelle
export const getCityNameFromInput = (input: string): string => {
  const normalizedInput = normalizeText(input);

  // Plaka kodu kontrolü
  if (/^[0-9]{1,2}$/.test(input)) {
    const plate = input.length === 1 ? `0${input}` : input;
    const cityName = cityPlates[plate];
    if (cityName) {
      return normalizeText(cityName);
    }
  }

  // Şehir adı kontrolü
  const cityKey = Object.keys(cityCoordinates).find(key => 
    normalizeText(key) === normalizedInput ||
    normalizeText(cityCoordinates[key].name) === normalizedInput
  );

  if (cityKey) {
    return cityKey;
  }

  throw new Error('Geçerli bir şehir adı veya plaka kodu giriniz');
};

export const getCityCoordinates = (cityName: string) => {
  // Şehir adını normalize et
  const normalizedInput = normalizeText(cityName);
  
  // Plaka kodu kontrolü
  if (/^[0-9]{1,2}$/.test(cityName)) {
    const plate = cityName.length === 1 ? `0${cityName}` : cityName;
    const cityFromPlate = cityPlates[plate];
    if (cityFromPlate) {
      const cityKey = normalizeText(cityFromPlate);
      return cityCoordinates[cityKey];
    }
  }

  // Doğrudan şehir adı kontrolü
  const cityKey = Object.keys(cityCoordinates).find(key => 
    normalizeText(key) === normalizedInput ||
    normalizeText(cityCoordinates[key].name) === normalizedInput
  );

  if (cityKey) {
    return cityCoordinates[cityKey];
  }

  throw new Error(`${cityName} için koordinat bilgisi bulunamadı`);
}; 