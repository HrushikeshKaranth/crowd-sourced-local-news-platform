import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ListUserNews() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    // requesting users news data through api
    axios.get('/api/v1/news')
      .then((res) => setUserData(res.data.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    userData &&
    <>
      {
        userData.map((news) => (
          <div className='newsList' key={news.title}>
            <div className='newsTitle'> {news.title} </div>
            <div> <img className='newsImage' src={news.imagelink} alt={news.title} /> </div>
            <div className='newsDesc'> {news.description} </div>
            <div className='newsDate'> Published at: {news.postedAt}</div>
            <div className='newsBy'> Publisher: {news.username} </div>
          </div>
        ))
      }
    </>
  )
}
