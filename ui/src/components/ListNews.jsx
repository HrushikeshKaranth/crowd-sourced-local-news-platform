import React from 'react'
import ListUserNews from './ListUserNews'
import ListTopNews from './ListTopNews'
import '../styles/news.css';

export default function ListNews() {
    return (
        <div className='news'>
            <ListUserNews />
            <ListTopNews />
        </div>
    )
}
