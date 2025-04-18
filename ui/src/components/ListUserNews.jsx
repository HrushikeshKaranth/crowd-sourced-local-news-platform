import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function ListUserNews() {
  const { username, userid, reRender } = useContext(GlobalContext);
  const [userData, setUserData] = useState();

  useEffect(() => {
    // requesting users news data through api
    axios.get('/api/v1/news')
      .then((res) => setUserData(res.data.data))
      .catch((err) => console.log(err))
  }, [reRender])

  return (
    userData &&
    <>
      {
        userData.map((news) => (
          <div className='newsList' key={news.title}>
            <div className='newsTitle'> {news.title} </div>
            <div className='newsImage'> <img className='newsImage' src={news.imagelink} alt={news.title} /> </div>
            <div className='newsDesc'> {news.description} </div>
            <div className='newsDate'> Published at: {news.postedAt}</div>
            <div className='newsBy'> Publisher: {news.username} </div>
          </div>
        ))
      }
    </>
  )
}
