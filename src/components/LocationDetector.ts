export async function LocationDetector(): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject('Tarayıcınız konum özelliğini desteklemiyor');
      return;
    }

    const successCallback = async (position: GeolocationPosition) => {
      try {
        const { latitude, longitude } = position.coords;
        
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?` +
          `lat=${latitude}&` +
          `lon=${longitude}&` +
          `format=json&accept-language=tr`
        );
        
        if (!response.ok) {
          throw new Error('Konum servisi yanıt vermedi');
        }

        const data = await response.json();
        const city = data.address.city || 
                    data.address.town || 
                    data.address.state || 
                    data.address.county;

        if (!city) {
          throw new Error('Şehir bilgisi bulunamadı');
        }

        resolve(city);
      } catch (err) {
        reject('Konumunuz belirlenemedi');
      }
    };

    const errorCallback = (error: GeolocationPositionError) => {
      let errorMessage: string;
      
      switch (error.code) {
        case error.PERMISSION_DENIED:
          errorMessage = 'Konum izni verilmedi';
          break;
        case error.POSITION_UNAVAILABLE:
          errorMessage = 'Konum bilgisi alınamadı';
          break;
        case error.TIMEOUT:
          errorMessage = 'Konum alma işlemi zaman aşımına uğradı';
          break;
        default:
          errorMessage = 'Konum alınamadı';
      }

      reject(errorMessage);
    };

    const options: PositionOptions = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 30000
    };

    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      options
    );
  });
} 