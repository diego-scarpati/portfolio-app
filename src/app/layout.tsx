import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Diego Scarpati — Senior Fullstack Developer, Sydney',
  description:
    'Senior Fullstack Developer based in Sydney, Australia. Building production-grade web apps, landing pages & Web3 products for Australian businesses.',
  keywords: [
    'Fullstack Developer Sydney',
    'Next.js developer Australia',
    'React developer Sydney',
    'TypeScript developer',
    'Web3 developer',
    'Solidity developer',
    'Supabase developer',
    'freelance developer Sydney',
    'hire fullstack developer Australia',
  ],
  authors: [{ name: 'Diego Scarpati' }],
  creator: 'Diego Scarpati',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://diegoscarpati.dev',
    title: 'Diego Scarpati — Senior Fullstack Developer, Sydney',
    description:
      'Building production-grade web apps, landing pages & Web3 products for Australian businesses.',
    siteName: 'Diego Scarpati',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Diego Scarpati — Senior Fullstack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diego Scarpati — Senior Fullstack Developer, Sydney',
    description:
      'Building production-grade web apps, landing pages & Web3 products for Australian businesses.',
    images: ['/og.png'],
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Diego Scarpati',
  jobTitle: 'Senior Fullstack Developer',
  url: 'https://diegoscarpati.dev',
  sameAs: [
    'https://www.linkedin.com/in/diego-scarpati/',
    'https://github.com/diego-scarpati',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sydney',
    addressRegion: 'NSW',
    addressCountry: 'AU',
  },
  knowsAbout: [
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Supabase',
    'Solidity',
    'AWS',
    'Python',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* No-flash theme script — must run synchronously before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={poppins.variable}>{children}</body>
    </html>
  )
}
