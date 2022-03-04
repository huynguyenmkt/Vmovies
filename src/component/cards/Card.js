import {
    Link
} from "react-router-dom";

import apiConfig from '../../api/apiConfig';
import './Card.css'
function Card(props) {
    //console.log(props)
    const { id, title, img, overview } = props;
    
    return (
        <>
            <Link className="link" to={`/movie/${id}`}>
                <img src={img==null?"https://mediawebben.se/assets/img/error/thumbnail.png":apiConfig.w500Image(img)}></img>
                {
                    overview != "" &&
                    <div className="overview">
                        <p> {overview} </p>
                    </div>

                }

                <h4>{title}</h4>
            </Link>
        </>
    )
}

export default Card