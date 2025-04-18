import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';
import moment from 'moment';

export default function ListUserNews() {
  const { username, userid, usertype, reRender, setReRender } = useContext(GlobalContext);
  const [userData, setUserData] = useState();

  useEffect(() => {
    // requesting users news data through api
    axios.get('/api/v1/news')
      .then((res) => setUserData(res.data.data))
      .catch((err) => console.log(err))
  }, [reRender])

  // function to delete newsF
  function deleteNews(id) {
    const confirmed = window.confirm("Do you want to delete this news?");
    if (confirmed) {
      axios.delete(`/api/v1/news/${id}`)
        .then((res) => {
          setReRender(reRender + 1);
          alert("News Deleted 🤗!")
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    userData &&
    <>
      {
        userData.map((news) => (
          <div className='newsList' key={news._id}>
            {usertype == "admin" && <button className='delete-news-button' onClick={() => { deleteNews(news._id) }}>✖</button>}
            <div className='newsTitle'> {news.title} </div>
            <div className='newsImage'> <img className='newsImage' src={news.imagelink} alt={news.title} /> </div>
            <div className='newsDesc'> {news.description} </div>
            <div className='newsDate'> Published at: {moment(news.postedAt).format('MMMM Do YYYY, h:mm:ss A')}</div>
            <div className='newsBy'> Publisher: {news.username} </div>
          </div>
        ))
      }
    </>
  )
}
