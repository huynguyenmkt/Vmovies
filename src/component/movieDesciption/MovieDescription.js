import { useParams } from "react-router-dom"

function MovieDescription() {
    const { idMovie  }  = useParams()
    return (
        <div>
            <h1>Movie Description {idMovie}</h1>
        </div>
    )
}

export default MovieDescription