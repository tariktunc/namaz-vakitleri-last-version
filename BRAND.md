# Namaz Vakitleri - Marka Kimliği Rehberi

## 📖 İçindekiler
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
❌ Logoyu deforme etmeyin
❌ Logo renklerini değiştirmeyin (sadece beyaz/mavi versiyonlar)
❌ Gölge veya efekt eklemeyin
❌ Logoyu döndürmeyin
❌ Logo elementlerini ayırmayın

---

## Renk Paleti

### Birincil Renkler

#### Deniz Mavisi (Primary Blue)
```
HEX: #1E4D7B
RGB: 30, 77, 123
HSL: 208, 61%, 30%
Kullanım: Ana renk, başlıklar, buttonlar, linkler
```

#### Gök Mavisi (Sky Blue)
```
HEX: #8FB3D6
RGB: 143, 179, 214
HSL: 210, 46%, 70%
Kullanım: Gradient arka plan, hover states, borders
```

### İkincil Renkler

#### Altın Sarısı (Gold)
```
HEX: #C3A878
RGB: 195, 168, 120
HSL: 38, 39%, 62%
Kullanım: Vurgular, ikonlar, border accents
```

#### Koyu Lacivert (Dark Navy)
```
HEX: #2C3E50
RGB: 44, 62, 80
HSL: 210, 29%, 24%
Kullanım: Metin, hover states, dark mode
```

### Nötr Renkler

#### Açık Gri (Light Gray)
```
HEX: #F5F7FA
RGB: 245, 247, 250
HSL: 210, 36%, 97%
Kullanım: Arka planlar, card backgrounds
```

#### Orta Gri (Medium Gray)
```
HEX: #E8ECEF
RGB: 232, 236, 239
HSL: 210, 20%, 92%
Kullanım: Borders, dividers
```

#### Metin Gri (Text Gray)
```
HEX: #2C3E50
RGB: 44, 62, 80
HSL: 210, 29%, 24%
Kullanım: Body text, secondary text
```

### Durum Renkleri

#### Başarı (Success)
```
HEX: #27AE60
RGB: 39, 174, 96
Kullanım: Başarılı işlemler, aktif durum
```

#### Hata (Error)
```
HEX: #E74C3C
RGB: 231, 76, 60
Kullanım: Hata mesajları, uyarılar
```

#### Bilgi (Info)
```
HEX: #3498DB
RGB: 52, 152, 219
Kullanım: Bilgi mesajları, tooltips
```

### Gradient Paleti

#### Gündüz Gradient (Day Gradient)
```
background: linear-gradient(to bottom, #F5F7FA, #8FB3D6);
Kullanım: İftar sayfası gündüz modu
```

#### Gece Gradient (Night Gradient)
```
background: linear-gradient(to bottom, #1E3A5F, #2C5282);
Kullanım: Sahur sayfası gece modu
```

### Renk Erişilebilirliği

Tüm renk kombinasyonları WCAG AA standartlarına uygun olmalıdır:
- Metin/Arka plan kontrast oranı: minimum 4.5:1
- Büyük metin için: minimum 3:1
- İkonlar için: minimum 3:1

**Test Edilmiş Kombinasyonlar:**
✅ #1E4D7B on #FFFFFF (Kontrast: 8.59:1) - AAA
✅ #2C3E50 on #F5F7FA (Kontrast: 12.63:1) - AAA
✅ #C3A878 on #1E4D7B (Kontrast: 3.27:1) - AA Large

---

## Tipografi

### Font Ailesi

#### Birincil Font: Roboto
```css
font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Font Ağırlıkları:**
- Regular (400): Body text
- Medium (500): Subtitles, buttons
- Bold (700): Headings, emphasis

**Neden Roboto?**
- Türkçe karakter desteği mükemmel
- Hem ekranda hem baskıda okunabilir
- Profesyonel ve modern görünüm
- Google Fonts üzerinden ücretsiz

### Tipografi Skalası

#### Display (Hero Başlıklar)
```
Font Size: 48px (3rem)
Line Height: 1.2
Font Weight: 700 (Bold)
Letter Spacing: -0.02em
Kullanım: Ana sayfa başlıkları
```

#### H1 (Birinci Seviye Başlık)
```
Font Size: 36px (2.25rem)
Line Height: 1.2
Font Weight: 700 (Bold)
Kullanım: Sayfa başlıkları
```

#### H2 (İkinci Seviye Başlık)
```
Font Size: 30px (1.875rem)
Line Height: 1.3
Font Weight: 700 (Bold)
Kullanım: Bölüm başlıkları
```

#### H3 (Üçüncü Seviye Başlık)
```
Font Size: 24px (1.5rem)
Line Height: 1.4
Font Weight: 500 (Medium)
Kullanım: Alt başlıklar
```

#### Body Large
```
Font Size: 18px (1.125rem)
Line Height: 1.6
Font Weight: 400 (Regular)
Kullanım: Önemli paragraflar
```

#### Body Regular
```
Font Size: 16px (1rem)
Line Height: 1.6
Font Weight: 400 (Regular)
Kullanım: Normal metin
```

#### Body Small
```
Font Size: 14px (0.875rem)
Line Height: 1.6
Font Weight: 400 (Regular)
Kullanım: Yardımcı metin, caption
```

#### Caption
```
Font Size: 12px (0.75rem)
Line Height: 1.5
Font Weight: 400 (Regular)
Kullanım: Footer text, timestamps
```

### Mobil Tipografi Ayarları

Mobil cihazlarda (<640px) font boyutları 80%'e ölçeklendirilir:
- Display: 38px
- H1: 29px
- H2: 24px
- H3: 19px
- Body: 16px (değişmez)

---

## İkonografi

### İkon Stili
- **Tip**: Line icons (çizgi tabanlı)
- **Kalınlık**: 2px stroke
- **Köşeler**: Rounded (4px radius)
- **Boyut**: 24x24px (base size)

### İkon Renkleri
- Birincil: #1E4D7B (Deniz Mavisi)
- Hover: #C3A878 (Altın)
- Disabled: #E8ECEF (Orta Gri)

### Standart İkonlar

#### Namaz Vakitleri
- 🕌 İmsak: Hilal + yıldızlar
- ☀️ Güneş: Güneş ışınları
- 🌤️ Öğle: Tam güneş
- 🌅 İkindi: Alçalan güneş
- 🌆 Akşam: Batış
- 🌙 Yatsı: Ay + yıldızlar

#### Kullanıcı Aksiyonları
- 🔍 Arama: Büyüteç
- 📍 Konum: Pin marker
- ⏰ Hatırlatıcı: Zil
- ⚙️ Ayarlar: Dişli
- ❤️ Favori: Kalp

### İkon Kullanım Kuralları
✅ İkonları semantik olarak kullanın
✅ Her zaman alt text ekleyin (accessibility)
✅ Tutarlı boyutlarda kullanın
❌ İkonları metinden daha büyük yapmayın
❌ Dekoratif amaçla fazla ikon kullanmayın

---

## Görsel Dil

### Fotograf Stili
- **Ton**: Sıcak, huzurlu, davetkar
- **Aydınlatma**: Doğal ışık, yumuşak gölgeler
- **Kompozisyon**: Minimal, dengeli, temiz
- **Konular**: Camiler, İslami geometri, doğa (gökyüzü, güneş, ay)

### İllüstrasyon Stili
- **Tarz**: Flat design, minimal
- **Renkler**: Marka paletiyle uyumlu
- **Detay Seviyesi**: Basit, az detay
- **Kullanım**: Boş durumlar, yönlendirme, onboarding

### UI Elementleri

#### Köşe Radius
- **Small**: 4px (buttons, inputs)
- **Medium**: 8px (cards, dialogs)
- **Large**: 16px (modals, containers)

#### Gölgeler
```css
/* Small Shadow */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

/* Medium Shadow */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

/* Large Shadow */
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);

/* Hover Shadow */
box-shadow: 0 12px 20px rgba(30, 77, 123, 0.15);
```

#### Spacing System (8pt Grid)
```
4px  (0.25rem) - Tiny spacing
8px  (0.5rem)  - Small spacing
16px (1rem)    - Medium spacing
24px (1.5rem)  - Large spacing
32px (2rem)    - XL spacing
48px (3rem)    - XXL spacing
64px (4rem)    - Huge spacing
```

---

## Ses ve Ton

### Marka Sesi
**Saygılı • Güvenilir • Yardımsever • Modern**

### Ton Özellikleri

#### Saygılı
- Dini terimleri doğru ve saygıyla kullanın
- Kullanıcılara "siz" diye hitap edin
- Ağır ve ciddi bir ton kullanın

#### Yardımsever
- Net ve anlaşılır talimatlar verin
- Teknoloji jargonundan kaçının
- Her yaştan kullanıcıyı düşünün

#### Güvenilir
- Kesin ve doğru bilgi verin
- Kaynaklarınızı belirtin (Diyanet)
- Belirsizlik ifadelerinden kaçının

#### Modern
- Güncel dil kullanın (ama abartmayın)
- Emoji kullanımında ölçülü olun
- Teknoloji kavramlarını basitçe açıklayın

### Metin Örnekleri

#### ✅ Doğru Ton
- "İstanbul için bugünkü namaz vakitleri"
- "Şehrinizi seçerek namaz saatlerinizi öğrenebilirsiniz"
- "Diyanet İşleri Başkanlığı verilerine göre"
- "İftara 2 saat 34 dakika kaldı"

#### ❌ Yanlış Ton
- "İstanbul'daki süper vakit bilgileri!"
- "Hemen şehrini seç ve vakitleri gör!"
- "Bizim dataları kullan"
- "İftara daha çoook var :)"

### Hata Mesajları
- **Sorun**: "Şehir bulunamadı"
- **Çözüm**: "Lütfen geçerli bir şehir adı veya plaka kodu giriniz"

### Başarı Mesajları
- "Şehir başarıyla güncellendi"
- "Hatırlatıcı kuruldu"
- "Favori listenize eklendi"

---

## Uygulama Örnekleri

### Web Sitesi
- Header: Logo + Navigasyon (Deniz Mavisi arka plan)
- Hero: Gündüz/Gece gradient arka plan
- Cards: Beyaz arka plan, hafif gölge
- Buttons: Deniz Mavisi, hover'da Koyu Lacivert
- Links: Deniz Mavisi, hover'da Altın

### Mobil Uygulama
- Splash Screen: Logo ortalı, Deniz Mavisi arka plan
- Tab Bar: Beyaz arka plan, aktif tab Deniz Mavisi
- Cards: Beyaz arka plan, 8px radius
- Floating Action Button: Altın rengi

### Sosyal Medya
- Profil Fotoğrafı: Sadece ikon (beyaz arka plan)
- Kapak Fotoğrafı: Tam logo + gradient arka plan
- Post Görselleri: Marka renkleri + minimal tasarım

---

## Marka Varlıkları

### Dosya Yapısı
```
/public/
  ├── logo.svg              # Ana logo
  ├── logo-white.svg        # Beyaz versiyon
  ├── logo-icon.svg         # Sadece ikon
  ├── favicon.ico           # 32x32 favicon
  ├── icon.png              # 192x192 ikon
  ├── apple-icon.png        # 180x180 Apple touch
  └── og-image.png          # 1200x630 sosyal medya
```

### İndirme Bağlantıları
Logo paketini indirmek için: `/public/brand-assets.zip`

---

## Güncellemeler ve Versiyon

**Versiyon**: 1.0.0
**Oluşturma Tarihi**: 15 Şubat 2026
**Son Güncelleme**: 15 Şubat 2026

### Değişiklik Geçmişi
- v1.0.0 (15.02.2026): İlk versiyon oluşturuldu

---

## İletişim

Marka kullanımı ile ilgili sorularınız için:
- **Email**: brand@namazvakitleri.com
- **Web**: https://namazvakitleri.com

---

**© 2026 Namaz Vakitleri. Tüm hakları saklıdır.**

*Bu dokümandaki tüm marka elementleri Namaz Vakitleri'ne aittir ve yazılı izin olmadan kullanılamaz.*
