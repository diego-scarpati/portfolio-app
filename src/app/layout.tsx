import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

// Display font — bold, geometric, distinctive
const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

// Body font — clean, modern, readable
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://diegoscarpati.dev'),
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diego Scarpati — Senior Fullstack Developer, Sydney',
    description:
      'Building production-grade web apps, landing pages & Web3 products for Australian businesses.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Diego Scarpati — Fullstack Development',
  url: 'https://diegoscarpati.dev',
  description:
    'Senior Fullstack Developer offering web apps, landing pages, and Web3 development for Australian businesses.',
  areaServed: {
    '@type': 'Country',
    name: 'Australia',
  },
  priceRange: '$800 - $5000+ AUD',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Landing Page',
          description: 'Custom-designed, responsive landing page with SEO optimisation.',
        },
        price: '800',
        priceCurrency: 'AUD',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Application',
          description: 'Full-stack web application with auth, database, and APIs.',
        },
        price: '3000',
        priceCurrency: 'AUD',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web3 / Smart Contract',
          description: 'EVM-compatible Solidity smart contracts with DApp frontend.',
        },
        price: '2000',
        priceCurrency: 'AUD',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'MVP Build',
          description: 'End-to-end product from discovery to deployed MVP.',
        },
        price: '5000',
        priceCurrency: 'AUD',
      },
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className={`${syne.variable} ${dmSans.variable}`}>{children}</body>
    </html>
  )
}
