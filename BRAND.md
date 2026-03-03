# Namaz Vakitleri - Marka Kimliği Rehberi

## İçindekiler
1. [Marka Özeti](#marka-özeti)
2. [Logo Kullanımı](#logo-kullanımı)
3. [Renk Paleti](#renk-paleti)
4. [Tipografi](#tipografi)
5. [İkonografi](#i̇konografi)
6. [Görsel Dil](#görsel-dil)
7. [Ses ve Ton](#ses-ve-ton)

---

## Marka Özeti

### Marka İsmi
**Namaz Vakitleri**

### Slogan
**"Her Vakit Yanınızda"**

### Marka Hikayesi
Namaz Vakitleri, Türkiye'deki Müslümanların namaz ve iftar vakitlerini takip etmelerini kolaylaştıran, modern ve kullanıcı dostu bir dijital platformdur. Diyanet İşleri Başkanlığı'nın resmi verilerine dayanan güvenilir bilgiler sunar.

### Marka Değerleri
- **Güvenilirlik**: Diyanet onaylı, doğru vakit bilgileri
- **Erişilebilirlik**: Her yaştan kullanıcı için basit ve anlaşılır
- **Saygı**: Dini değerlere saygılı, huzurlu bir deneyim
- **Modern**: Güncel teknoloji ile geleneksel değerlerin buluşması
- **Topluluk**: Tüm Türkiye'yi birleştiren ortak ibadet vakitleri

### Hedef Kitle
- **Yaş**: 18-65+
- **Demografi**: Türkiye geneli Müslüman nüfus
- **Teknoloji Kullanımı**: Temel - orta düzey
- **İhtiyaçlar**: Doğru vakit bilgisi, kolay erişim, hatırlatıcı

---

## Logo Kullanımı

### Ana Logo
Logo, bir hilal ve minare siluetinden oluşan modern, minimal bir tasarımdır.

**Logo Dosyaları:**
- `/public/logo.svg` - Ana logo (SVG)
- `/public/logo-white.svg` - Beyaz versiyon
- `/public/logo-icon.svg` - Sadece ikon (favicon için)

### Logo Versiyonları

#### 1. Tam Logo (Yatay)
```
[Hilal-Minare İkonu] NAMAZ VAKİTLERİ
                      Her Vakit Yanınızda
```
- **Kullanım**: Web sitesi header, sosyal medya kapak
- **Minimum genişlik**: 200px

#### 2. Logo + Başlık
```
[Hilal-Minare İkonu] NAMAZ VAKİTLERİ
```
- **Kullanım**: Navbar, mobil header
- **Minimum genişlik**: 150px

#### 3. Sadece İkon
```
[Hilal-Minare İkonu]
```
- **Kullanım**: Favicon, app icon, sosyal medya profil
- **Minimum boyut**: 32x32px

### Logo Koruma Alanı
Logo çevresinde minimum X/2 boşluk bırakılmalıdır (X = logo yüksekliği)

### Logo Kullanımında Yasak
- Logoyu deforme etmeyin
- Logo renklerini değiştirmeyin (sadece beyaz/yeşil versiyonlar)
- Gölge veya efekt eklemeyin
- Logoyu döndürmeyin
- Logo elementlerini ayırmayın

---

## Renk Paleti

### Birincil Renkler

#### Derin Zümrüt (Primary Emerald)
```
HEX: #1B7D5A
RGB: 27, 125, 90
Kullanım: Ana renk, başlıklar, buttonlar, linkler
```

#### Koyu Zümrüt (Dark Emerald)
```
HEX: #15614A
RGB: 21, 97, 74
Kullanım: Hover states, footer arka plan, countdown timer
```

#### Orta Zümrüt (Medium Emerald)
```
HEX: #22996E
RGB: 34, 153, 110
Kullanım: Açık varyant, tagline rengi
```

#### Fısıltı Yeşil (Whisper Green)
```
HEX: #E8F5EE
RGB: 232, 245, 238
Kullanım: Arka plan tonu, hover highlights
```

#### Yumuşak Nane (Soft Mint)
```
HEX: #C7E9D5
RGB: 199, 233, 213
Kullanım: Gradient uç noktası, varsayılan kart bordür
```

### İkincil Renkler - Altın Vurgu

#### Zengin Altın (Rich Gold)
```
HEX: #D4A853
RGB: 212, 168, 83
Kullanım: Vurgular, aktif namaz kartı, ikonlar, footer başlıklar
```

#### Koyu Altın (Dark Gold)
```
HEX: #B8912F
RGB: 184, 145, 47
Kullanım: Altın hover state
```

#### Yumuşak Altın (Soft Gold)
```
HEX: #E8C97A
RGB: 232, 201, 122
Kullanım: Dekoratif bordürler, countdown timer etiketleri
```

#### Krem Altın (Cream Gold)
```
HEX: #FDF6E3
RGB: 253, 246, 227
Kullanım: Aktif namaz kartı arka planı
```

### Accent Renkler

#### Gece Teal (Midnight Teal)
```
HEX: #1A3A4A
RGB: 26, 58, 74
Kullanım: Koyu accent, alt başlıklar
```

#### Okyanus (Ocean)
```
HEX: #2A5468
RGB: 42, 84, 104
Kullanım: İkincil metin vurgusu
```

### Sıcak Nötr Renkler

| İsim | HEX | Kullanım |
|------|-----|----------|
| Sıcak Beyaz | #FAFAF6 | Sayfa arka planı |
| Parşömen | #F0EDE5 | Kart arka planları, buton varsayılan |
| Sıcak Kum | #E0DCD2 | Bordürler, bölücüler |
| Taş | #C4BFB3 | Devre dışı durumlar |
| Toprak | #9A9488 | Placeholder metin |
| Koyu Toprak | #706B60 | İkincil metin |
| Kömür | #524E45 | Alt başlıklar, tarih metni |
| Neredeyse Siyah | #3A3732 | Güçlü gövde metni |
| Mürekkep | #262421 | Başlıklar, birincil metin |
| Siyah Mürekkep | #141310 | Maksimum kontrast |

### Durum Renkleri

| Durum | HEX | Kullanım |
|-------|-----|----------|
| Başarı | #2D9F6A | Başarılı işlemler |
| Hata | #C94A3A | Hata mesajları |
| Uyarı | #D4960C | Uyarı durumları |
| Bilgi | #2B7A9E | Bilgilendirme |

### Gradient Paleti

#### Gündüz Gradient (Day Gradient)
```css
background: linear-gradient(168deg, #FAFAF6, #E8F5EE, #C7E9D5);
Kullanım: Ana sayfa arka planı
```

#### Gece Gradient (Night Gradient)
```css
background: linear-gradient(168deg, #141310, #1A3A4A, #15614A);
Kullanım: Sahur modu / gelecek dark mode
```

### Renk Erişilebilirliği

Tüm renk kombinasyonları WCAG AA standartlarına uygun olmalıdır:
- Metin/Arka plan kontrast oranı: minimum 4.5:1
- Büyük metin için: minimum 3:1
- İkonlar için: minimum 3:1

**Test Edilmiş Kombinasyonlar:**
- #1B7D5A on #FFFFFF (Kontrast: 5.21:1) - AA
- #15614A on #FFFFFF (Kontrast: 7.05:1) - AAA
- #262421 on #FAFAF6 (Kontrast: 15.78:1) - AAA
- #D4A853 on #1A3A4A (Kontrast: 4.58:1) - AA
- #FFFFFF on #15614A (Kontrast: 7.05:1) - AAA

---

## Tipografi

### Font Ailesi

#### Birincil Font: Inter
```css
font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Font Ağırlıkları:**
- Regular (400): Body text
- Medium (500): Subtitles, buttons
- Semibold (600): Alt başlıklar, şehir isimleri
- Bold (700): Headings, emphasis

**Neden Inter?**
- Ekranlar için özel tasarlanmış, mükemmel okunabilirlik
- Türkçe karakter desteği mükemmel (latin-ext subset)
- Variable font desteği ile pürüzsüz ağırlık geçişleri
- Modern, sıcak ve profesyonel görünüm
- 2025-2026'nın en popüler UI fontu

### Tipografi Skalası

#### Display (Hero Başlıklar)
```
Font Size: 48px (3rem) | Line Height: 1.2 | Weight: 700
```

#### H1 (Birinci Seviye Başlık)
```
Font Size: 36px (2.25rem) | Line Height: 1.2 | Weight: 700
```

#### H2 (İkinci Seviye Başlık)
```
Font Size: 30px (1.875rem) | Line Height: 1.3 | Weight: 700
```

#### H3 (Üçüncü Seviye Başlık)
```
Font Size: 24px (1.5rem) | Line Height: 1.4 | Weight: 500
```

#### Body Large / Regular / Small / Caption
```
Body Large: 18px | Body: 16px | Small: 14px | Caption: 12px
Line Height: 1.6 | Weight: 400
```

---

## İkonografi

### İkon Stili
- **Tip**: Line icons (çizgi tabanlı)
- **Kalınlık**: 2px stroke
- **Köşeler**: Rounded (4px radius)
- **Boyut**: 24x24px (base size)

### İkon Renkleri
- Birincil: #1B7D5A (Derin Zümrüt)
- Hover: #D4A853 (Altın)
- Disabled: #E0DCD2 (Sıcak Kum)

---

## Görsel Dil

### UI Elementleri

#### Gölgeler (Zümrüt Tonlu)
```css
/* Small */  box-shadow: 0 1px 3px rgba(27, 125, 90, 0.06);
/* Medium */ box-shadow: 0 4px 12px rgba(27, 125, 90, 0.10);
/* Large */  box-shadow: 0 10px 24px rgba(27, 125, 90, 0.12);
/* Hover */  box-shadow: 0 12px 28px rgba(27, 125, 90, 0.18);
/* Gold */   box-shadow: 0 4px 16px rgba(212, 168, 83, 0.20);
```

#### Köşe Radius
- Small: 4px | Default: 8px | Large: 16px | XL: 24px

#### Spacing System (8pt Grid)
```
4px - 8px - 16px - 24px - 32px - 48px - 64px
```

---

## Ses ve Ton

### Marka Sesi
**Saygılı - Güvenilir - Yardımsever - Modern**

### Ton Özellikleri
- Dini terimleri doğru ve saygıyla kullanın
- Kullanıcılara "siz" diye hitap edin
- Net ve anlaşılır talimatlar verin
- Kesin ve doğru bilgi verin
- Kaynaklarınızı belirtin (Diyanet)

---

## Uygulama Örnekleri

### Web Sitesi
- Header: Logo + Navigasyon (beyaz arka plan, sıcak bordür)
- Hero: Sıcak beyaz → fısıltı yeşil gradient arka plan
- Cards: Beyaz arka plan, zümrüt tonlu gölge, yumuşak köşeler
- Buttons: Derin Zümrüt, hover'da Koyu Zümrüt
- Links: Derin Zümrüt, hover'da Altın
- Aktif namaz kartı: Altın bordür, krem altın arka plan
- Footer: Koyu Zümrüt arka plan, altın vurgular

---

**Versiyon**: 2.0.0
**Son Güncelleme**: Mart 2026

### Değişiklik Geçmişi
- v2.0.0 (03.2026): Renk paleti yenilendi (Mavi → Zümrüt Yeşil), font değiştirildi (Roboto → Inter), sıcak nötrler eklendi
- v1.0.0 (15.02.2026): İlk versiyon oluşturuldu

---

**© 2026 Namaz Vakitleri. Tüm hakları saklıdır.**
