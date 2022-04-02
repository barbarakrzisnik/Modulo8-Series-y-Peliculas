const TarjetaEpisodio = ({
  temporada,
  episodio,
  nombre,
  resumen,
  imagen,
  id,
}) => {
  return (
    <div key={id} className="tarjeta-episodio">
      <div>
        <img className="imagen-tarjeta-episodio" src={imagen} />
      </div>
      <div className="contenedor-titulo-tarjeta-episodio">
        <h3 className="numero-tarjeta-episodio">
          S{temporada}E{episodio}
        </h3>
        <h3>{nombre}</h3>
      </div>
      <div className="texto-tarjeta-episodio">
        <p>{resumen}</p>
      </div>
    </div>
  );
};

export default TarjetaEpisodio;
