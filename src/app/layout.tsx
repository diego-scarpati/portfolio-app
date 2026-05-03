import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Script from 'next/script'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
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
        price: '3500',
        priceCurrency: 'AUD',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web3 Projects',
          description: 'Smart contract integration with full DApp frontend.',
        },
        price: '3000',
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
      <body className={`${playfairDisplay.variable} ${inter.variable}`}>
        {/*
          beforeInteractive injects into the server-rendered <head> at the framework level,
          completely outside React's virtual DOM — no head cache interference, no hydration conflict.
          Priority: 1. localStorage  2. system prefers-color-scheme
        */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=(t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.setAttribute('data-theme',d?'dark':'light');document.documentElement.style.colorScheme=d?'dark':'light';}catch(e){}})();`,
          }}
        />
        <Script
          id="person-schema"
          strategy="beforeInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          id="service-schema"
          strategy="beforeInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
