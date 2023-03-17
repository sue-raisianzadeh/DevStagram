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
      alert("Password is incorrect")
    }
  }


  return (
    <div>
      <ul>
        <img style={{width: "150px"}} src={props.image} alt="Image" />
        <li>{props.userName}</li>
        <li>{props.name}</li>
        <li>{props.tags}</li>
        <li>{props.desc}</li>
        <li>{props.image}</li>
        <button onClick={() => handleDelete(props.password, props.desc)}>
          Delete
        </button>
      </ul>

    </div>
  )
}

export default Card
