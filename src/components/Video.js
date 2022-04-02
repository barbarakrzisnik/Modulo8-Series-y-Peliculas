import useFetchEspecifico from "../hooks/useFetchEspecifico";
import useFetchIndividual from "../hooks/useFetchEspecifico";
import { useParams, Link } from "react-router-dom";
import Tarjetas from "./Tarjetas";
import LinksDetalle from "./LinksDetalle";
import HeaderDetalle from "./HeaderDetalle";


const Video = () => {

    const params = useParams();
    const video = useFetchEspecifico(params.categoria, params.id, "videos");
    console.log(video)

    return(
        <div className="video">
            <HeaderDetalle />
            <LinksDetalle />
        </div>
    )
}

export default Video