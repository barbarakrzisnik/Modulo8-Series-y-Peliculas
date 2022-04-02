
import { useState, useEffect } from "react"

const useFetchRedes = (categoria, infoFetch) => {
    const [datosFetchRedes, setdatosFetchRedes] = useState([])
  
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/${categoria}/${infoFetch}/external_ids?api_key=8649accd4d54c4ebc3606e3e22a94d03&language=es-AR&page=1`)
      .then(res=> res.json())
      .then(data => setdatosFetchRedes(data))
    }, [])
    
    return datosFetchRedes
  }
  
  export default useFetchRedes




