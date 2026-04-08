import { Navbar } from '@/components/ui/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { PlansSection } from '@/components/sections/PlansSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { WorkSection } from '@/components/sections/WorkSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-14">
        <HeroSection />
        <PlansSection />
        <ExperienceSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  )
}
