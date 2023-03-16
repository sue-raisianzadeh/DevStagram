import { Router } from 'express'
import React from 'react'
import Auth from './Auth'
import { Router } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>App</h1>
      <p>React development has begun!</p>

      <Router>
        <Auth />
      </Router>
    </div>
  )
}

export default App
