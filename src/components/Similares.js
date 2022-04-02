import ComponenteTarjetasCompleto from "./ComponenteTarjetasCompleto";
import LinksDetalle from "./LinksDetalle";
import HeaderDetalle from "./HeaderDetalle";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Similares = () => {
    const params = useParams();
    const [similares, setSimilares] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${params.categoria}/${params.id}/similar?api_key=8649accd4d54c4ebc3606e3e22a94d03&language=ES&page=1`)
        .then(res=> res.json())
        .then(data => setSimilares(data.results))
      }, [])

    console.log(`https://api.themoviedb.org/3/${params.categoria}/${params.id}/similar?api_key=8649accd4d54c4ebc3606e3e22a94d03&language=ES&page=1`)
    console.log(similares)
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