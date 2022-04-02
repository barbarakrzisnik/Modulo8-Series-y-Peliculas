import useFetchEspecifico from "../hooks/useFetchEspecifico";
import { useParams, Link } from "react-router-dom";
import Tarjetas from "./Tarjetas";
import LinksDetalle from "./LinksDetalle";
import HeaderDetalle from "./HeaderDetalle";

const Reparto = () => {
    const params = useParams();
    const reparto = useFetchEspecifico(params.categoria, params.id, "credits");

    console.log(reparto)
    return(
        <div className="reparto">
            <HeaderDetalle />
            <LinksDetalle/>
            <div className="contenedor-tarjetas">
            {reparto?.cast?.map((elemento) => (
            <Tarjetas
              key={elemento.id}
              title={elemento.title}
              name={elemento.name}
              imagen={`https://image.tmdb.org/t/p/w300/${elemento.profile_path}`}
              id={elemento.id}
            />
          ))}
            </div>
        </div>
        
    )
}

export default Reparto