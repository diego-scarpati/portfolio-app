export interface ServicePlan {
  id: string
  name: string
  startingPrice: number
  currency: 'AUD'
  timeline: string
  description: string
  features: string[]
  popular?: boolean
}

export interface RetainerPlan {
  id: string
  name: string
  pricePerMonth: number
  currency: 'AUD'
  hoursPerMonth: number
  description: string
  features: string[]
}

export const servicePlans: ServicePlan[] = [
  {
    id: 'landing-page',
    name: 'Landing Page',
    startingPrice: 800,
    currency: 'AUD',
    timeline: '1–2 weeks',
    description: 'A high-converting, responsive landing page — designed, built, and deployed.',
    features: [
      'Custom design (no templates)',
      'Mobile-first, responsive',
      'SEO-optimised',
      'Contact form or CTA integration',
      'Deployed to Vercel',
    ],
  },
  {
    id: 'web-app',
    name: 'Web App',
    startingPrice: 3500,
    currency: 'AUD',
    timeline: '4–8 weeks',
    description: 'Full-stack web application with auth, database, and all the infrastructure you need.',
    features: [
      'Next.js 15 + React 19',
      'User authentication (Supabase Auth)',
      'Database design & integration',
      'REST or Server Actions API',
      'Deployed & production-ready',
    ],
    popular: true,
  },
  {
    id: 'web3',
    name: 'Web3 Projects',
    startingPrice: 3000,
    currency: 'AUD',
    timeline: '3–6 weeks',
    description: 'Integrate smart contracts into full DApp frontends — from wallet connection to on-chain interactions.',
    features: [
      'Smart contract integration (EVM)',
      'Wallet connection (MetaMask, WalletConnect)',
      'React/Next.js DApp UI',
      'On-chain data reading & transactions',
      'Deployed DApp on Vercel',
    ],
  },
  {
    id: 'mvp',
    name: 'MVP Build',
    startingPrice: 5000,
    currency: 'AUD',
    timeline: '6–12 weeks',
    description: 'End-to-end product build — from discovery to deployed MVP.',
    features: [
      'Discovery & scope definition',
      'Full-stack implementation',
      'Auth, DB, integrations',
      'CI/CD pipeline',
      '30-day post-launch support',
    ],
  },
]

export const retainerPlans: RetainerPlan[] = [
  {
    id: 'retainer-starter',
    name: 'Starter Retainer',
    pricePerMonth: 1500,
    currency: 'AUD',
    hoursPerMonth: 20,
    description: 'Ongoing development support for growing products.',
    features: [
      '20 hours/month',
      'Feature development & bug fixes',
      'Weekly progress updates',
      'Priority response (24h)',
    ],
  },
  {
    id: 'retainer-growth',
    name: 'Growth Retainer',
    pricePerMonth: 2500,
    currency: 'AUD',
    hoursPerMonth: 40,
    description: 'Dedicated development capacity for fast-moving teams.',
    features: [
      '40 hours/month',
      'Feature development & architecture',
      'Twice-weekly progress updates',
      'Priority response (same day)',
      'Tech stack advisory',
    ],
  },
]
