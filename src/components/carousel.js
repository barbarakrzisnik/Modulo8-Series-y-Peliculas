import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetchIndividual from "../hooks/useFetchIndividual";
import Tarjetas from "./Tarjetas";
import {Link} from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Carousel = ({ array, titulo, categoria, valoracion }) => {

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <div className="carousel">
      <Link
        className="link-detalle"
        to={`/${categoria}/${valoracion}/pagina/:numeroPagina`}
      >
        {`${titulo}`}
        <FaArrowRight className="icono" />
      </Link>
      <div className="contenedor-carousel">
      <Slider {...settings}>
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
      </Slider>

      </div>
    
    </div>
  );
};

export default Carousel;


