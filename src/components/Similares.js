import ComponenteTarjetasCompleto from "./ComponenteTarjetasCompleto";
import LinksDetalle from "./LinksDetalle";
import HeaderDetalle from "./HeaderDetalle";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useFetchEspecificoResults from "../hooks/useFetchEspecificoResults";

const Similares = () => {
    const params = useParams();
    const similares = useFetchEspecificoResults(params.categoria, params.id, "similar");

    return(
        <div className="similares">
            <HeaderDetalle />
            <LinksDetalle />
            <ComponenteTarjetasCompleto 
            array={similares} categoria={params.categoria}/>
        </div>
    )
}

export default Similares