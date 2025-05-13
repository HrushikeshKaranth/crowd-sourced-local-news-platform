import React from 'react';
import { Link } from "react-router-dom";
import '../styles/header.css';

export default function Header() {
    return (
        <div className='header'>
            <Link className='header-text' to='/'>Crowd Report</Link>
        </div>
    )
}
