import React from 'react'

interface Props {
  userName: string
  name: string
  tags: string
  desc: string
  image: string
}

const Card = (props: Props) => {
  return (
    <div className="card">
      <h2 className="top">{props.userName}</h2>
      <ul className="inside">
        <li>Name: {props.name}</li>
        <br />
        <li>Hashtag: {props.tags}</li>
        <br />
        <li>Description: {props.desc}</li>
        <br />
        <li>{props.image}</li>
      </ul>
    </div>
  )
}

export default Card
