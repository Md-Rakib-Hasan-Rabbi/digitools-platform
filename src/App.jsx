import './App.css'
import { useState } from 'react'
import Stats from './components/stats-section/Stats'
import Started from './components/steps-section/Steps'
import Hero from './components/hero-section/Hero'
import Navbar from './components/navbar/Navbar'
import Main from './components/main-section/Main'
import Pricing from './components/pricing-section/Pricing'
import Footer from './components/footer-section/Footer'

function App() {
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product])
  }

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const handleClearCart = () => {
    setCartItems([])
  }


  return (
    <>
      <Navbar cartCount={cartItems.length} />
      <Hero />
      <Stats />
      <Main
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />
      <Started />
      <Pricing  />
      <Footer />
    </>
  )
}

export default App
