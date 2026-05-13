import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Reviews from './components/Reviews'
function App() {
 

  return (
    <>
      <Navbar />
      <Hero />
      <Pricing />
      <Contact />
      <Reviews />
      <Footer />
    </>
    
  )
}

export default App
