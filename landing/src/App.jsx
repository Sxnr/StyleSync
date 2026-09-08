import Navbar from './components/Navbar'
import Hero from './components/Hero'
import UserPainSection from './components/UserPainSection'
import SolutionSection from './components/SolutionSection'
import CommunitySection from './components/CommunitySection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-pearl">
      <Navbar />
      <Hero />
      <UserPainSection />
      <SolutionSection />
      <CommunitySection />
      <CTASection />
      <Footer />
    </div>
  )
}