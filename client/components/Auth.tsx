import React from 'react'
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

const Auth = (props: Props) => {

  const [input, setInput] = useState({
    userName: '',
    password: '',
  })
  const navigator = useNavigate()

  function handleSubmit() {
    props.updateFeed((list: any) =>
      list.map((data: any) => ({ ...data, ...input }))
    )
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

      <form className="text-black flex flex-col">

        <label htmlFor="userName">User name</label>
        <input
          type="text"
          name="userName"
          id="userName"
          onChange={(e) =>
            setInput((input) => ({ ...input, userName: e.target.value }))
          }
        />
        <label htmlFor="author">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) =>
            setInput((input) => ({ ...input, password: e.target.value }))
          }
        />

        <button onClick={() => handleSubmit()}>Submit</button>
      </form>
    </div>
  )
}

export default Auth
