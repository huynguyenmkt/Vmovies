import apiConfig from "./apiConfig"

const fetchApi = {
    getTrendingMovies: async ()=>{
        let urlTrendingMovies = `${apiConfig.baseUrl}/discover/movie?api_key=${apiConfig.apiKey}&language=en-US&sort_by=popularity.desc&page=1`
        let data
        try{
            let res = await fetch(urlTrendingMovies)
            data = await res.json()
        }
        catch(err) {
            console.log(err)
        }
        // console.log(data.results)
        return data.results
    },

    getMoviesForMoviePage: async (page = 1)=>{
        let urlTrendingMovies = `${apiConfig.baseUrl}/discover/movie?api_key=${apiConfig.apiKey}&language=en-US&sort_by=popularity.desc&page=${page}`
        let data
        try{
            let res = await fetch(urlTrendingMovies)
            data = await res.json()
        }
        catch(err) {
            console.log(err)
        }
        // console.log(data.results)s
        return data
    },
    getTopRateMovies: async ()=>{
        let urlTrendingMovies = `${apiConfig.baseUrl}/discover/movie?api_key=${apiConfig.apiKey}&language=en-US&sort_by=vote_average.desc&page=1&vote_count.gte=1000`
        let data
        try{
            let res = await fetch(urlTrendingMovies)
            data = await res.json()
        }
        catch(err) {
            console.log(err)
        }
        // console.log(data.results)
        return data.results
    },

    getTrendingTVShows: async ()=>{
        let urlTrendingTVShows = `${apiConfig.baseUrl}/discover/tv?api_key=${apiConfig.apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America`
        let data
        try{
            let res = await fetch(urlTrendingTVShows)
            data = await res.json()
        }
        catch(err) {
            console.log(err)
        }
        // console.log(data.results)
        return data.results
    },

    getTopRatedTVShows: async ()=>{
        let urlTopRatedTVShows = `${apiConfig.baseUrl}/discover/tv?api_key=${apiConfig.apiKey}&language=en-US&sort_by=vote_average.desc&page=1&timezone=America%2FNew_York&vote_count.gte=1000`
        let data
        try{
            let res = await fetch(urlTopRatedTVShows)
            data = await res.json()
        }
        catch(err) {
            console.log(err)
        }
        // console.log(data.results)
        return data.results
    },

    searchMovies: async (keyWord = "",page = 1)=>{
        let urlTrendingMovies = `${apiConfig.baseUrl}/search/movie?api_key=${apiConfig.apiKey}&language=en-US&query=${keyWord}&page=${page}`
        let data
        try{
            let res = await fetch(urlTrendingMovies)
            data = await res.json()
        }
        catch(err) {
            console.log(err)
        }
        // console.log(data.results)s
        return data
    }
}

export default fetchApi