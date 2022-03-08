import { useState, useEffect } from "react";
import ComponentePreview from "./ComponentePreview";

const Main = () => {

  const [peliculas, setPeliculas] = useState([]);
  const [series, setSeries] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=8649accd4d54c4ebc3606e3e22a94d03&language=es-AR&page=1`
    )
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=8649accd4d54c4ebc3606e3e22a94d03&language=es-AR&page=1`
    )
      .then((res) => res.json())
      .then((data) => setSeries(data.results));
  }, []);



  return (
    <div>
      <ComponentePreview array={peliculas} titulo="Peliculas que son tendencia"/>
      <ComponentePreview array={series} titulo="Series que son tendencia"/>
    </div>
  );
};

export default Main;
