import { useState, useEffect } from "react";
import ComponentePreview from "./ComponentePreview";

const Main = () => {

  const [peliculas, setPeliculas] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=8649accd4d54c4ebc3606e3e22a94d03&language=es-AR&page=1`
    )
      .then((res) => res.json())
      .then((data) => setPeliculas(data.results));
      console.log(peliculas)
  }, []);

  return (
    <div>
      <ComponentePreview array={peliculas} titulo="Peliculas que son tendencia"/>
    </div>
  );
};

export default Main;
