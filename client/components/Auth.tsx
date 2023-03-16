import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const [input, setInput] = useState({
    userName: '',
    Password: '',
  })
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
        <input type="text" name="user" id="userName" onClick={handleChange} />
        <label htmlFor="author">Password</label>
        <input
          type="password"
          name="author"
          id="password"
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Auth
