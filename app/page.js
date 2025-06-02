import ContactSection from './components/sections/ContactSection'
import Goals from './components/sections/Goals'
import Hero from './components/sections/Hero'
import Portfolio from './components/sections/Portfolio'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Goals />
      <Portfolio />
      <Testimonials />
      <ContactSection />
     
    </>
  )
}