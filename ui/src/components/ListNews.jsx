import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ListNews() {
  const [data, setData] = useState();
  useEffect(()=>{
    axios.get('https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=42252c52a9808c1c2341230b97179ddf')
    .then((res)=>{ setData(res.data.articles) })
    .catch((err)=>{console.log(err);
    })
  },[])
  console.log(data);
  
  return (
    data && 
    <div className='news'>
      {
        data.map((news)=>(
          <div className='newsList'>
            <div className='newsTitle'> {news.title} </div>
            <div> <img className='newsImage' src={news.image} alt={news.title} /> </div>
            <div className='newsDesc'> {news.description} </div>
            <div className='newsDate'> Published at: {news.publishedAt} </div>
          </div>
        ))
      }
    </div>
  )
}
