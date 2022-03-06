import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Slider from "react-slick"
import {
    Link
} from "react-router-dom";

import fetchApi from "../../api/fetchApi"
import apiConfig from "../../api/apiConfig"
import Footer from "../footer/Footer"
import Card from "../../component/cards/Card"
import './MovieDescription.css'
function MovieDescription() {
    const { idMovie } = useParams()
    const [movieDescription, setMovieDescription] = useState({})
    const [casts, setCasts] = useState([])
    const [videos, setMovies] = useState([])
    const [similarVideos, setSimilarVideos] = useState([])
    const settings = {
        slidesToShow: 5,
        infinite: false,
        swipeToSlide: true,
        focusOnSelect: true,
        initialSlide: 0,
        arrows: false,
        dots:true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    useEffect(async () => {
        let dataTemp = await fetchApi.getMovieDescription(parseInt(idMovie))
        let dataVideos = await fetchApi.getListVideos(parseInt(idMovie))
        setMovies(await dataVideos.results)
        let dataCasts = await fetchApi.getListCast(parseInt(idMovie))
        setCasts(await dataCasts.cast)
        let dataSimilarVideos = await fetchApi.getListSimilarVideos(parseInt(idMovie))
        setSimilarVideos(await dataSimilarVideos.results)
        setMovieDescription(dataTemp)
        window.scrollTo(0,0)
    }, [idMovie])

    //console.log(similarVideos)
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
        <>
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
            <div className="moviesTrailer">
                {videos.map((video) => {
                    return (
                        <div className="movieTrailer">
                            <h3>{video.name}</h3>
                            <iframe src={`https://www.youtube.com/embed/${video.key}`}
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                        </div>
                    )
                })}
            </div>
            <div className="title-slicker">
                <h3>Similar Movies</h3>
                <button className="btn btn-viewMore"><Link className="link" to="/movie">View more</Link></button>
            </div>

            <Slider
                {...settings}
            >
                {similarVideos.map((movie) => {
                    let props = {
                        id: movie.id,
                        title: movie.original_title,
                        img: movie.poster_path,
                        overview: movie.overview.length > 300 ? movie.overview.slice(0, 300) + "..." : movie.overview
                    }
                    return (
                        <div className="card-item" key={movie.id}>
                            <Card {...props}></Card>
                        </div>
                    )
                })}
            </Slider>
            <Footer></Footer>
        </>
    )
}

export default MovieDescription