
import { useState, useEffect } from "react"

const useFetchIndividual = (categoria, infoFetch) => {
  const [datosFetchIndividual, setdatosFetchIndividual] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${categoria}/${infoFetch}?api_key=8649accd4d54c4ebc3606e3e22a94d03&language=es-AR&page=1`)
    .then(res=> res.json())
    .then(data => setdatosFetchIndividual(data))
  }, [])
  
  return datosFetchIndividual
}

export default useFetchIndividual