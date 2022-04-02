import useFetchTemporadas from "../hooks/useFetchTemporadas";
import useFetchIndividual from "../hooks/useFetchIndividual";
import LinksDetalle from "./LinksDetalle";
import HeaderDetalle from "./HeaderDetalle";
import { useParams, Link } from "react-router-dom";
import { selectTemporadas } from "../auxiliares/funciones";

const Temporadas = () => {
  const params = useParams();
  const temporadas = useFetchTemporadas(params.categoria, params.id, 1);
  const numeroTemporadas = useFetchIndividual(params.categoria, params.id);



  console.log(temporadas);
  console.log(numeroTemporadas?.number_of_seasons)



  return (
    <div className="temporadas">
      <HeaderDetalle />
      <LinksDetalle />
      <div>
        <label>
          <select name="select-personajes">
            {selectTemporadas(numeroTemporadas?.number_of_seasons)}
          </select>
        </label>
      </div>
    </div>
  );
};

export default Temporadas;
