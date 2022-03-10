import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Slider from "react-slick"
import {
    Link
} from "react-router-dom";

import fetchApi from "../../api/fetchApi"
import apiConfig from "../../api/apiConfig"
import Card from "../../component/cards/Card"
import Footer from "../../component/footer/Footer"
import Heading from "../../component/Heading/Heading"
import Loading from "../../component/loading/Loading"
function TVSeriesDescription() {
    const { idTV } = useParams()
    const [tvSeriesDescription, setTVSeriesDescription] = useState({})
    const [casts, setCasts] = useState([])
    const [videos, setMovies] = useState([])
    const [similarTVSeries, setSimilarTVSeries] = useState([])
    const [loading, setLoading] = useState(false)
    const settings = {
        slidesToShow: 5,
        infinite: false,
        swipeToSlide: true,
        focusOnSelect: true,
        initialSlide: 0,
        arrows: false,
        dots: true,
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
    useEffect( () => {
        setTimeout(async() => {
            let dataTemp = await fetchApi.getTVSeriesDescription(parseInt(idTV))
            let dataVideos = await fetchApi.getListTVSeriesVideos(parseInt(idTV))
            setMovies(await dataVideos.results)
            let dataCasts = await fetchApi.getListCastTVSeries(parseInt(idTV))
            setCasts(await dataCasts.cast)
            let dataSimilarTVSeries = await fetchApi.getListSimilarTVSeries(parseInt(idTV))
            setSimilarTVSeries(await dataSimilarTVSeries.results)
            setTVSeriesDescription(dataTemp)
            setLoading(true)
        }, 1000);
        window.scrollTo(0, 0)
    }, [idTV])



    let imgBackGround = "";
    let img = "";
    let title = "";
    let genres = []
    let overview = ""
    let topCasts = casts.length > 6 ? casts.slice(0, 6) : casts

    if (Object.keys(tvSeriesDescription).length > 0) {
        imgBackGround = tvSeriesDescription.belongs_to_collection ? tvSeriesDescription.belongs_to_collection.backdrop_path : tvSeriesDescription.backdrop_path;
        img = tvSeriesDescription.poster_path
        title = tvSeriesDescription.name
        genres = tvSeriesDescription.genres
        overview = tvSeriesDescription.overview
    }

    return (
        <>
            {
                !loading ?
                    <Loading></Loading>
                    :
                    <div>
                        <Heading></Heading>
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
                            {videos.map((video, index) => {
                                return (
                                    <div className="movieTrailer" key={index}>
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
                            <h3>Similar TVSeries</h3>
                            <button className="btn btn-viewMore"><Link className="link" to="/tvseries">View more</Link></button>
                        </div>
                        <Slider
                            {...settings}
                        >
                            {similarTVSeries.map((movie) => {
                                let props = {
                                    id: movie.id,
                                    title: movie.name,
                                    img: movie.poster_path,
                                    overview: movie.overview.length > 300 ? movie.overview.slice(0, 300) + "..." : movie.overview
                                }
                                return (
                                    <div className="card-item" key={movie.id}>
                                        <Card {...props} type="tv"></Card>
                                    </div>
                                )
                            })}
                        </Slider>
                        <Footer></Footer>
                    </div>
            }
        </>
    )
}

export default TVSeriesDescription