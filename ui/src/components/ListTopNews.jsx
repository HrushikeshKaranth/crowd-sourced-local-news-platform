import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ListTopNews() {
    const [data, setData] = useState();

    useEffect(() => {
        // top headlines data from gnews.io api
        axios.get('https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=42252c52a9808c1c2341230b97179ddf')
            .then((res) => setData(res.data.articles))
            .catch((err) => console.error(err))
    }, [])

    return (
        data &&
        <>
            {
                data.map((news) => (
                    <div className='newsList' key={news.title}>
                        <div className='newsTitle'> {news.title} </div>
                        <div className='newsImage'> <img className='newsImage' src={news.image} alt={news.title} /> </div>
                        <div className='newsDesc'> {news.description} </div>
                        <div className='newsDate'> Published at: {news.publishedAt}</div>
                        <div className='newsBy'> Publisher: {news.source.name} </div>
                    </div>
                ))
            }
        </>
    )
}
