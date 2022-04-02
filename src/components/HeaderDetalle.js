import { useParams, Link } from "react-router-dom";
import useFetchIndividual from "../hooks/useFetchIndividual";

const HeaderDetalle = () => {
    const params = useParams();
    const datos = useFetchIndividual(params.categoria, params.id);
    return(
        <div
        className="header-detalle"
        style={{
          backgroundImage:
            "url(" +
            `https://image.tmdb.org/t/p/original/${datos.poster_path}` +
            ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    )
}

export default HeaderDetalle