import Card from './Card'

interface Props {
  list: any[]
}
const Listing = (props: Props) => {
  return (
    <div>
      {props.list.map((feed) => (
        <li>
          <Card title={feed.title} desc={feed.des} />
        </li>
      ))}
    </div>
  )
}

export default Listing
