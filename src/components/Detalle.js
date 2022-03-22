import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetchIndividual from "../hooks/useFetchIndividual";

const Detalle = () => {
  const params = useParams();
  const datos = useFetchIndividual(params.categoria, params.id);
  console.log(datos);

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300/${datos.poster_path}`}></img>
      <div>
        <Link to={`/${params.categoria}/${params.id}/info/:temporada`}>
          INFO
        </Link>
        <Link to={`/${params.categoria}/${params.id}/reparto/:temporada`}>
          REPARTO
        </Link>
        <Link to={`/${params.categoria}/${params.id}/video/:temporada`}>
          VIDEO
        </Link>
        <Link to={`/${params.categoria}/${params.id}/similares/:temporada`}>
          SIMILARES
        </Link>
      </div>
      <div>
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
          <p>Generos:</p>
          {datos?.genres?.map((elemento) => (
              <p>{elemento.name}</p>
          ))}
          <p>Produccion:</p>
          {datos?.production_companies?.map((elemento) => (
                  <p>{elemento.name}</p>
      ))}
        </div>
      </div>
    </div>
  );
};

export default Detalle;
