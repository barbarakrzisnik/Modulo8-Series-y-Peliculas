import ComponenteTarjetasCompleto from "./ComponenteTarjetasCompleto";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import { tituloListaCompleta } from "../auxiliares/funciones";


const ListaCompleta = () => {
  const params = useParams();
  const [pagina, setPagina] = useState(1);
  const array = useFetch(
    // por que convertis estos valores a string? 
    `${params.categoria}`,
    `${params.valoracion}`,
    `${pagina}`
  );
  
  const handleChangePrev = () => {
    setPagina(pagina - 1);
  };

  const handleChangeNext = () => {
    setPagina(pagina + 1);
  };

  return (
    <div className="seccion-lista-completa">
      <h2>{tituloListaCompleta(params.categoria, params.valoracion)}</h2>
      <ComponenteTarjetasCompleto array={array} categoria={params.categoria} />
      <div className="paginado">
        <button onClick={handleChangePrev} disabled={pagina === 1}>
          Prev
        </button>
        <p>Página {pagina}</p>
        <button onClick={handleChangeNext}>Next</button>
      </div>
    </div>
  );
};

export default ListaCompleta;
