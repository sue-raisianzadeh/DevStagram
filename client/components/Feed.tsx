import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  updateFeed: React.Dispatch<
    React.SetStateAction<
      {
        userName: string
        name: string
        tags: string
        description: string
        image: string
      }[]
    >
  >
}

function Feed(props: Props) {
  const navigator = useNavigate()
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

    props.updateFeed((existingData: any) =>
      existingData.map((data: any, i: number, arr: any) => {
        if (i === arr.length - 1) {
          return {
            ...data,
            name: input.name,
            tags: input.tags,
            description: input.description,
            imgae: input.image,
          }
        }
        return {
          ...data,
        }
      })
    )

    navigator('/list')
  }

  return (
    <div>
      <form className="feed">
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            style={{
              backgroundColor: 'grey',
              width: '400px',
              height: '50px',
              borderRadius: '30px',
            }}
          />
        </div>

        <div>
          <label htmlFor="tag">Tags: </label>
          <input
            type="text"
            name="tags"
            id="tags"
            onChange={handleChange}
            style={{
              backgroundColor: 'grey',
              width: '400px',
              height: '50px',
              borderRadius: '30px',
            }}
          />
        </div>
        <div>
          <label htmlFor="introduction">Description: </label>
          <input
            type="text"
            name="description"
            id="description"
            onChange={handleChange}
            style={{
              backgroundColor: 'grey',
              width: '400px',
              height: '50px',
              borderRadius: '30px',
            }}
          />
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
            style={{ backgroundColor: 'grey', borderRadius: '30px' }}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleSubmit}
            style={{
              fontFamily: 'Orbitron',
              width: '150px',
              height: '60px',
              borderRadius: '30px',
            }}
          >
            New Feed
          </button>
        </div>
      </form>
    </div>
  )
}
export default Feed
