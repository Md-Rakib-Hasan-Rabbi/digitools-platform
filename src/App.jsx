import './App.css'
import Apps from './components/navbar/apps-section/apps'
import Started from './components/navbar/get-started-section/Started'
import Hero from './components/navbar/hero-section/Hero'
import Navbar from './components/navbar/Navbar'
import Tools from './components/navbar/premium-digital-tools/Tools'

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Apps />
      <Tools />
      <Started />
    </>
  )
}

export default App
