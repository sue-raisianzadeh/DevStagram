import { useEffect } from 'react'
import Card from './Card'

interface Props {
  list: any[]

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
const Listing = (props: Props) => {

  return (
    <div>
      {props.list.map((feed, i) => (
        <li key={i}>
          <Card
            userName={feed.userName}
            name={feed.name}
            tags={feed.tags}
            desc={feed.description}
            image={feed.image}
            password={feed.password}
            updateFeed={props.updateFeed}
          />
        </li>
      ))}
    </div>
  )
}

export default Listing
