import React from 'react'

interface Props {
  userName: string
  name: string
  tags: string
  desc: string
  image: string
  password: string
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

const Card = (props: Props) => {
  const handleDelete = (password: string, desc: string) => {
    const checkPassword = prompt('Please type the password')

    if (checkPassword == password) {
      props.updateFeed((data) =>
        data.filter((el, i) => el.description !== desc)
      )
    } else {
      alert('Password is incorrect')
    }
  }

  return (
    <div className="card">
      <img style={{ width: '150px' }} src={props.image} alt="Image" />
      <h2 className="top">{props.userName}</h2>
      <ul className="inside">
        <li>Name: {props.name}</li>
        <br />
        <li>Hashtag: {props.tags}</li>
        <br />
        <li>Description: {props.desc}</li>
        <br />
        <button
          onClick={() => handleDelete(props.password, props.desc)}
          style={{
            fontFamily: 'Orbitron',
            width: '150px',
            height: '60px',
            borderRadius: '30px',
          }}
        >
          Delete
        </button>
      </ul>
    </div>
  )
}

export default Card
