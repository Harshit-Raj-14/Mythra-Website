import ContactSection from './components/sections/ContactSection'
import Goals from './components/sections/Goals'
import Hero from './components/sections/Hero'
import Portfolio from './components/sections/Portfolio'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'

export const metadata = {
  title: 'Mythra Global Technologies - Leading Tech Solutions & Digital Innovation',
  description: 'Transform your business with cutting-edge technology solutions from Mythra Global Technologies. Expert web development, mobile apps, AI solutions, and digital transformation services.',
}

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