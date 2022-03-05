import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import fetchApi from "../../api/fetchApi"
import apiConfig from "../../api/apiConfig"
import './MovieDescription.css'
function MovieDescription() {
    const { idMovie } = useParams()
    const [movieDescription, setMovieDescription] = useState({})
    const [casts, setCasts] = useState([])

    useEffect(async () => {
        let dataTemp = await fetchApi.getMovieDescription(parseInt(idMovie))
        let dataCasts = await fetchApi.getListCast(parseInt(idMovie))
        setCasts(await dataCasts.cast)
        setMovieDescription(dataTemp)
    }, [])

    console.log()
    let imgBackGround = "";
    let img = "";
    let title = "";
    let genres = []
    let overview = ""
    let topCasts = casts.length > 6 ? casts.slice(0, 6) : casts

    if (Object.keys(movieDescription).length > 0) {
        imgBackGround = movieDescription.belongs_to_collection ? movieDescription.belongs_to_collection.backdrop_path : movieDescription.backdrop_path;
        img = movieDescription.poster_path
        title = movieDescription.title
        genres = movieDescription.genres
        overview = movieDescription.overview
    }
    return (
        <div className="movieDescription" style={{ backgroundImage: `url(${apiConfig.originalImage(imgBackGround)})` }}>
            <div className="overlay"></div>
            <div className="content-movie">
                <img className="posterImg" src={`${apiConfig.w500Image(img)}`}></img>
                <div className="leftContent-movie">
                    <h1>{title}</h1>
                    <div className="listGenres">
                        {genres.map((genre, index) => {
                            return <div className="listGenres-item" key={index}>{genre.name}</div >
                        })}
                    </div>
                    <p>{overview}</p>
                    <h3 className="castsTitle">Casts</h3>
                    <div className="listCasts">
                        {topCasts.map((cast, index) => {
                            return <div className="listCasts-item" key={index}>
                                <img src={`${apiConfig.w500Image(cast.profile_path)}`}></img>
                                <p>{cast.name}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDescription