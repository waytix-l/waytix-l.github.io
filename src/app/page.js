import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import CTA from '@/components/CTA'
import Entreprise from '@/components/Entreprise'
import Bilan from '@/components/Bilan'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Entreprise />
      <Projects />
      <Bilan />
      <CTA />

    </>
  )
}