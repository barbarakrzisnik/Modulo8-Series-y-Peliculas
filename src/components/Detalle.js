import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import useFetchIndividual from "../hooks/useFetchIndividual"

const Detalle = () => {

    const params = useParams()
    const datos = useFetchIndividual(params.categoria, params.id)
    console.log(datos)
 
    return(
        <div>
            <h1>{datos.title}{datos.name}</h1>
        </div>
    )
}

export default Detalle

