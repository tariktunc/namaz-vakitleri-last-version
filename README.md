# Namaz Vakitleri - Her Vakit Yanınızda

<div align="center">

**Türkiye geneli için güncel namaz ve iftar vakitlerini gösteren modern web uygulaması**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.19-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

[Demo](https://namaz-vakitleri-blakfy.netlify.app/) • [Özellikler](#özellikler) • [Kurulum](#kurulum) • [Katkıda Bulunma](#katkıda-bulunma)

</div>

---

## 📖 İçindekiler

- [Özellikler](#özellikler)
- [Teknolojiler](#teknolojiler)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [API Dokümantasyonu](#api-dokümantasyonu)
- [Marka Kimliği](#marka-kimliği)
- [Proje Yapısı](#proje-yapısı)
- [Geliştirme](#geliştirme)
- [Deployment](#deployment)
- [Katkıda Bulunma](#katkıda-bulunma)
- [Lisans](#lisans)
- [İletişim](#iletişim)

---

## ✨ Özellikler

### 🕌 Namaz Vakitleri
- **81 İl desteği** - Türkiye genelindeki tüm şehirler için güncel vakit bilgileri
- **Diyanet onaylı** - AlAdhan API ile Diyanet İşleri Başkanlığı hesaplama metodu (Method 13)
- **Canlı geri sayım** - Bir sonraki namaz vaktine kalan süreyi gerçek zamanlı gösterim
- **Otomatik güncelleme** - Vakit girdiğinde otomatik olarak sıradaki vakti gösterir

### 🌙 İftar & Sahur
- **Ramazan odaklı** - İftar vakti ana sayfada öne çıkarılmış
- **Geri sayım sistemi** - İftara ve sahura kalan süreyi gösterir
- **Otomatik geçiş** - İftar vakti girdikten sonra sahur geri sayımına otomatik geçiş

### 🎯 Kullanıcı Deneyimi
- **Akıllı şehir seçimi** - Popüler şehirler, arama önerileri ve Türkçe karakter desteği
- **Konum tabanlı varsayılan** - GPS ile otomatik konum belirleme (İstanbul fallback)
- **localStorage** - Kullanıcının seçtiği şehir kaydedilir ve hatırlanır
- **Responsive tasarım** - Mobil, tablet ve masaüstü uyumlu
- **Erişilebilirlik** - WCAG AA uyumlu, reduced-motion desteği

### 🚀 Performans & SEO
- **Lighthouse 90+** - Yüksek performans skoru
- **Dinamik metadata** - Şehir ve zaman bazlı SEO optimizasyonu
- **OpenGraph & Twitter Cards** - Sosyal medya paylaşımları için optimize edilmiş
- **Structured Data** - JSON-LD schema markup
- **Sitemap & Robots.txt** - Arama motoru tarayıcıları için optimize edilmiş

### 🎨 Marka Kimliği
- **Tutarlı tasarım sistemi** - Özel renk paleti, tipografi ve animasyonlar
- **Dindar hedef kitle** - Sakin, huzurlu ve profesyonel görünüm
- **Özel logo ve ikonlar** - Minare, hilal ve yıldız temalı SVG tasarımlar

---

## 🛠️ Teknolojiler

### Frontend
- **[Next.js 16.1.6](https://nextjs.org/)** - React framework (App Router, Turbopack)
- **[React 19.0.0](https://react.dev/)** - UI library
- **[TypeScript 5.x](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 3.4.19](https://tailwindcss.com/)** - Utility-first CSS framework

### API & Data
- **[AlAdhan API](https://aladhan.com/prayer-times-api)** - Prayer times calculation
- **[Axios](https://axios-http.com/)** - HTTP client
- **localStorage** - Client-side data persistence

### Developer Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler for development

---

## 📦 Kurulum

### Gereksinimler
- Node.js 18.x veya üzeri
- npm 9.x veya üzeri

### Adımlar

1. **Repoyu klonlayın**
```bash
git clone https://github.com/tariktunc/namaz-vakitleri.git
cd namaz-vakitleri
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
```

4. **Tarayıcıda açın**
```
http://localhost:3000
```

### Build & Production

```bash
# Production build
npm run build

# Production sunucusunu başlat
npm start

# Lint kontrolü
npm run lint
```

---

## 🎮 Kullanım

### Şehir Seçimi

1. **Otomatik Konum**: İlk ziyarette GPS izni verin (opsiyonel)
2. **Manuel Arama**: Şehir adı yazarak arama yapın
3. **Popüler Şehirler**: Hızlı erişim butonlarını kullanın
4. **Kayıt**: Seçiminiz otomatik olarak kaydedilir

### Vakit Görüntüleme

#### Ana Sayfa (İftar Countdown)
- İftara kalan süre gerçek zamanlı gösterilir
- İftar vakti girdikten sonra sahur vakti gösterilir
- Tüm günlük namaz vakitleri listelenir

#### Namaz Vakitleri Sayfası
- Altı vakit: İmsak, Güneş, Öğle, İkindi, Akşam, Yatsı
- Bir sonraki vakite geri sayım
- Güncel tarih ve şehir bilgisi

---

## 🔌 API Dokümantasyonu

### AlAdhan API

Proje, [AlAdhan API](https://aladhan.com/prayer-times-api) kullanmaktadır.

#### Endpoint
```
GET https://api.aladhan.com/v1/timingsByCity/{date}
```

#### Parametreler
```typescript
{
  city: string,       // Şehir adı (örn: "Istanbul")
  country: "Turkey",  // Sabit
  method: 13          // Diyanet İşleri Başkanlığı
}
```

#### Hesaplama Metodu
- **Method 13**: Diyanet İşleri Başkanlığı, Türkiye
- Fecr Açısı: 18°
- İşa Açısı: 17°

#### Örnek Kullanım

```typescript
import axios from 'axios';

const getPrayerTimes = async (cityName: string) => {
  const today = new Date();
  const formattedDate = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

  const response = await axios.get(
    `https://api.aladhan.com/v1/timingsByCity/${formattedDate}`,
    {
      params: {
        city: cityName,
        country: 'Turkey',
        method: 13
      }
    }
  );

  return response.data.data.timings;
};
```

#### Response Yapısı

```typescript
interface AladhanTimings {
  Fajr: string;      // "04:30"
  Sunrise: string;   // "06:15"
  Dhuhr: string;     // "12:45"
  Asr: string;       // "15:30"
  Maghrib: string;   // "18:15"
  Isha: string;      // "19:45"
  Imsak: string;     // "04:20"
  Midnight: string;  // "00:30"
  Firstthird: string;
  Lastthird: string;
}
```

### Rate Limiting
- **Limit yok**: AlAdhan API ücretsiz ve limitsizdir
- **Önbellekleme**: 5 dakika TTL ile client-side caching önerilir

---

## 🎨 Marka Kimliği

Detaylı marka kılavuzu için [`BRAND.md`](./BRAND.md) dosyasına bakınız.

### Renk Paleti

```css
/* Primary Colors */
--brand-primary: #1E4D7B;      /* Deniz Mavisi */
--brand-sky: #8FB3D6;           /* Gök Mavisi */
--brand-gold: #C3A878;          /* Altın Sarısı */
--brand-navy: #2C3E50;          /* Koyu Lacivert */

/* Neutral Colors */
--neutral-50: #F5F7FA;          /* Açık Gri */
--neutral-800: #2C3E50;         /* Metin Gri */
```

### Tipografi

- **Font Ailesi**: Roboto, system-ui, sans-serif
- **Başlık**: 700 (Bold)
- **Metin**: 400 (Regular), 500 (Medium)

### Animasyonlar

```javascript
// Tailwind custom animations
animate-fade-in      // Yumuşak görünme
animate-slide-up     // Aşağıdan kayma
animate-slide-down   // Yukarıdan kayma
animate-pulse-gentle // Nazik nabız efekti
animate-glow         // Işıltı efekti
```

---

## 📁 Proje Yapısı

```
namaz-vakitleri/
├── public/
│   ├── logo.svg                 # Ana logo
│   ├── logo-white.svg           # Beyaz logo (koyu arka plan)
│   ├── logo-icon.svg            # Favicon için ikon
│   └── og-image-template.html   # Social media sharing template
│
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout + metadata
│   │   ├── page.tsx             # Ana sayfa (İftar countdown)
│   │   ├── globals.css          # Global styles + brand CSS
│   │   ├── sitemap.ts           # XML sitemap generator
│   │   ├── robots.ts            # Robots.txt
│   │   └── namaz-vakitleri/
│   │       └── page.tsx         # Namaz vakitleri sayfası
│   │
│   ├── components/
│   │   ├── Navbar.tsx           # Navigation
│   │   ├── Footer.tsx           # Footer with brand styling
│   │   ├── CitySearch.tsx       # Şehir arama (autocomplete)
│   │   ├── CountdownTimer.tsx   # Geri sayım bileşeni
│   │   └── StructuredData.tsx   # JSON-LD schema
│   │
│   ├── context/
│   │   └── CityContext.tsx      # Global city state + localStorage
│   │
│   ├── services/
│   │   └── api.ts               # AlAdhan API integration
│   │
│   ├── types/
│   │   └── prayer.ts            # TypeScript interfaces
│   │
│   └── utils/
│       └── cities.ts            # 81 il koordinatları + helpers
│
├── BRAND.md                     # Marka kimliği kılavuzu
├── README.md                    # Bu dosya
├── package.json
├── tailwind.config.ts           # Brand colors + animations
├── next.config.ts               # Next.js config + redirects
└── tsconfig.json
```

---

## 🔧 Geliştirme

### Scripts

```bash
# Development server (Turbopack)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Environment Variables

Şu anda API key gerekmemektedir (AlAdhan API ücretsizdir).

Gelecekte eklenebilir:
```env
# .env.local (opsiyonel)
NEXT_PUBLIC_API_BASE_URL=https://api.aladhan.com/v1
```

### Debugging

```typescript
// Developer console'da şehir değiştirme
localStorage.setItem('selectedCity', 'ankara');
localStorage.setItem('displayCity', 'Ankara');
location.reload();
```

### Testing

```bash
# Manual testing checklist
- [ ] Şehir seçimi çalışıyor mu?
- [ ] Vakit bilgileri doğru mu?
- [ ] Geri sayım çalışıyor mu?
- [ ] localStorage kaydediyor mu?
- [ ] Responsive tasarım düzgün mü?
- [ ] SEO metadata doğru mu?
```

---

## 🚀 Deployment

### Vercel (Önerilen)

1. **GitHub'a push edin**
```bash
git push origin main
```

2. **Vercel'e bağlayın**
   - [vercel.com](https://vercel.com) hesabı oluşturun
   - Repository'yi import edin
   - Auto-deploy aktif olacaktır

3. **Domain ayarlayın**
   - Custom domain ekleyin
   - DNS ayarlarını güncelleyin

### Netlify (Mevcut)

Proje şu anda Netlify üzerinde yayında: [namaz-vakitleri-blakfy.netlify.app](https://namaz-vakitleri-blakfy.netlify.app/)

### Diğer Platformlar

- **Cloudflare Pages**: Git integration
- **Railway**: Container deployment

### Build Optimizasyonu

```javascript
// next.config.ts
const nextConfig = {
  compress: true,           // Gzip compression
  poweredByHeader: false,   // Remove X-Powered-By header
  reactStrictMode: true,    // React strict mode
};
```

---

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şu adımları izleyin:

1. **Fork edin** - Projeyi kendi hesabınıza fork edin
2. **Branch oluşturun** - `git checkout -b feature/amazing-feature`
3. **Commit edin** - `git commit -m 'feat: Add amazing feature'`
4. **Push edin** - `git push origin feature/amazing-feature`
5. **Pull Request açın** - Değişikliklerinizi açıklayın

### Commit Convention

```
feat: Yeni özellik
fix: Bug düzeltmesi
docs: Dokümantasyon
style: Kod formatı (logic değişikliği yok)
refactor: Kod yeniden yapılandırma
perf: Performans iyileştirmesi
test: Test ekleme/düzeltme
chore: Build/dependency güncellemeleri
```

### Code Style

- **ESLint**: Otomatik linting
- **TypeScript**: Tüm kodlar type-safe olmalı
- **Prettier**: Kod formatı (opsiyonel)
- **Tailwind**: Inline classes (no custom CSS unless necessary)

---

## 📄 Lisans

Bu proje **MIT Lisansı** altında lisanslanmıştır.

Ticari kullanım yasak değildir ancak proje ticari amaç gütmemektedir. Diyanet İşleri Başkanlığı'nın resmi bir ürünü değildir.

---

## 📞 İletişim

### Geliştirici
**Tarık Tunç**
- Website: [tariktunc.com](https://tariktunc.com)
- GitHub: [@tariktunc](https://github.com/tariktunc)

### Veri Kaynakları
- **API**: [AlAdhan Prayer Times API](https://aladhan.com)
- **Hesaplama Metodu**: Diyanet İşleri Başkanlığı (Method 13)

### Sorunlar & Öneriler
- **Issues**: GitHub Issues sayfası
- **Pull Requests**: GitHub PRs sayfası

---

## 🙏 Teşekkürler

- **Diyanet İşleri Başkanlığı** - Hesaplama metodolojisi
- **AlAdhan.com** - Ücretsiz API hizmeti
- **Next.js Team** - Harika framework
- **Tailwind CSS** - Kullanışlı CSS framework
- **Kullanıcılarımız** - Geri bildirimler ve destek

---

<div align="center">

**Her Vakit Yanınızda** 🕌

Made with ❤️ by [Tarık Tunç](https://tariktunc.com)

</div>
