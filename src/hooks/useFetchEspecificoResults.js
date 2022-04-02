
import { useState, useEffect } from "react"

const useFetchEspecificoResults = (categoria, infoFetch, seccion) => {
    const [datosFetchEspecificoResults, setdatosFetchEspecificoResults] = useState([])
  
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/${categoria}/${infoFetch}/${seccion}?api_key=8649accd4d54c4ebc3606e3e22a94d03&language=es-AR&page=1`)
      .then(res=> res.json())
      .then(data => setdatosFetchEspecificoResults(data.results))
    }, [])
    
    return datosFetchEspecificoResults
  }
  
  export default useFetchEspecificoResults

