
import { useState, useEffect } from "react"
import { apiKey, url } from "../auxiliares/variables";

const useFetch = (categoria, infoFetch, pagina) => {
  const [datosFetch, setDatosFetch] = useState([])


  useEffect(() => {
    fetch(`${url}${categoria}/${infoFetch}?${apiKey}&language=es-AR&page=${pagina}`)
    .then(res=> res.json())
    .then(data => {
      setDatosFetch(data.results);
      setTotalPages(data.total_pages)
    })
  }, [pagina])
  
  return datosFetch
}

export default useFetch