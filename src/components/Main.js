import useFetch from "../hooks/useFetch"
import Carousel from "./carousel";


const Main = () => {
  const peliculas = useFetch("movie", "popular")
  const series = useFetch("tv", "popular")
  
  return (
    <div className="main">
      <Carousel array={peliculas} titulo="Peliculas que son tendencia" categoria="movie" valoracion="popular" />
      <Carousel array={series} titulo="Series que son tendencia" categoria="tv" valoracion="popular" />
    </div>
  );
};

export default Main;
