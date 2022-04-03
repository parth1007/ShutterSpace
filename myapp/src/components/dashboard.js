import React from 'react'
import '../css/style.css'
import SideBox from './sidebox.js'
// import {Link} from 'react-router-dom';
import ContentBox from './contentbox.js'


export default function Dashboard() {
    return (
        <>
            <div className="header">
                <h2>PicMe</h2>
            </div>
            <div className="page">
                <SideBox/>
                <ContentBox/>
            </div>
        </>
    )
}