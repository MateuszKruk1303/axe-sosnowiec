import Header from './Header'
import Footer from './Footer'
import { MainSection } from './MainSection'

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MainSection />
      <Footer />
    </div>
  )
}

export { LandingPage }
