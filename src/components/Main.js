import ComponentePreview from "./ComponentePreview";
import useFetch from "../hooks/useFetch"
import Carousel from "./Carousel";


const Main = () => {
  const peliculas = useFetch("movie", "popular")
  const series = useFetch("tv", "popular")
  
  return (
    <div className="main">
      <Carousel array={peliculas.slice(0,10)} titulo="Peliculas que son tendencia" categoria="movie" valoracion="popular" />
      <ComponentePreview array={peliculas.slice(0,5)} titulo="Peliculas que son tendencia" categoria="movie" valoracion="popular"/>
      <ComponentePreview array={series.slice(0,5)} titulo="Series que son tendencia" categoria="tv" valoracion="popular"/>
    </div>
  );
};

export default Main;
