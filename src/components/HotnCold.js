import React from 'react'
import { Link } from 'react-router-dom'
import Fire from "../pictures/fire.png"
import Snow from "../pictures/snow.png"

export default function HotnCold() {


    return (
        <div className='hot-n-cold'>
            <Link to="/construction">
                <div className='hot-n-cold-card'>
                <img src={Fire} alt="Snow" style={{width:"30px", height: "auto", paddingBottom: "15px",}}/>
                    <h1 className='hot-n-cold-label'>Hot Section</h1>
                    
                </div>
            </Link>
            <Link to="/lists">
                <div className='hot-n-cold-card'>
                <img src={Snow} alt="Snow" style={{width:"30px", height: "auto", paddingBottom: "15px",}}/>
                    <h1 className='hot-n-cold-label'>Cold Section</h1>
                </div>
            </Link>
        </div>
    )
}
