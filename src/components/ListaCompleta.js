import ComponenteTarjetasCompleto from "./ComponenteTarjetasCompleto"
import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"


const ListaCompleta = () => {
    const params = useParams()

    const array = useFetch(`${params.categoria}`, `${params.valoracion}`)



    return (
        <div className="seccion-lista-completa">
            <ComponenteTarjetasCompleto array={array} categoria={params.categoria} />

        </div>
        
    )
}

export default ListaCompleta