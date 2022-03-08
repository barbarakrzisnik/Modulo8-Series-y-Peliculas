import Tarjetas from "./Tarjetas"

const ComponentePreview = ({array, titulo}) => {
    console.log(array)
    return (
        <div className="lista-peliculas">

      <h2>{titulo}</h2>

      {array.map(elemento => (
        <Tarjetas
        titulo={elemento.title}
        imagen={`https://image.tmdb.org/t/p/w300/${elemento.poster_path}`}
        key={elemento.id}
      />
        ))}
    </div>
    )
}

export default ComponentePreview