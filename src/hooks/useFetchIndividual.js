
import { useState, useEffect } from "react"
import { apiKey, url } from "../auxiliares/variables";

const useFetchIndividual = (categoria, infoFetch) => {
  const [datosFetchIndividual, setdatosFetchIndividual] = useState([])

  useEffect(() => {
    fetch(`${url}${categoria}/${infoFetch}?${apiKey}&language=ES&page=1`)
    .then(res=> res.json())
    .then(data => setdatosFetchIndividual(data))
  })
  
  return datosFetchIndividual
}

export default useFetchIndividual