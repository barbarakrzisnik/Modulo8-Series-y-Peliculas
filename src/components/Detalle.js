import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetchIndividual from "../hooks/useFetchIndividual";

const Detalle = () => {
  const params = useParams();
  const datos = useFetchIndividual(params.categoria, params.id);
  console.log(datos)

  const handleClick = () => {};

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300/${datos.poster_path}`}></img>
      <div>
        <Link
          to={`/${params.categoria}/${params.id}/info/:temporada`}
          onClick={handleClick}
        >
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
          <div><img src={`https://image.tmdb.org/t/p/w300/${datos.poster_path}`}></img></div>
          <div>
              <h2>{datos.name}{datos.title}</h2>
              <h3>{datos.vote_average}</h3>
              <p>{datos.overview}</p>
              <p>Duracion: {datos.runtime}</p>
              <p>Genres: {datos.genres.map((elemento) => (
                  <p>{elemento.name}</p>
      ))}</p>
              <p>Prodution: {datos.production_companies.map((elemento) => (
                  <p>{elemento.name}</p>
      ))}</p>

          </div>
      </div>
    </div>
  );
};

export default Detalle;
