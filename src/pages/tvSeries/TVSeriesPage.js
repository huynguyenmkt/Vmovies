import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import Card from "../../component/cards/Card";
import fetchApi from "../../api/fetchApi";
import Footer from "../../component/footer/Footer";
import Heading from "../../component/Heading/Heading"
import Loading from "../../component/loading/Loading"
function TVSeriesPage() {
    const [data, setData] = useState({})
    const [tvSeries, setTvSeries] = useState([])
    const [keyWord, setKeyWord] = useState("")
    const [isSubmited, setIsSubmited] = useState(false)
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmited(true);
    }
    const handleChangeInput = (e) => {
        setKeyWord(e.target.value)
    }
    const handleChanePage = (e) => {
        setPage(e.selected);
    };
    useEffect(() => {
        setTimeout(async () => {
            let dataTemp
            if (keyWord === "") {
                dataTemp = await fetchApi.getTVShowsForTVSeriesPage(page + 1)
            } else {
                dataTemp = await fetchApi.searchTVSeries(keyWord, page + 1)
            }
            let tvSeries = await dataTemp.results
            setData(dataTemp)
            setTvSeries(tvSeries)
            setIsSubmited(false)
            setLoading(true)
        }, 1000);
        window.scrollTo(0, 0)
    }, [page, isSubmited])

    return (
        <>
            {
                !loading?
                <Loading></Loading>
                :
                <div className="moviePage">
                    <Heading pageActive="tvseries"></Heading>
                    <div className="headerImg"></div>
                    <div className="overlay"></div>
                    <h2 className="title">TV Series</h2>
                    <form className="formSearch" onSubmit={handleSubmit}>
                        <input className="input" type="text" placeholder="Enter Keyword" value={keyWord} onChange={handleChangeInput}></input>
                        <button className="btnSearch" type="submit">Search</button>
                    </form>
                    <div className="moviePage-movies">
                        {tvSeries.map((tvSerie) => {
                            let props = {
                                id: tvSerie.id,
                                title: tvSerie.name,
                                img: tvSerie.poster_path,
                                overview: tvSerie.overview.length > 300 ? tvSerie.overview.slice(0, 300) + "..." : tvSerie.overview
                            }
                            return (
                                <div className="card-item" key={tvSerie.id}>
                                    <Card {...props} type="tv"></Card>
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
            }
        </>
    )
}

export default TVSeriesPage