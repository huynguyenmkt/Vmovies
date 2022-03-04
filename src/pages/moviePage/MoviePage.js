import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate";

import fetchApi from "../../api/fetchApi"
import Card from "../../component/cards/Card"
import Footer from "../../component/footer/Footer";
import './MoviePage.css'
function MoviePage() {
    const [keyWord, setKeyWord] = useState("")
    const [movies, setMovies] = useState([])
    const [data, setData] = useState({})
    const [page, setPage] = useState(0);
    const [isSubmited,setIsSubmited] = useState(false)
    const handleChanePage = (e) => {
        setPage(e.selected);
    };  
    useEffect(async () => {
        let dataTemp
        if(keyWord===""){
            dataTemp = await fetchApi.getMoviesForMoviePage(page + 1)
        }else{
            dataTemp = await fetchApi.searchMovies(keyWord,page+1)
        }
        let moviesTemp = await dataTemp.results
        setData(dataTemp)
        setMovies(moviesTemp)
        window.scrollTo(0,0)
        setIsSubmited(false)
    }, [page,isSubmited])

    const handleChangeInput = (e) => {
        setKeyWord(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmited(true);
    }
    return (
        <div className="moviePage">
            <div className="headerImg"></div>
            <div className="overlay"></div>
            <h2 className="title">Movies</h2>
            <form className="formSearch" onSubmit={handleSubmit}>
                <input className="input" type="text" placeholder="Enter Keyword" value={keyWord} onChange={handleChangeInput}></input>
                <button className="btnSearch" type="submit">Search</button>
            </form>
            <div className="moviePage-movies">
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
            </div>
            <ReactPaginate
                nextLabel="next >"
                forcePage={page}
                onPageChange={handleChanePage}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={data.total_pages > 500 ? 500 : data.total_pages}
                previousLabel="< previous"
                containerClassName="paginationBttns"
                breakClassName="page-item-pagination"
                pageClassName="page-item-pagination"
                previousClassName="page-item-pagination showButton"
                nextClassName="page-item-pagination showButton"
                breakLabel="..."
                activeClassName="paginationActive showButton"
                disabledClassName="paginationDisabled"
                renderOnZeroPageCount={null}
            />
            <Footer></Footer>
        </div>
    )
}

export default MoviePage