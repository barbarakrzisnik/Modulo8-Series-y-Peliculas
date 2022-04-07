
import { useState, useEffect } from "react"
import { apiKey, url } from "../auxiliares/variables";

const useFetchEspecificoResults = (categoria, infoFetch, seccion) => {
    const [datosFetchEspecificoResults, setdatosFetchEspecificoResults] = useState([])
  
    useEffect(() => {
      fetch(`${url}${categoria}/${infoFetch}/${seccion}?${apiKey}&language=es-AR&page=1`)
      .then(res=> res.json())
      .then(data => setdatosFetchEspecificoResults(data.results))
    }, [])
    
    return datosFetchEspecificoResults
  }
  
  export default useFetchEspecificoResults

