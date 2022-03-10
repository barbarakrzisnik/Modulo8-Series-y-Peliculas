import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const Detalle = () => {

    const params = useParams()
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        fetch(
          `https://api.themoviedb.org/3/${params.categoria}/${params.id}?api_key=8649accd4d54c4ebc3606e3e22a94d03&language=es-AR&page=1`
         
        )
          .then((res) => res.json())
          .then((data) => setDatos(data));
      }, []);
  
      console.log (datos)
    return(
        <div>
            <h1>{datos.title}{datos.name}</h1>
        </div>
    )
}

export default Detalle



// `https://api.themoviedb.org/3/${params.categoria}/${params.id}?api_key=8649accd4d54c4ebc3606e3e22a94d03&language=es-AR&page=1`