import { useEffect, useState, memo } from "react"
import Slider from "react-slick"
import {
    Link
} from "react-router-dom";

import fetchApi from "../../api/fetchApi"
import Card from "../../component/cards/Card"
import Poster from "../../component/poster/Poster"
import Footer from "../../component/footer/Footer"
import './HomePage.css'

function HomePage() {
    const [movies, setMovies] = useState([])
    const [topRateMovies, setTopRateMovies] = useState([])
    const [topTrendingTV, setTopTrendingTV] = useState([])
    const [topRatedTV, setTopRatedTV] = useState([])

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const settings = {
        slidesToShow: 5,
        infinite: false,
        swipeToSlide: true,
        focusOnSelect: true,
        initialSlide: 3,
        arrows: false,
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
        setMovies(await fetchApi.getTrendingMovies())
        setTopRateMovies(await fetchApi.getTopRateMovies())
        setTopTrendingTV(await fetchApi.getTrendingTVShows())
        setTopRatedTV(await fetchApi.getTopRatedTVShows())
    }, [])
    //console.log(topRatedTV)
    return (
        <div className="home">

            <Slider asNavFor={nav2} ref={c => setNav1(c)} arrows={false} >
                {movies.map((movie) => {
                    let props = {
                        id: movie.id,
                        title: movie.original_title,
                        img: movie.poster_path,
                        overview: movie.overview,
                        posterImg: movie.backdrop_path
                    }
                    return (
                        <div key={movie.id} >
                            <Poster {...props} ></Poster>
                        </div>
                    )
                })}
            </Slider>
            <div className="title-slicker">
                <h3>Trending Movies</h3>
                <button className="btn btn-viewMore"><Link className="link" to="/movie">View more</Link></button>
            </div>

            <Slider
                asNavFor={nav1}
                ref={c => setNav2(c)}
                {...settings}
                infinite={true}
            >
                {movies.map((movie) => {
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
            <div className="title-slicker">
                <h3>Top Rated Movies</h3>
                <button className="btn btn-viewMore"><Link className="link" to="/movie">View more</Link></button>
            </div>
            <Slider
                {...settings}
            >
                {topRateMovies.map((movie) => {
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
            <div className="title-slicker">
                <h3>Top Trending TV Shows</h3>
                <button className="btn btn-viewMore"><Link className="link" to="/movie">View more</Link></button>
            </div>
            <Slider
                {...settings}
            >
                {topTrendingTV.map((tvShow) => {
                    let props = {
                        id: tvShow.id,
                        title: tvShow.name,
                        img: tvShow.poster_path,
                        overview: tvShow.overview.length > 300 ? tvShow.overview.slice(0, 300) + "..." : tvShow.overview
                    }
                    return (
                        <div className="card-item" key={tvShow.id}>
                            <Card {...props}></Card>
                        </div>
                    )
                })}
            </Slider>
            <div className="title-slicker">
                <h3>Top Rated TV Shows</h3>
                <button className="btn btn-viewMore"><Link className="link" to="/movie">View more</Link></button>
            </div>
            <Slider
                {...settings}
            >
                {topRatedTV.map((tvShow) => {
                    let props = {
                        id: tvShow.id,
                        title: tvShow.name,
                        img: tvShow.poster_path,
                        overview: tvShow.overview.length > 300 ? tvShow.overview.slice(0, 300) + "..." : tvShow.overview
                    }
                    return (
                        <div className="card-item" key={tvShow.id}>
                            <Card {...props}></Card>
                        </div>
                    )
                })}
            </Slider>
            <Footer></Footer>
        </div>
    )
}

export default memo(HomePage)