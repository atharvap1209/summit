import React from 'react'
import Demo from './components/Demo'
import Hero from './components/Hero'
import "./App.css";


const App = () => {
  return (
    <main>
      <div className='main'>
      </div>
      <div className='app'>
        <Hero />
        <Demo />
      </div>
    </main>
  )
}

export default App
