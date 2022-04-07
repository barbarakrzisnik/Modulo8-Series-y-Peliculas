import useFetchEspecificoResults from "../hooks/useFetchEspecificoResults";
import { useParams, Link } from "react-router-dom";
import LinksDetalle from "./LinksDetalle";
import HeaderDetalle from "./HeaderDetalle";
import Imagen from "./construccion.svg";


const Video = () => {

    const params = useParams();
    const video = useFetchEspecificoResults(params.categoria, params.id, "videos");

    return(
        <div className="video">
            <HeaderDetalle />
            <LinksDetalle />
            <div className="imagen">
            <img src={Imagen} alt="Sitio en construccion"></img>
            <h3>Pronto disponible!</h3>
            </div>
            
        </div>
    )
}

export default Video