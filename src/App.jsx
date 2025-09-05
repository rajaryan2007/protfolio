import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contect from './sections/Contect.jsx'
import Models from './sections/Models.jsx'
import ChatbotWidget from './sections/Chatbot.jsx'
const App = () => {
  return (
    <main className="max-w-7xl mx-auto ">
      <Navbar />
      <Hero /> 
      <About/>
      <Projects/>
      <Contect/>
      <ChatbotWidget/>
     {/* <Models/> */}
      
      </main>
  )
}

export default App
