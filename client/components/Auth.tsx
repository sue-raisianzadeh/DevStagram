import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  updateFeed: React.Dispatch<
    React.SetStateAction<
      {
        userName: string
        password: string
        name: string
        tags: string
        description: string
        image: string
      }[]
    >
  >
}

const Auth = (props: Props) => {
  const [input, setInput] = useState({
    userName: '',
    password: '',
  })
  const navigator = useNavigate()

  function handleSubmit() {
    props.updateFeed((data: any) => [...data, input])
    navigator('/feed')
  }

  return (
    <div>
      <img
        className="logo"
        src="/images/group 3 logo.jpg"
        alt="DevStagram logo"
      />

      <h1 className="header">Think Different Think DevStargram </h1>

      <form className="form" >
        <div>
          <label className="label" htmlFor="userName">User name</label>
          <input className='input'
            type="text"
            name="userName"
            id="userName"
            onChange={(e) =>
              setInput((input) => ({ ...input, userName: e.target.value }))
            }
          />
        </div>
        <div>
          <label className="label" htmlFor="author">Password</label>
          <input className='input'
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setInput((input) => ({ ...input, password: e.target.value }))
            }
          />
        </div>
        <button className='btn' onClick={() => handleSubmit()}>Submit</button>
      </form>
    </div>
  )
}

export default Auth
