import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Feed = () => {
  const [input, setInput] = useState({
    name: '',
    tags: '',
    description: '',
    image: '',
  })

  return (
    <div>
      <form>
        <div>
          <label htmlFor="title">Name</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={}
            value={input.name}
          />
        </div>

        <div>
          <label htmlFor="tag">Tags</label>
          <input
            type="text"
            name="tag"
            id="tag"
            onChange={}
            value={input.tags}
          />
        </div>
        <div>
          <label htmlFor="introduction">Description</label>
          <input
            type="text"
            name="introduction"
            id="introduction"
            onChange={}
            value={input.description}
          />
        </div>
        <div>
          <label htmlFor="photo">Imag</label>
          <input
            type="text"
            name="photo"
            id="photo"
            onChange={}
            value={input.image}
          />
        </div>
        <button onClick={handleSubmit}>New Profile</button>
      </form>
    </div>
  )
}

export default Feed
