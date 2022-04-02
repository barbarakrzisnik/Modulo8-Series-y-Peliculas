import useFetchEspecificoResults from "../hooks/useFetchEspecificoResults";
import { useParams, Link } from "react-router-dom";
import LinksDetalle from "./LinksDetalle";
import HeaderDetalle from "./HeaderDetalle";


const Video = () => {

    const params = useParams();
    const video = useFetchEspecificoResults(params.categoria, params.id, "videos");

    return(
        <div className="video">
            <HeaderDetalle />
            <LinksDetalle />
            <h4>Video</h4>
        </div>
    )
}

export default Video