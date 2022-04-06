
import { useState, useEffect } from "react"

const useFetch = (categoria, infoFetch, pagina) => {
  const [datosFetch, setDatosFetch] = useState([])
  const [totalPages, setTotalPages] = useState([])


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${categoria}/${infoFetch}?api_key=8649accd4d54c4ebc3606e3e22a94d03&language=es-AR&page=${pagina}`)
    .then(res=> res.json())
    .then(data => {
      setDatosFetch(data.results);
      setTotalPages(data.total_pages)
    })
  }, [pagina])
  
  return datosFetch
}

export default useFetch