

const Listing = () => {
  
  return (
    <div>
      {feedsData.map(feed => (
        <li>
          <Card title={feed.title} desc={feed.des} />
        </li>
      )) }
    </div>
  )
}

export default Listing