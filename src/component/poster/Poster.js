import React, { useState } from "react";
import {
    Link
} from "react-router-dom";

import apiConfig from "../../api/apiConfig"
import fetchApi from "../../api/fetchApi";
import './Poster.css'
function Poster(props) {
    const { id, title, img, overview, posterImg } = props;
    const [showTrailer, setShowTrailer] = useState(false)
    const [key,setKey] = useState("")
    const handleShowTraiLer = async () => {
        setShowTrailer(true)
        setKey(await fetchApi.getKeyTrailer(id))
    }
    const handleHiddenTraiLer = () => {
        setShowTrailer(false)
    }
    return (
        <div className="poster-item" style={{ backgroundImage: `url(${apiConfig.originalImage(posterImg)})` }}>
            {showTrailer &&
                <div className="trailer">
                    <div className="overlay" onClick={handleHiddenTraiLer}>
                    </div>
                    <iframe 
                        src={`https://www.youtube.com/embed/${key}`}
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            }
            <div className="poster-item-left">
                <div className="poster-content">
                    <h1 className="poster-title">{title}</h1>
                    <p className="poster-text">{overview}</p>
                </div>
                <div className="poster-btns">
                    <button className="btn watchnow"><Link className="link" to={`/movie/${id}`}>Watch now</Link></button>
                    <button className="btn watchtrailer" onClick={handleShowTraiLer}>Watch Trailer</button>
                </div>
            </div>
            <div className="poster-item-right">
                <img className="poster-image" src={apiConfig.w500Image(img)}></img>
                <div className="poster-btns">
                    <button className="btn watchnow"><Link className="link" to={`/movie/${id}`}>Watch now</Link></button>
                    <button className="btn watchtrailer">Watch Trailer</button>
                </div>
            </div>
        </div>
    )
}

export default Poster