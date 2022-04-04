import ComponentePreview from "./ComponentePreview";
import useFetch from "../hooks/useFetch"
import { useParams, Link } from "react-router-dom";

const Pelicula = () => {
    const peliculasPopulares = useFetch("movie", "popular")
    const peliculasMejoresCriticas = useFetch("movie", "top_rated")
    const peliculasEstrenar = useFetch("movie", "upcoming")
    const peliculasCine = useFetch("movie", "now_playing")

    return (
        <div>
            <ComponentePreview array={peliculasPopulares.slice(0,5)} titulo="Peliculas Populares" categoria="movie" valoracion="popular" />
            <ComponentePreview array={peliculasMejoresCriticas.slice(0,5)} titulo="Peliculas con mejores criticas" categoria="movie" valoracion="top_rated"/>
            <ComponentePreview array={peliculasEstrenar.slice(0,5)} titulo="Peliculas a estrenar" categoria="movie" valoracion="upcoming"/>
            <ComponentePreview array={peliculasCine.slice(0,5)} titulo="Peliculas en el cine" categoria="movie" valoracion="now_playing"/>
        </div>
        
    )
}

export default Pelicula