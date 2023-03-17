import { useEffect, useState } from 'react'
import Auth from './Auth'
import Feed from './Feed'
import data from '../data'
import Listing from './Listing'
import { Route, Routes } from 'react-router-dom'
import MusicPlayer from './MusicPlayer'

function App() {
  const initialState = [...data]
  const [feeds, setFeeds] = useState(initialState)





  const audio = new Audio('./music.mp3')
  audio.loop = true

  useEffect(() => {
    audio.play()
  }, [])

  const stopMusic = () => {
    audio.pause()
  }
  const playMusic = () => {
    audio.play()
  }

  return (
    <div className="title">
      <MusicPlayer music="./music.mp3" />
      <button onClick={stopMusic}>Stop Music</button>
      <button onClick={playMusic}>Play Music</button>
      <Routes>
        <Route path="/list" element={<Listing list={feeds} updateFeed={setFeeds} />} />
        <Route path="/" element={<Auth updateFeed={setFeeds} />} />
        <Route path="/feed" element={<Feed updateFeed={setFeeds} feeds={feeds} />} />
      </Routes>
    </div>
  )
}

export default App
