import { useParams, Link } from "react-router-dom";

const LinksDetalle = () => {
    const params = useParams()
    return(
        <div className="contenedor-links-detalle">
        <Link
          className="link-detalle"
          to={`/${params.categoria}/${params.id}/info/:temporada`}
        >
          INFO
        </Link>
        <Link
          className="link-detalle"
          to={`/${params.categoria}/${params.id}/reparto/:temporada`}
        >
          REPARTO
        </Link>
        { params.categoria === "movie" ? (<Link
          className="link-detalle"
          to={`/${params.categoria}/${params.id}/video/:temporada`}
        >
          VIDEO
        </Link>) : (<Link
          className="link-detalle"
          to={`/${params.categoria}/${params.id}/temporadas/:temporada`}
        >
          TEMPORADAS
        </Link>) }
        <Link
          className="link-detalle"
          to={`/${params.categoria}/${params.id}/similares/:temporada`}
        >
          SIMILARES
        </Link>
      </div>
    )
}

export default LinksDetalle