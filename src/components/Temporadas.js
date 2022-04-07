import useFetchTemporadas from "../hooks/useFetchTemporadas";
import useFetchIndividual from "../hooks/useFetchIndividual";
import LinksDetalle from "./LinksDetalle";
import HeaderDetalle from "./HeaderDetalle";
import TarjetaEpisodio from "./TarjetaEpisodio";
import { useParams } from "react-router-dom";
import { selectTemporadas } from "../auxiliares/funciones";
import { useState } from "react";

const Temporadas = () => {
  const params = useParams();
  const [temporadaSeleccionada, setTemporadaSeleccionada] = useState(1);
  const temporadas = useFetchTemporadas(
    params.categoria,
    params.id,
    temporadaSeleccionada
  );
  const numeroTemporadas = useFetchIndividual(params.categoria, params.id);
  const episodios = temporadas.episodes;


  const handleChange = (e) => {
    setTemporadaSeleccionada(e.target.value);
  };

  return (
    <div className="temporadas">
      <HeaderDetalle />
      <LinksDetalle />
      <div className="contenedor-select-temporadas">
        <label>
          <select
            onChange={handleChange}
            className="select-temporadas"
            name="select-temporadas"
          >
            {selectTemporadas(numeroTemporadas?.number_of_seasons)}
          </select>
        </label>
      </div>
      <div className="contenedor-episodios">
        {episodios?.map((elemento) => (
          <TarjetaEpisodio
            temporada={elemento.season_number}
            episodio={elemento.episode_number}
            nombre={elemento.name}
            resumen={elemento.overview}
            imagen={`https://image.tmdb.org/t/p/w300/${elemento.still_path}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Temporadas;
