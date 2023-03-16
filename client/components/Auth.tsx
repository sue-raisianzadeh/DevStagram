import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  const textInput = event.target.name
  const passInput = event.target.name
}
const Auth = () => {
  const [input, setInput] = useState({
    userName: '',
    password: '',
  })
  return (
    <div>
      <form>
        <label htmlFor="userName">User name</label>
        <input
          type="text"
          name="userName"
          id="userName"
          onChange={handleChange}
        />
        <label htmlFor="author">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export function handleSubmit(event: React.FormEvent<HTMLButtonElement>) {
  event.preventDefault()
}

export default Auth
