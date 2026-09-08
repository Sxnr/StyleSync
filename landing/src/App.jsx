import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import B2BSection from './components/B2BSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-pearl">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <B2BSection />
      <CTASection />
      <Footer />
    </div>
  )
}