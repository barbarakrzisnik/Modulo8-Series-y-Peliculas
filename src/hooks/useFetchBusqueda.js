
import { useState, useEffect } from "react"
import { apiKey, url } from "../auxiliares/variables";

const useFetchBusqueda = (busqueda) => {
    const [datosFetchBusqueda, setdatosFetchBusqueda] = useState([])
  
    useEffect(() => {
      fetch(`${url}search/multi?${apiKey}&language=es-AR&query=${busqueda}&page=1`)
      .then(res=> res.json())
      .then(data => setdatosFetchBusqueda(data.results))
    }, [busqueda])
    
    return datosFetchBusqueda
  }
  
  export default useFetchBusqueda