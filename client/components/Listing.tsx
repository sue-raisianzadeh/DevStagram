import Card from './Card'

interface Props {
<<<<<<< HEAD
  list: any[]
=======
  // feedsData: data[]
>>>>>>> main
}
const Listing = (props: Props) => {
  return (
    <div>
<<<<<<< HEAD
      {props.list.map((feed) => (
        <li>
          <Card title={feed.title} desc={feed.des} />
        </li>
      ))}
=======
      {/* {feedsData.map(feed => (
        <li>
          <Card title={feed.title} desc={feed.des} />
        </li>
      ))} */}
>>>>>>> main
    </div>
  )
}

export default Listing
