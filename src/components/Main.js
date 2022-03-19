import { useState, useEffect } from "react";
import ComponentePreview from "./ComponentePreview";
import useFetch from "../hooks/useFetch"

const Main = () => {
  const peliculas = useFetch("movie", "popular", "data.results")
  const series = useFetch("tv", "popular", "data.results")
  
  return (
    <div>
      <ComponentePreview array={peliculas.slice(0,5)} titulo="Peliculas que son tendencia" categoria="movie"/>
      <ComponentePreview array={series.slice(0,5)} titulo="Series que son tendencia" categoria="tv"/>
    </div>
  );
};

export default Main;
