import { useParams } from "react-router-dom";
import useFetchBusqueda from "../hooks/useFetchBusqueda";
import ComponenteTarjetasCompleto from "./ComponenteTarjetasCompleto"



const Busqueda = () => {
  const params = useParams();
  const busqueda = useFetchBusqueda(params.inputBusqueda)

  return (
    <div className="busqueda">
      <h2>Resultados para {params.inputBusqueda}</h2>
      <ComponenteTarjetasCompleto array={busqueda} categoria={"tv"}/>
    </div>
  );
};

export default Busqueda;
