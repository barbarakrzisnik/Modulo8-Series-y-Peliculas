import { useParams } from "react-router-dom";
import useFetchBusqueda from "../hooks/useFetchBusqueda";
import ComponenteTarjetasCompleto from "./ComponenteTarjetasCompleto"



const Busqueda = () => {
  const params = useParams();
  const busqueda = useFetchBusqueda(params.inputBusqueda)
  console.log(busqueda)

  return (
    <div className="busqueda">
      <h2>Resultados para {params.inputBusqueda}</h2>
      <ComponenteTarjetasCompleto array={busqueda}/>
    </div>
  );
};

export default Busqueda;
