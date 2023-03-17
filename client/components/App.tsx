import { useState } from 'react'
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
      <Routes>
        <Route path="/list" element={<Listing list={feeds} />} />
        <Route path="/" element={<Auth updateFeed={setFeeds} />} />
        <Route path="/feed" element={<Feed updateFeed={setFeeds} />} />
      </Routes>
    </div>
  )
}

export default App
