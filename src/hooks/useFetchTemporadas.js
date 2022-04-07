
import { useState, useEffect } from "react"
import { apiKey, url } from "../auxiliares/variables";

const useFetchTemporadas = (categoria, infoFetch, temporada) => {
  const [datosFetchTemporadas, setdatosFetchTemporadas] = useState([])

  useEffect(() => {
    fetch(`${url}${categoria}/${infoFetch}/season/${temporada}?${apiKey}&language=ES&page=1`)
    .then(res=> res.json())
    .then(data => setdatosFetchTemporadas(data))
  }, [temporada])
  
  return datosFetchTemporadas
}

export default useFetchTemporadas