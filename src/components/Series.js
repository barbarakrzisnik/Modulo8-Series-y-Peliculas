import ComponentePreview from "./ComponentePreview";
import useFetch from "../hooks/useFetch"

const Series = () => {
    const seriesPopulares = useFetch("tv", "popular")
    const seriesMejoresCriticas = useFetch("tv", "top_rated")
    const seriesAlAire = useFetch("tv", "airing_today")

    return (
        <div>
            <ComponentePreview array={seriesPopulares.slice(0,5)} titulo="Series Populares" categoria="tv" valoracion="popular" />
            <ComponentePreview array={seriesMejoresCriticas.slice(0,5)} titulo="Series con mejores criticas" categoria="tv" valoracion="top_rated"/>
            <ComponentePreview array={seriesAlAire.slice(0,5)} titulo="Series al aire" categoria="tv" valoracion="airing_today"/>
        </div>
    )
}

export default Series