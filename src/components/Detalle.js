import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetchIndividual from "../hooks/useFetchIndividual";

const Detalle = () => {
  const params = useParams();
  const datos = useFetchIndividual(params.categoria, params.id);
  console.log(datos);

  return (
    <div class="contenedor-detalle">
      <div className="header-detalle" style={{
          backgroundImage:
            "url(" +
            `https://image.tmdb.org/t/p/original/${datos.poster_path}` +
            ")",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
      </div>
      <div className="contenedor-links-detalle">
        <Link className="link-detalle" to={`/${params.categoria}/${params.id}/info/:temporada`}>
          INFO
        </Link>
        <Link className="link-detalle" to={`/${params.categoria}/${params.id}/reparto/:temporada`}>
          REPARTO
        </Link>
        <Link className="link-detalle" to={`/${params.categoria}/${params.id}/video/:temporada`}>
          VIDEO
        </Link>
        <Link className="link-detalle" to={`/${params.categoria}/${params.id}/similares/:temporada`}>
          SIMILARES
        </Link>
      </div>
      <div className="contenedor-texto-detalle">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300/${datos.poster_path}`}
          ></img>
        </div>
        <div>
          <h2>
            {datos.name}
            {datos.title}
          </h2>
          <h3>{datos.vote_average}</h3>
          <p>{datos.overview}</p>
          <p>Duración: {datos.runtime}</p>
          <div>
          <p>Generos:</p>
          {datos?.genres?.map((elemento) => (
              <p>{elemento.name}</p>
          ))}

          </div>
          <div>
          <p>Produccion:</p>
          {datos?.production_companies?.map((elemento) => (
                  <p>{elemento.name}</p>
      ))}

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Detalle;
