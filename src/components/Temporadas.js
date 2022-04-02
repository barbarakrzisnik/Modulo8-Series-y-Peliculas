import useFetchTemporadas from "../hooks/useFetchTemporadas";
import useFetchIndividual from "../hooks/useFetchIndividual";
import LinksDetalle from "./LinksDetalle";
import HeaderDetalle from "./HeaderDetalle";
import { useParams, Link } from "react-router-dom";
import { selectTemporadas } from "../auxiliares/funciones";
import { useState } from "react"

const Temporadas = () => {
  const params = useParams();
  const [temporadaSeleccionada, setTemporadaSeleccionada] = useState(1);
  const temporadas = useFetchTemporadas(params.categoria, params.id, temporadaSeleccionada);
  const numeroTemporadas = useFetchIndividual(params.categoria, params.id);
    const episodios = temporadas.episodes 

  console.log(temporadas)

    const handleChange = (e) => {
        setTemporadaSeleccionada(e.target.value)
    }

  return (
    <div className="temporadas">
      <HeaderDetalle />
      <LinksDetalle />
      <div className="contenedor-select-temporadas">
        <label>
          <select onChange={handleChange} className="select-temporadas" name="select-temporadas">
            {selectTemporadas(numeroTemporadas?.number_of_seasons)}
          </select>
        </label>
      </div>

    </div>
  );
};

export default Temporadas;
