
import { useState, useEffect } from "react"
import { apiKey, url } from "../auxiliares/variables";

const useFetchEspecifico = (categoria, infoFetch, seccion) => {
    const [datosFetchEspecifico, setdatosFetchEspecifico] = useState([])
  
    useEffect(() => {
      fetch(`${url}${categoria}/${infoFetch}/${seccion}?${apiKey}&language=es-AR&page=1`)
      .then(res=> res.json())
      .then(data => setdatosFetchEspecifico(data))
    })
    
    return datosFetchEspecifico
  }
  
  export default useFetchEspecifico




