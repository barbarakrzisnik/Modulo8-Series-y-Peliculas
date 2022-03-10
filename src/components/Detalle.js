import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"

const Detalle = () => {

    const params = useParams()

    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=8649accd4d54c4ebc3606e3e22a94d03&language=es-AR&page=1`
        )
          .then((res) => res.json())
          .then((data) => setPeliculas(data.results));
      }, []);
  
    console.log (peliculas)
    return(
        <div>
            <h1>detalle</h1>
        </div>
    )
}

export default Detalle