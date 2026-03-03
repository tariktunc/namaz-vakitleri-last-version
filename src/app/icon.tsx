import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1B7D5A',
          borderRadius: 6,
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 48 48"
          fill="none"
        >
          <rect x="20" y="28" width="8" height="15" fill="#FFFFFF" rx="1" />
          <rect x="21" y="23" width="6" height="5" fill="#FFFFFF" rx="0.5" />
          <rect x="22" y="18" width="4" height="5" fill="#FFFFFF" rx="0.5" />
          <path d="M 18 28 L 30 28 L 30 29 L 18 29 Z" fill="#D4A853" />
          <path d="M 12 15 Q 8 15 8 11 Q 8 7 12 7 Q 10 9 10 11 Q 10 13 12 15 Z" fill="#D4A853" />
          <path d="M 35 11 L 36 13 L 38 13 L 36.5 14.5 L 37 16.5 L 35 15.5 L 33 16.5 L 33.5 14.5 L 32 13 L 34 13 Z" fill="#D4A853" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
