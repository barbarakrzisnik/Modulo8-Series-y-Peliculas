import ComponentePreview from "./ComponentePreview";
import useFetch from "../hooks/useFetch"

const Pelicula = () => {
    const peliculasPopulares = useFetch("movie", "popular")
    const peliculasMejoresCriticas = useFetch("movie", "top_rated")
    const peliculasEstrenar = useFetch("movie", "upcoming")
    const peliculasCine = useFetch("movie", "now_playing")

    return (
        <div>
            <ComponentePreview array={peliculasPopulares.slice(0,5)} titulo="Peliculas Populares" categoria="movie"/>
            <ComponentePreview array={peliculasMejoresCriticas.slice(0,5)} titulo="Peliculas con mejores criticas" categoria="movie"/>
            <ComponentePreview array={peliculasEstrenar.slice(0,5)} titulo="Peliculas a estrenar" categoria="movie"/>
            <ComponentePreview array={peliculasCine.slice(0,5)} titulo="Peliculas en el cine" categoria="movie"/>


        </div>
        
    )
}

export default Pelicula