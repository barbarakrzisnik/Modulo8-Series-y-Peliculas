
import { useState, useEffect } from "react"

const useFetchTemporadas = (categoria, infoFetch, temporada) => {
  const [datosFetchTemporadas, setdatosFetchTemporadas] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${categoria}/${infoFetch}/season/${temporada}?api_key=8649accd4d54c4ebc3606e3e22a94d03&language=ES&page=1`)
    .then(res=> res.json())
    .then(data => setdatosFetchTemporadas(data))
  }, [])
  
  return datosFetchTemporadas
}

export default useFetchTemporadas