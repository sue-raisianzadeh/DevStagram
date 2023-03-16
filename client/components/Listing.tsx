<<<<<<< HEAD
const Listing = () => {
  return (
    <div>
      {feedsData.map((feed) => (
        <li>
          <Card title={feed.title} desc={feed.des} />
        </li>
      ))}
=======

import Card from './Card'

interface Props {
  // feedsData: data[]
}
const Listing = (props: Props) => {
  
  return (
    <div>
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
