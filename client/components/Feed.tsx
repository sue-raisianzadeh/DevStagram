import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { text } from 'stream/consumers'

const Feed = () => {
  const [input, setInput] = useState({
    name: '',
    tags: '',
    description: '',
    image: '',
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const textInput = event.target.value
    const targetName = event.target.name
    if (
      targetName === 'name' ||
      targetName === 'tags' ||
      targetName === 'description' ||
      targetName === 'image'
    ) {
      setInput((prev) => ({
        ...prev,
        [targetName]: textInput,
      }))
    }
  }
  function handleSubmit(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault() // the buttom in Html has default setting to send data to the sever, but
    // we dont have the sever yet. so we need to add this
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="title">Name</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            value={input.name}
          />
        </div>

        <div>
          <label htmlFor="tag">Tags</label>
          <input
            type="text"
            name="tag"
            id="tag"
            onChange={handleChange}
            value={input.tags}
          />
        </div>
        <div>
          <label htmlFor="introduction">Description</label>
          <input
            type="text"
            name="introduction"
            id="introduction"
            onChange={handleChange}
            value={input.description}
          />
        </div>
        <div>
          <label htmlFor="photo">Imag</label>
          <input
            type="text"
            name="photo"
            id="photo"
            onChange={handleChange}
            value={input.image}
          />
        </div>
        <button onClick={handleSubmit}>New Profile</button>
      </form>
    </div>
  )
}

export default Feed
