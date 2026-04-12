import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Diego Scarpati — Senior Fullstack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1d2634',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ color: '#7596bb', fontSize: 18, letterSpacing: 4, marginBottom: 24, textTransform: 'uppercase' }}>
          Available for Freelance · Sydney, AU
        </div>
        <div style={{ color: '#eaeef4', fontSize: 72, fontWeight: 800, lineHeight: 1.1, marginBottom: 16 }}>
          Diego Scarpati
        </div>
        <div style={{ color: '#7596bb', fontSize: 32, marginBottom: 32 }}>
          Senior Fullstack Developer
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {['Next.js', 'React', 'TypeScript', 'Supabase', 'Solidity'].map((tag) => (
            <div
              key={tag}
              style={{
                background: '#243042',
                color: '#7596bb',
                padding: '6px 16px',
                borderRadius: 4,
                fontSize: 16,
                border: '1px solid #354d6f',
              }}
            >
              {tag}
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: 80, right: 80, color: '#354d6f', fontSize: 20 }}>
          diegoscarpati.dev
        </div>
      </div>
    ),
    { ...size }
  )
}
