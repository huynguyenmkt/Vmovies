

import apiConfig from "../../api/apiConfig"
import './Poster.css'
function Poster(props) {
    //console.log(props)
    const {id,title,img,overview,posterImg} = props;
    return (
        <div className="poster-item" style={{ backgroundImage: `url(${apiConfig.originalImage(posterImg)})` }}>
            <div className="poster-item-left">
                <div className="poster-content">
                    <h1 className="poster-title">{title}</h1>
                    <p className="poster-text">{overview}</p>
                </div>
                <div className="poster-btns">
                    <button className="btn watchnow">Watch now</button>
                    <button className="btn watchtrailer">Watch Trailer</button>
                </div>
            </div>
            <div className="poster-item-right">
                <img className="poster-image" src={apiConfig.w500Image(img)}></img>
                <div className="poster-btns">
                    <button className="btn watchnow">Watch now</button>
                    <button className="btn watchtrailer">Watch Trailer</button>
                </div>
            </div>
        </div>
    )
}

export default Poster