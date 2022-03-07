import apiConfig from "./apiConfig"

const fetchApi = {
    getTrendingMovies: async () => {
        let urlTrendingMovies = `${apiConfig.baseUrl}/discover/movie?api_key=${apiConfig.apiKey}&language=en-US&sort_by=popularity.desc&page=1`
        let data
        try {
            let res = await fetch(urlTrendingMovies)
            data = await res.json()
        }
        catch (err) {
            console.log(err)
        }
        // console.log(data.results)
        return data.results
    },

    getMoviesForMoviePage: async (page = 1) => {
        let urlTrendingMovies = `${apiConfig.baseUrl}/discover/movie?api_key=${apiConfig.apiKey}&language=en-US&sort_by=popularity.desc&page=${page}`
        let data
        try {
            let res = await fetch(urlTrendingMovies)
            data = await res.json()
        }
        catch (err) {
            console.log(err)
        }
        // console.log(data.results)s
        return data
    },
    getTopRateMovies: async () => {
        let urlTrendingMovies = `${apiConfig.baseUrl}/discover/movie?api_key=${apiConfig.apiKey}&language=en-US&sort_by=vote_average.desc&page=1&vote_count.gte=1000`
        let data
        try {
            let res = await fetch(urlTrendingMovies)
            data = await res.json()
        }
        catch (err) {
            console.log(err)
        }
        // console.log(data.results)
        return data.results
    },

    getTrendingTVShows: async () => {
        let urlTrendingTVShows = `${apiConfig.baseUrl}/discover/tv?api_key=${apiConfig.apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America`
        let data
        try {
            let res = await fetch(urlTrendingTVShows)
            data = await res.json()
        }
        catch (err) {
            console.log(err)
        }
        // console.log(data.results)
        return data.results
    },
    getTVShowsForTVSeriesPage: async (page = 1) => {
        let urlTrendingTVShows = `${apiConfig.baseUrl}/discover/tv?api_key=${apiConfig.apiKey}&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America`
        let data
        try {
            let res = await fetch(urlTrendingTVShows)
            data = await res.json()
        }
        catch (err) {
            console.log(err)
        }
        // console.log(data.results)
        return data
    },
    getTopRatedTVShows: async () => {
        let urlTopRatedTVShows = `${apiConfig.baseUrl}/discover/tv?api_key=${apiConfig.apiKey}&language=en-US&sort_by=vote_average.desc&page=1&timezone=America%2FNew_York&vote_count.gte=1000`
        let data
        try {
            let res = await fetch(urlTopRatedTVShows)
            data = await res.json()
        }
        catch (err) {
            console.log(err)
        }
        // console.log(data.results)
        return data.results
    },

    searchMovies: async (keyWord = "", page = 1) => {
        let urlTrendingMovies = `${apiConfig.baseUrl}/search/movie?api_key=${apiConfig.apiKey}&language=en-US&query=${keyWord}&page=${page}`
        let data
        try {
            let res = await fetch(urlTrendingMovies)
            data = await res.json()
        }
        catch (err) {
            console.log(err)
        }
        // console.log(data.results)s
        return data
    },
    searchTVSeries: async (keyWord = "", page = 1) => {
        let urlTrendingMovies = `${apiConfig.baseUrl}/search/tv?api_key=${apiConfig.apiKey}&language=en-US&query=${keyWord}&page=${page}`
        let data
        try {
            let res = await fetch(urlTrendingMovies)
            data = await res.json()
        }
        catch (err) {
            console.log(err)
        }
        // console.log(data.results)s
        return data
    },
    getMovieDescription: async (idMovie = 0) => {
        let urlTrendingMovies = `${apiConfig.baseUrl}/movie/${idMovie}?api_key=${apiConfig.apiKey}&language=en-US`
        let data
        try {
            let res = await fetch(urlTrendingMovies)
            data = await res.json()
        }
        catch (err) {
            console.log(err)
        }
        // console.log(data.results)s
        return data
    },
    getTVSeriesDescription: async (idTV = 0) => {
        let urlTrendingMovies = `${apiConfig.baseUrl}/tv/${idTV}?api_key=${apiConfig.apiKey}&language=en-US`
        let data
        try {
            let res = await fetch(urlTrendingMovies)
            data = await res.json()
        }
        catch (err) {
            console.log(err)
        }
        // console.log(data.results)s
        return data
    },
    getListCast: async (idMovie = 0) => {
        let urlTrendingMovies = `${apiConfig.baseUrl}/movie/${idMovie}/credits?api_key=${apiConfig.apiKey}&language=en-US`
        let data
        try {
            let res = await fetch(urlTrendingMovies)
            data = await res.json()
        }
        catch (err) {
            console.log(err)
        }
        // console.log(data.results)s
        return data
    },
    getListCastTVSeries: async (idTV = 0) => {
        let url = `${apiConfig.baseUrl}/tv/${idTV}/credits?api_key=${apiConfig.apiKey}&language=en-US`
        let data
        try {
            let res = await fetch(url)
            data = await res.json()
        }
        catch (err) {
            console.log(err)
        }
        // console.log(data.results)s
        return data
    },
    getListVideos: async (idMovie = 0) => {
        let urlTrendingMovies = `${apiConfig.baseUrl}/movie/${idMovie}/videos?api_key=${apiConfig.apiKey}&language=en-US`
        let data
        try {
            let res = await fetch(urlTrendingMovies)
            data = await res.json()
        }
        catch (err) {
            console.log(err)
        }
        // console.log(data.results)s
        return data
    },
    getListTVSeriesVideos: async (idTV = 0) => {
        let url = `${apiConfig.baseUrl}/tv/${idTV}/videos?api_key=${apiConfig.apiKey}&language=en-US`
        let data
        try {
            let res = await fetch(url)
            data = await res.json()
        }
        catch (err) {
            console.log(err)
        }
        // console.log(data.results)s
        return data
    },
    getListSimilarVideos: async (idMovie = 0) => {
        let urlTrendingMovies = `${apiConfig.baseUrl}/movie/${idMovie}/similar?api_key=${apiConfig.apiKey}&language=en-US&page=1`
        let data
        try {
            let res = await fetch(urlTrendingMovies)
            data = await res.json()
        }
        catch (err) {
            console.log(err)
        }
        // console.log(data.results)s
        return data
    },
    getListSimilarTVSeries: async (idTV = 0) => {
        let urlTrendingMovies = `${apiConfig.baseUrl}/tv/${idTV}/similar?api_key=${apiConfig.apiKey}&language=en-US&page=1`
        let data
        try {
            let res = await fetch(urlTrendingMovies)
            data = await res.json()
        }
        catch (err) {
            console.log(err)
        }
        // console.log(data.results)s
        return data
    },
    getKeyTrailer: async (idMovie = 0) => {
        let url = `${apiConfig.baseUrl}/movie/${idMovie}/videos?api_key=${apiConfig.apiKey}&language=en-US`
        let results
        try {
            let res = await fetch(url)
            let dataTemp = await res.json()
            results = await dataTemp.results
        }
        catch (err) {
            console.log(err)
        }
        if (results.length>0){
            let key =""
            results.forEach((result) => {
                if (result.type === "Trailer") {
                    key = result.key
                    return;
                }
            })
            return key
        }else{
            return "##"
        }
        
    }
}

export default fetchApi