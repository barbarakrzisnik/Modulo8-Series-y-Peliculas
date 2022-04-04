
import { useState, useEffect } from "react"

const useFetchBusqueda = (busqueda) => {
    const [datosFetchBusqueda, setdatosFetchBusqueda] = useState([])
  
    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/search/multi?api_key=8649accd4d54c4ebc3606e3e22a94d03&language=es-AR&query=${busqueda}&page=1`)
      .then(res=> res.json())
      .then(data => setdatosFetchBusqueda(data.results))
    }, [busqueda])
    
    return datosFetchBusqueda
  }
  
  export default useFetchBusqueda