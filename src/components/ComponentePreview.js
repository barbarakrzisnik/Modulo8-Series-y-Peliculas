import Tarjetas from "./Tarjetas";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ComponentePreview = ({ array, titulo, categoria, valoracion }) => {

  return (
    <div className="contenedor-componenete-preview">
      <Link
        className="link-detalle"
        to={`/${categoria}/${valoracion}/pagina/:numeroPagina`}
      >
        {`${titulo}`}
        <FaArrowRight className="icono" />
      </Link>
      <div className="contenedor-tarjetas-componente-preview">
        {array.map((elemento) => (
          <Tarjetas
            key={elemento.id}
            title={elemento.title}
            name={elemento.name}
            imagen={`https://image.tmdb.org/t/p/w300/${elemento.poster_path}`}
            id={elemento.id}
            categoria={categoria}
          />
        ))}
      </div>
    </div>
  );
};

export default ComponentePreview;
