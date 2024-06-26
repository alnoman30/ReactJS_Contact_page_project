import React from 'react'

import Navbar from './components/Navigation/Navbar'
import Header from './components/Header/Header'
import Contact from './components/ContactForm/Contact'
import './App.css'

function App() {

  return (
    <div>
      <Navbar />
      <main className='main_container'>
      <Header />
      <Contact />
      </main>
    </div>

      
    
  )
}

export default App
