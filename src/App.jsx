import './App.css'
import Apps from './components/navbar/apps-section/apps'
import Started from './components/navbar/steps-section/Steps'
import Hero from './components/navbar/hero-section/Hero'
import Navbar from './components/navbar/Navbar'
import Tools from './components/navbar/premium-digital-tools/Tools'
import Pricing from './components/navbar/pricing-section/Pricing'
import Footer from './components/navbar/footer-section/Footer'

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Apps />
      <Tools />
      <Started />
      <Pricing  />
      <Footer />
    </>
  )
}

export default App
