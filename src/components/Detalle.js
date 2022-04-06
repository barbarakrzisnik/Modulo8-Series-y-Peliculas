import { useParams, Link } from "react-router-dom";
import useFetchIndividual from "../hooks/useFetchIndividual";
import useFetchEspecifico from "../hooks/useFetchEspecifico";
import {
  FaTwitter,
  FaFacebookSquare,
  FaImdb,
  FaInstagram,
  FaStar,
} from "react-icons/fa";
import LinksDetalle from "./LinksDetalle";

const Detalle = () => {
  const params = useParams();
  const datos = useFetchIndividual(params.categoria, params.id);
  const redes = useFetchEspecifico(params.categoria, params.id, "external_ids");

  return (
    <div className="contenedor-detalle">
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
      <LinksDetalle />
      <div className="contenedor-detalle-contenido">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300/${datos.poster_path}`}
          ></img>
        </div>
        <div className="contenedor-detalle-contenido-texto">
          <h3>{datos.name ? datos.name : datos.title}</h3>
          <div className="texto-detalle-contenedor-puntuacion">
            <FaStar />
            <h4>{datos.vote_average}</h4>
          </div>
          <p>{datos.overview}</p>
          <p>Duración: {datos.runtime}</p>
          <div className="texto-detalle-contenedor-array">
            <ul>
              <li>Géneros:</li>
              {datos?.genres?.map((elemento) => (
                <li>{elemento.name}</li>
              ))}
            </ul>
          </div>
          <p>Estreno: {datos.release_date}</p>
          <div className="texto-detalle-contenedor-array">
            <ul>
              <li>Produccion:</li>
              {datos?.production_companies?.map((elemento) => (
                <li>{elemento.name}</li>
              ))}
            </ul>
          </div>
          <div className="contenedor-detalle-contenido-redes">
            <ul>
              <li>
                <a href={`https://www.facebook.com/${redes?.facebook_id}`}>
                  {" "}
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a href={`https://www.twitter.com/${redes?.twitter_id}`}>
                  {" "}
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href={`https://www.instagram.com/${redes?.instagram_id}`}>
                  {" "}
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href={`https://www.imdb.com/${redes?.imdb_id}`}>
                  {" "}
                  <FaImdb />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
