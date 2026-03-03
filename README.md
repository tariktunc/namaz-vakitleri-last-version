<div align="center">

<!-- Hero Section -->
<img src="public/logo.svg" alt="Namaz Vakitleri Logo" width="120" />

# 🕌 Namaz Vakitleri

### Her Vakit Yanınızda

**Türkiye genelindeki 81 il için güncel namaz vakitleri, iftar ve sahur saatleri**

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[![Lisans](https://img.shields.io/badge/Lisans-MIT-1B7D5A?style=for-the-badge)](LICENSE)
[![Diyanet](https://img.shields.io/badge/Diyanet-Onaylı_Metod-D4A853?style=for-the-badge)](https://diyanet.gov.tr/)
[![Netlify Status](https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://namaz-vakitleri-blakfy.netlify.app/)

<br />

[🌐 Canlı Demo](https://namaz-vakitleri-blakfy.netlify.app/) · [🐛 Bug Bildir](https://github.com/tariktunc/namaz-vakitleri-last-version/issues) · [💡 Özellik İste](https://github.com/tariktunc/namaz-vakitleri-last-version/issues)

<br />

---

</div>

## 📋 İçindekiler

<details open>
<summary><strong>Bölümler</strong></summary>

| # | Bölüm | Açıklama |
|---|-------|----------|
| 1 | [Özellikler](#-özellikler) | Uygulama özellikleri |
| 2 | [Teknolojiler](#-teknoloji-yığını) | Kullanılan teknolojiler |
| 3 | [Hızlı Başlangıç](#-hızlı-başlangıç) | Kurulum ve çalıştırma |
| 4 | [Proje Yapısı](#-proje-yapısı) | Dosya ve dizin yapısı |
| 5 | [API Referansı](#-api-referansı) | AlAdhan API kullanımı |
| 6 | [Tasarım Sistemi](#-tasarım-sistemi) | Renk, tipografi, animasyon |
| 7 | [SEO & Erişilebilirlik](#-seo--erişilebilirlik) | SEO ve WCAG uyumluluğu |
| 8 | [Deployment](#-deployment) | Yayınlama rehberi |
| 9 | [Katkıda Bulunma](#-katkıda-bulunma) | Geliştirici rehberi |
| 10 | [İletişim](#-iletişim--bağlantılar) | Geliştirici bilgileri |

</details>

---

## ✨ Özellikler

<table>
<tr>
<td width="50%">

### 🕌 Namaz Vakitleri
- 81 il desteği ile güncel vakit bilgileri
- Diyanet onaylı hesaplama (Method 13)
- Canlı geri sayım sayacı
- Otomatik vakit geçişleri

</td>
<td width="50%">

### 🌙 İftar & Sahur
- İftara kalan süre geri sayımı
- Sahura otomatik geçiş
- Ramazan odaklı arayüz
- Tüm vakitleri tek ekranda görüntüleme

</td>
</tr>
<tr>
<td width="50%">

### 📍 Akıllı Konum
- GPS ile otomatik şehir tespiti
- Akıllı arama ve öneriler
- Plaka kodu ile arama (01-81)
- Türkçe karakter normalizasyonu
- Popüler şehir hızlı erişim

</td>
<td width="50%">

### 🚀 Performans
- Next.js 16 App Router + Turbopack
- Server-side metadata & SEO
- Client-side state management
- localStorage ile veri kalıcılığı
- Responsive (mobil-öncelikli) tasarım

</td>
</tr>
</table>

---

## 🔧 Teknoloji Yığını

<div align="center">

| Katman | Teknoloji | Versiyon | Açıklama |
|--------|-----------|----------|----------|
| ⚛️ **Framework** | Next.js | 16.1.6 | App Router, Turbopack, Server Components |
| 🎨 **UI Library** | React | 19.0.0 | Hooks, Context API |
| 📘 **Dil** | TypeScript | 5.x | Tip güvenliği |
| 🎯 **Stil** | Tailwind CSS | 3.4.19 | Utility-first CSS |
| 🌐 **API** | AlAdhan | v1 | Diyanet hesaplama metodu |
| 📡 **HTTP** | Axios | 1.7.9 | API istekleri |
| 📍 **Konum** | Nominatim | - | Ters jeokodlama (OpenStreetMap) |

</div>

---

## 🚀 Hızlı Başlangıç

### Gereksinimler

| Araç | Minimum Versiyon |
|------|-----------------|
| Node.js | 18.x |
| npm | 9.x |

### Kurulum

```bash
# 1. Repoyu klonlayın
git clone https://github.com/tariktunc/namaz-vakitleri-last-version.git

# 2. Proje dizinine gidin
cd namaz-vakitleri-last-version

# 3. Bağımlılıkları yükleyin
npm install

# 4. Geliştirme sunucusunu başlatın
npm run dev
```

> 🌐 Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın

### Komutlar

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusu (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Production sunucusu |
| `npm run lint` | ESLint kontrolü |

---

## 📁 Proje Yapısı

<details>
<summary><strong>Dizin ağacını göster</strong></summary>

```
namaz-vakitleri-last-version/
│
├── 📂 public/                    # Statik dosyalar
│   ├── favicon.ico               # Favicon
│   ├── logo.svg                  # Ana logo
│   ├── logo-white.svg            # Beyaz logo (koyu arka plan)
│   └── logo-icon.svg             # Sadece ikon
│
├── 📂 src/
│   ├── 📂 app/                   # Next.js App Router
│   │   ├── layout.tsx            # Root layout (Navbar + Footer + SEO)
│   │   ├── page.tsx              # Ana sayfa
│   │   ├── globals.css           # Global stiller + CSS değişkenleri
│   │   ├── manifest.ts           # PWA Web App Manifest
│   │   ├── sitemap.ts            # Dinamik XML sitemap
│   │   ├── robots.ts             # Robots.txt yapılandırması
│   │   ├── 📂 iftar/
│   │   │   └── page.tsx          # İftar geri sayım sayfası
│   │   └── 📂 namaz-vakitleri/
│   │       └── page.tsx          # Namaz vakitleri sayfası
│   │
│   ├── 📂 components/            # React bileşenleri
│   │   ├── Navbar.tsx            # Navigasyon çubuğu
│   │   ├── Footer.tsx            # Site alt bilgi
│   │   ├── HeaderWrapper.tsx     # Yapışkan başlık wrapper
│   │   ├── CitySearch.tsx        # Şehir arama (autocomplete)
│   │   ├── PrayerTimesView.tsx   # Namaz vakitleri görünümü
│   │   ├── StructuredData.tsx    # JSON-LD şema verileri
│   │   ├── LocationDetector.ts   # GPS konum algılama
│   │   ├── 📂 features/
│   │   │   └── 📂 IftarVakti/
│   │   │       ├── index.tsx     # İftar/Sahur geri sayım
│   │   │       └── PrayerTimeCard.tsx  # Vakit kartı
│   │   └── 📂 ui/
│   │       ├── 📂 CountdownTimer/
│   │       │   ├── index.tsx     # Geri sayım bileşeni
│   │       │   └── utils.ts     # Zamanlayıcı yardımcıları
│   │       └── LoadingSpinner.tsx # Yükleme göstergesi
│   │
│   ├── 📂 context/
│   │   └── CityContext.tsx       # Global şehir state yönetimi
│   │
│   ├── 📂 services/
│   │   └── api.ts                # AlAdhan API entegrasyonu
│   │
│   ├── 📂 types/
│   │   └── prayer.ts             # TypeScript arayüzleri
│   │
│   └── 📂 utils/
│       ├── cities.ts             # 81 il verisi + koordinatlar
│       └── date.ts               # Tarih formatlama
│
├── BRAND.md                      # Marka kimliği kılavuzu (v2.0)
├── README.md                     # Bu dosya
├── package.json                  # Bağımlılıklar ve scriptler
├── tailwind.config.ts            # Tailwind yapılandırması
├── next.config.ts                # Next.js yapılandırması
├── tsconfig.json                 # TypeScript yapılandırması
└── .nvmrc                        # Node.js sürümü (20)
```

</details>

---

## 🔌 API Referansı

<details>
<summary><strong>AlAdhan Prayer Times API</strong></summary>

### Endpoint

```
GET https://api.aladhan.com/v1/timingsByCity/{DD-MM-YYYY}
```

### Parametreler

| Parametre | Tip | Zorunlu | Açıklama |
|-----------|-----|---------|----------|
| `city` | string | ✅ | Şehir adı (ör: `Istanbul`) |
| `country` | string | ✅ | Ülke: `Turkey` |
| `method` | number | ✅ | Hesaplama: `13` (Diyanet) |

### Hesaplama Metodu

| Özellik | Değer |
|---------|-------|
| **Method** | 13 - Diyanet İşleri Başkanlığı |
| **Fecr Açısı** | 18° |
| **İşa Açısı** | 17° |
| **Rate Limit** | Yok (ücretsiz) |

### Örnek İstek

```typescript
import axios from 'axios';

const response = await axios.get(
  'https://api.aladhan.com/v1/timingsByCity/03-03-2026',
  {
    params: {
      city: 'Istanbul',
      country: 'Turkey',
      method: 13
    }
  }
);
```

### Dönen Vakitler

| Vakit | API Alanı | Örnek |
|-------|-----------|-------|
| İmsak | `Imsak` | `04:20` |
| Güneş | `Sunrise` | `06:15` |
| Öğle | `Dhuhr` | `12:45` |
| İkindi | `Asr` | `15:30` |
| Akşam | `Maghrib` | `18:15` |
| Yatsı | `Isha` | `19:45` |

</details>

---

## 🎨 Tasarım Sistemi

> Detaylı marka kılavuzu: [`BRAND.md`](./BRAND.md)

<details>
<summary><strong>Renk Paleti</strong></summary>

### Ana Renkler - Zümrüt Yeşili

| Renk | Hex | Kullanım |
|------|-----|----------|
| 🟢 **Derin Zümrüt** | `#1B7D5A` | Ana renk, başlıklar, butonlar |
| 🟢 **Koyu Zümrüt** | `#15614A` | Hover, footer arka planı |
| 🟢 **Orta Zümrüt** | `#22996E` | Aktif durumlar |
| 🟢 **Fısıltı Yeşil** | `#E8F5EE` | Arka plan tonu |

### Altın Vurgular

| Renk | Hex | Kullanım |
|------|-----|----------|
| 🟡 **Zengin Altın** | `#D4A853` | Vurgu, ikonlar |
| 🟡 **Yumuşak Altın** | `#E8C97A` | Footer başlıklar, hover |
| 🟡 **Krem Altın** | `#FDF6E3` | Arka plan aksanı |

### Nötr Tonlar

| Renk | Hex | Kullanım |
|------|-----|----------|
| ⬜ **Sıcak Beyaz** | `#FAFAF6` | Sayfa arka planı |
| 🟫 **Parşömen** | `#F0EDE5` | Kart arka planları |
| ⬛ **Mürekkep** | `#141310` | Yoğun metin |

</details>

<details>
<summary><strong>Tipografi</strong></summary>

| Element | Font | Ağırlık | Boyut |
|---------|------|---------|-------|
| Display | Inter | 700 | 48px |
| Heading 1 | Inter | 700 | 36px |
| Heading 2 | Inter | 700 | 30px |
| Body | Inter | 400 | 16px |
| Caption | Inter | 400 | 12px |

</details>

<details>
<summary><strong>Animasyonlar</strong></summary>

| Animasyon | Süre | Kullanım |
|-----------|------|----------|
| `fade-in` | 0.5s | Sayfa geçişleri |
| `slide-up` | 0.4s | Kart girişleri |
| `slide-down` | 0.4s | Dropdown açılma |
| `scale-in` | 0.3s | Modal/popup |
| `pulse-gentle` | 2s ∞ | Önemli bilgiler |
| `glow` | 2s ∞ | Aktif vakit vurgusu |
| `gold-pulse` | 2s ∞ | İftar geri sayımı |

> ♿ `prefers-reduced-motion` desteği ile hareket hassasiyeti olan kullanıcılar için animasyonlar otomatik devre dışı bırakılır.

</details>

---

## 🔍 SEO & Erişilebilirlik

<details>
<summary><strong>SEO Özellikleri</strong></summary>

| Özellik | Durum | Açıklama |
|---------|-------|----------|
| Meta Etiketler | ✅ | Title, description, keywords |
| Open Graph | ✅ | Facebook/LinkedIn paylaşım |
| Twitter Cards | ✅ | Twitter paylaşım |
| JSON-LD | ✅ | WebApplication, Organization, WebSite |
| Sitemap.xml | ✅ | Dinamik, 12 sayfa |
| Robots.txt | ✅ | Tarayıcı yönlendirmesi |
| Canonical URL | ✅ | Sayfa bazlı canonical |
| Web App Manifest | ✅ | PWA desteği |
| Sayfa Bazlı Metadata | ✅ | Her sayfa özel meta |

</details>

<details>
<summary><strong>Erişilebilirlik (WCAG AA)</strong></summary>

| Özellik | Durum | Açıklama |
|---------|-------|----------|
| Renk Kontrastı | ✅ | WCAG AA (4.5:1+) tüm metin |
| Klavye Navigasyonu | ✅ | Tab, Enter, Escape desteği |
| Focus Göstergesi | ✅ | `focus-visible` ring |
| ARIA Etiketler | ✅ | `aria-label`, `aria-current` |
| Ekran Okuyucu | ✅ | `sr-only`, `aria-hidden` |
| Reduced Motion | ✅ | Animasyon devre dışı |
| Semantik HTML | ✅ | `nav`, `main`, `footer` |
| Dil Etiketi | ✅ | `lang="tr"` |

</details>

---

## 🚀 Deployment

### Netlify (Mevcut)

Proje şu anda Netlify üzerinde yayında:

🌐 **[namaz-vakitleri-blakfy.netlify.app](https://namaz-vakitleri-blakfy.netlify.app/)**

### Vercel (Önerilen)

```bash
# 1. Vercel CLI yükleyin
npm i -g vercel

# 2. Deploy edin
vercel

# 3. Production deploy
vercel --prod
```

### Diğer Platformlar

| Platform | Yöntem |
|----------|--------|
| Vercel | Git entegrasyonu |
| Netlify | Git entegrasyonu |
| Cloudflare Pages | Git entegrasyonu |
| Docker | `Dockerfile` ile |

---

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz!

```bash
# 1. Fork edin ve klonlayın
git clone https://github.com/YOUR_USERNAME/namaz-vakitleri-last-version.git

# 2. Branch oluşturun
git checkout -b feature/yeni-ozellik

# 3. Değişiklikleri yapın ve commit edin
git commit -m "feat: Yeni özellik eklendi"

# 4. Push edin
git push origin feature/yeni-ozellik

# 5. Pull Request açın
```

### Commit Kuralları

| Prefix | Açıklama | Örnek |
|--------|----------|-------|
| `feat:` | Yeni özellik | `feat: Şehir favorileri eklendi` |
| `fix:` | Bug düzeltmesi | `fix: Geri sayım sıfırlanma hatası` |
| `docs:` | Dokümantasyon | `docs: API referansı güncellendi` |
| `style:` | Stil değişikliği | `style: Footer responsive iyileştirme` |
| `refactor:` | Yeniden yapılandırma | `refactor: CityContext optimizasyonu` |
| `perf:` | Performans | `perf: API cache eklendi` |

---

## 📄 Lisans

Bu proje **MIT Lisansı** altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakınız.

> Bu proje ticari amaç gütmemektedir. Diyanet İşleri Başkanlığı'nın resmi bir ürünü değildir. Vakitler AlAdhan API kullanılarak Diyanet metoduyla hesaplanmaktadır.

---

## 📞 İletişim & Bağlantılar

<div align="center">

| Platform | Bağlantı |
|----------|----------|
| 🌐 **Kişisel Site** | [tariktunc.com](https://tariktunc.com) |
| 🌐 **Blakfy** | [blakfy.com](https://blakfy.com) |
| 💻 **GitHub** | [github.com/tariktunc](https://github.com/tariktunc) |
| 📂 **Proje Repo** | [namaz-vakitleri-last-version](https://github.com/tariktunc/namaz-vakitleri-last-version) |
| 🕌 **Canlı Demo** | [namaz-vakitleri-blakfy.netlify.app](https://namaz-vakitleri-blakfy.netlify.app/) |

</div>

### Veri Kaynakları

- **API**: [AlAdhan Prayer Times API](https://aladhan.com)
- **Hesaplama**: Diyanet İşleri Başkanlığı (Method 13)
- **Konum**: [OpenStreetMap Nominatim](https://nominatim.openstreetmap.org/)

---

## 🙏 Teşekkürler

<div align="center">

| | Katkı |
|-|-------|
| 🕌 **Diyanet İşleri Başkanlığı** | Hesaplama metodolojisi |
| 🌐 **AlAdhan.com** | Ücretsiz API hizmeti |
| 🗺️ **OpenStreetMap** | Ters jeokodlama servisi |
| ⚛️ **Next.js & React** | Framework altyapısı |
| 🎨 **Tailwind CSS** | Stil sistemi |

</div>

---

<div align="center">

<img src="public/logo-icon.svg" alt="Namaz Vakitleri" width="48" />

**Her Vakit Yanınızda** 🕌

Made with ❤️ by [Tarık Tunç](https://tariktunc.com)

[![GitHub Stars](https://img.shields.io/github/stars/tariktunc/namaz-vakitleri-last-version?style=social)](https://github.com/tariktunc/namaz-vakitleri-last-version)

</div>
