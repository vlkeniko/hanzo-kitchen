import React from 'react'
import { Link } from 'react-router-dom'


export default function HotnCold() {


    return (
        <div className='hot-n-cold'>
            <Link to="/construction">
                <div className='hot-n-cold-card'>
                    <h1 className='hot-n-cold-label'>Hot Section</h1>
                </div>
            </Link>
            <Link to="/lists">
                <div className='hot-n-cold-card'>
                    <h1 className='hot-n-cold-label'>Cold Section</h1>
                </div>
            </Link>
        </div>
    )
}
