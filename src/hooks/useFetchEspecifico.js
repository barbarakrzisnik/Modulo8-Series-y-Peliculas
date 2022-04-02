
import { useState, useEffect } from "react"

const useFetchEspecifico = (categoria, infoFetch, seccion) => {
    const [datosFetchEspecifico, setdatosFetchEspecifico] = useState([])
  
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/${categoria}/${infoFetch}/${seccion}?api_key=8649accd4d54c4ebc3606e3e22a94d03&language=es-AR&page=1`)
      .then(res=> res.json())
      .then(data => setdatosFetchEspecifico(data))
    }, [])
    
    return datosFetchEspecifico
  }
  
  export default useFetchEspecifico




