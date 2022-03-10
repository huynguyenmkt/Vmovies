import { useLottie } from "lottie-react";
import movie from './movie.json'
function Loading(){
    const style = {
        height: "40vh",
        position: "relative",
        top: "30vh"
    };

    const options = {
        animationData: movie,
        loop: true,
        autoplay: true
    };
    const { View } = useLottie(options, style);
    return (
        <div>{View}</div>
    )
}
export default Loading