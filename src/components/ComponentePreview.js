import Tarjetas from "./Tarjetas";

const ComponentePreview = ({ array, titulo }) => {
  return (
    <div className="contenedor-componenete-preview">
      <h2>{titulo}</h2>
    <div className="contenedor-tarjetas-componente-preview">
    {array.map((elemento) => (
        <Tarjetas
          titulo={elemento.title}
          imagen={`https://image.tmdb.org/t/p/w300/${elemento.poster_path}`}
          id={elemento.id}
        />
      ))}
    </div>
      
    </div>
  );
};

export default ComponentePreview;
