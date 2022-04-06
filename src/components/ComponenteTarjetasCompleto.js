import Tarjetas from "./Tarjetas";

const ComponenteTarjetasCompleto = ({ array, categoria }) => {
  return (
    <div className="contenedor-componente-completo">
    <div className="contenedor-tarjetas-componente-completo">
    {array.map((elemento) => (
        <Tarjetas
          key={elemento.id}
          title={elemento.title}
          name={elemento.name}
          imagen={`https://image.tmdb.org/t/p/w300/${elemento.poster_path}`}
          id={elemento.id}
          categoria={categoria || elemento.media_type}
        />
      ))}
    </div>
      
    </div>
  );
};

export default ComponenteTarjetasCompleto;
