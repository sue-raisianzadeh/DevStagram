import React from 'react'

interface Props {
  userName: string,
  name: string,
  tags: string,
  desc: string,
  image: string,
}

const Card = (props: Props) => {
  return (
    <div>
      <ul>
        <li>{props.userName}</li>
        <li>{props.name}</li>
        <li>{props.tags}</li>
        <li>{props.desc}</li>
        <li>{props.image}</li>
      </ul>
      
    </div>
  )
}

export default Card
