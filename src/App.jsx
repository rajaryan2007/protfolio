import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact.jsx'
import ChatbotWidget from './sections/Chatbot.jsx'
import PixelSnow from './components/PixelSnow.jsx'

const App = () => {
  return (
    <main className="w-full bg-[#1e1e2e] selection:bg-[#cba6f7]/30 text-[#cdd6f4] relative">
      <PixelSnow count={120} speed={0.4} colors={['#cba6f7', '#74c7ec', '#fab387']} />
      <Navbar />
      <Hero /> 
      <About/>
      <Projects/>
      <Contact/>
      <ChatbotWidget/>
    </main>
  )
}



export default App



