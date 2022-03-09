import { useState } from "react";
import {
    Link
} from "react-router-dom";

import './Heading.css'
function Heading() {
    const [active,setActive] = useState('home')
    const handleChangeHomePage = ()=>{
        setActive('home')
    }
    const handleChangeMoviesPage = ()=>{
        setActive('movies')
    }
    const handleChangeTVSeriesPage = ()=>{
        setActive('tvseries')
    }
    return (
        <>
            <div className="wrap-navbar">
                <img className="logo" src={`${process.env.PUBLIC_URL}/myLOGOW500.png`}></img>
                <ul className="navbar">
                    <li>
                        <Link className={`nav-item ${active==='home'?'active':''}`} onClick={handleChangeHomePage} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={`nav-item ${active==='movies'?'active':''}`} onClick={handleChangeMoviesPage} to="/movie">Movies</Link>
                    </li>
                    <li>
                        <Link className={`nav-item ${active==='tvseries'?'active':''}`} onClick={handleChangeTVSeriesPage} to="/tvseries">TV Series</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Heading