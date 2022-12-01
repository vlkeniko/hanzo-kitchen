import React from 'react'
import { Link } from 'react-router-dom'


export default function HotnCold() {


    return (
        <div>
            <Link to="/construction">
                <div className='hot-n-cold-card'>
                    <h1>Hot Section</h1>
                </div>
            </Link>
            <Link to="/list">
                <div className='hot-n-cold-card'>
                    <h1>Cold Section</h1>
                </div>
            </Link>
        </div>
    )
}
