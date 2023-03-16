import Auth from './Auth'
import Feed from './Feed'

function App() {
  return (
    <div className="title">
      <img src="server/public/images/group 3 logo.jpg" alt="DevStagram logo" />

      <h1>App</h1>
      <p>React development has begun!</p>
      <Auth />
      <Feed />
    </div>
  )
}

export default App
