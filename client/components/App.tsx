import React, { useState } from 'react'
import Auth from './Auth'
import Feed from './Feed'

import data from '../data'
import Listing from './Listing'
import { Route, Routes } from 'react-router-dom'

function App() {
  const initialState = [...data]
  const [feeds, setFeeds] = useState(initialState)

  return (
    <div className="title">
      <img
        className="logo"
        src="/images/group 3 logo.jpg"
        alt="DevStagram logo"
      />

      <h1 className="header">Think Different, Think DevStargram </h1>
      <p>Sign up</p>

      <Routes>
        <Route path="/" element={<Listing list={feeds} />} />
        <Route path="/Auth" element={<Auth updateFeed={setFeeds} />} />
        <Route path="/feed" element={<Feed updateFeed={setFeeds} />} />
      </Routes>
    </div>
  )
}

export default App
