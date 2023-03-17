import Card from './Card'

interface Props {
  list: any[]

  // feedsData: data[]
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
          />
        </li>
      ))}
    </div>
  )
}

export default Listing
