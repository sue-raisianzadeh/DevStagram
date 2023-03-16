import { Router } from 'express'
import React from 'react'
import Auth from './Auth'
import Feed from './Feed'

function App() {
  return (
    <div className="title">
      <img
        className="logo"
        src="/images/group 3 logo.jpg"
        alt="DevStagram logo"
      />

      <h1 className="header">Think Different Think DevStargram </h1>
      <p>React development has begun!</p>

      <Auth />
      <Feed />
    </div>
  )
}

export default App
