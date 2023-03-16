import Card from './Card'

interface Props {
  list: any[]

  // feedsData: data[]
}
const Listing = (props: Props) => {
  return (
    <div>
      {props.list.map((feed) => (
        <li>
          <Card title={feed.title} desc={feed.des} />
        </li>
      ))}

      {/* {feedsData.map(feed => (
        <li>
          <Card title={feed.title} desc={feed.des} />
        </li>
      ))} */}
    </div>
  )
}

export default Listing
