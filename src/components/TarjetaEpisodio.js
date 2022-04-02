const TarjetaEpisodio = (
 {temporada,
  episodio,
  nombre,
  resumen,
  imagen,
  id}
) => {
  return (
    <div key={id} className="tarjeta-pisodio">
      <div>
        <img className="imagen-episodio" src={imagen} />
      </div>
      <h3>
        S{temporada}E{episodio}
      </h3>
      <h3>{nombre}</h3>
      <p>{resumen}</p>
    </div>
  );
};

export default TarjetaEpisodio;
