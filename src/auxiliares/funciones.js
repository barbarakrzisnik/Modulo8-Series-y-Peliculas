export const selectTemporadas = (temporadas) => {
  const options = [];
  // excelente
  for (let i = 0; i < temporadas; i++) {
    options.push(
      <option className="opcion-temporada" value={i + 1}>
        Temporada {i + 1}
      </option>
    );
  }
  return options;
};

// Aca podrias usar if anidados:
// if categoria === "movie" --> ahi dentro todas las subcategorias de valoracion
// else if categoria ==="tv" --> ahi dentro todas las subcategorias de valoracion 
export const tituloListaCompleta = (categoria, valoracion) => {
  if (categoria === "movie" && valoracion === "popular") {
    return "Peliculas Populares";
  } else if (categoria === "movie" && valoracion === "top_rated") {
    return "Peliculas con mejores criticas";
  } else if (categoria === "movie" && valoracion === "upcoming") {
    return "Peliculas a estrenar";
  } else if (categoria === "movie" && valoracion === "now_playing") {
    return "Peliculas en el cine";
  } else if (categoria === "tv" && valoracion === "popular") {
    return "Series Populares";
  } else if (categoria === "tv" && valoracion === "top_rated") {
    return "Series con mejores criticas";
  } else if (categoria === "tv" && valoracion === "airing_today") {
    return "Series al aire";
  } else {
    return "No se encontro";
  }
};
