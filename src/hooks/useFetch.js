import { useState, useEffect } from "react";
import { apiKey, url } from "../auxiliares/variables";

// No estan mal los distintos custom hook que hiciste para los fetch, para NamedNodeMap, pero una
// proxima estrategia deberia ser encontrar la manera de resolver todo esto en un solo fetch, porque
// a fin de cuentas todos estos hooks hacen lo mismo. Te invitaría a explorar alguna función auxiliar que
// reciba un parametro y que ella decida como es la url.
// Por ejemplo, si a useFetch le paso como parametro "busqueda" me retorna la url de Busqueda, si le paso "especifico"
// me pasa el de un id en particular.
const useFetch = (categoria, infoFetch, pagina) => {
  const [datosFetch, setDatosFetch] = useState([]);

  useEffect(() => {
    fetch(
      `${url}${categoria}/${infoFetch}?${apiKey}&language=es-AR&page=${pagina}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDatosFetch(data.results);
      });
  }, [pagina, categoria, infoFetch]);

  return datosFetch;
};

export default useFetch;
