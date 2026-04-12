import { servicePlans, retainerPlans } from '@/data/services'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    developer: {
      name: 'Diego Scarpati',
      title: 'Senior Fullstack Developer',
      location: 'Sydney, Australia',
      contact: 'diegoscarpati13@gmail.com',
      website: 'https://diegoscarpati.dev',
    },
    services: servicePlans,
    retainers: retainerPlans,
    currency: 'AUD',
    lastUpdated: new Date().toISOString(),
  })
}
