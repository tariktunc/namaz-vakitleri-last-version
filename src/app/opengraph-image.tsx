import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Namaz Vakitleri - Türkiye Geneli Namaz ve İftar Saatleri';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #15614A 0%, #1B7D5A 50%, #22996E 100%)',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            right: 60,
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'rgba(212, 168, 83, 0.3)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: 80,
            width: 50,
            height: 50,
            borderRadius: '50%',
            background: 'rgba(212, 168, 83, 0.2)',
            display: 'flex',
          }}
        />

        {/* Gold top border */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: '#D4A853',
            display: 'flex',
          }}
        />

        {/* Minaret icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 24,
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 48 48"
            fill="none"
          >
            <rect x="20" y="28" width="8" height="15" fill="#FFFFFF" rx="1" />
            <rect x="21" y="23" width="6" height="5" fill="#FFFFFF" rx="0.5" />
            <rect x="22" y="18" width="4" height="5" fill="#FFFFFF" rx="0.5" />
            <path d="M 18 28 L 30 28 L 30 29 L 18 29 Z" fill="#D4A853" />
            <path d="M 19 23 L 29 23 L 29 24 L 19 24 Z" fill="#D4A853" />
            <path d="M 12 15 Q 8 15 8 11 Q 8 7 12 7 Q 10 9 10 11 Q 10 13 12 15 Z" fill="#D4A853" />
            <path d="M 35 11 L 36 13 L 38 13 L 36.5 14.5 L 37 16.5 L 35 15.5 L 33 16.5 L 33.5 14.5 L 32 13 L 34 13 Z" fill="#D4A853" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: 12,
            display: 'flex',
          }}
        >
          Namaz Vakitleri
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: '#E8C97A',
            marginBottom: 32,
            display: 'flex',
          }}
        >
          Her Vakit Yanınızda
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 20,
            color: 'rgba(255, 255, 255, 0.85)',
            maxWidth: 700,
            textAlign: 'center',
            lineHeight: 1.5,
            display: 'flex',
          }}
        >
          Türkiye geneli 81 il için güncel namaz vakitleri, iftar ve sahur saatleri
        </div>

        {/* Bottom badges */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            gap: 24,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              color: 'rgba(255,255,255,0.7)',
              fontSize: 14,
            }}
          >
            ✓ Diyanet Onaylı
          </div>
          <div
            style={{
              width: 1,
              height: 16,
              background: 'rgba(255,255,255,0.3)',
              display: 'flex',
            }}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              color: 'rgba(255,255,255,0.7)',
              fontSize: 14,
            }}
          >
            ✓ Ücretsiz
          </div>
          <div
            style={{
              width: 1,
              height: 16,
              background: 'rgba(255,255,255,0.3)',
              display: 'flex',
            }}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              color: 'rgba(255,255,255,0.7)',
              fontSize: 14,
            }}
          >
            namazvakitleri.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
