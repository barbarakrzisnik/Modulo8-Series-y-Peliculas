import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaHome, FaVideo, FaTv, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [valorDelInput, setValorDelInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // los dos puntos antes de la variable sirven para router en las rutas, pero aqui estamos usando js
    // este codigo hace que cuando envie la busqueda la url sea literalmente /busqueda/hulk/pagina/:numeroPagina
    // en lugar de la pagina 1, 2, etc. Deberias poner ${numeroPagina} aqui
    navigate(`/busqueda/${valorDelInput}/pagina/:numeroPagina`);
  };

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  return (
    <div className="navbar">
      <nav>
        <ul >
          <div className="responsive-navbar">
            <Link className="navbar-link" to="/">
              <li>
                <FaHome className="icono" />
              </li>
            </Link>
            <Link className="navbar-link" to="/pelicula">
              <li>
                <FaVideo className="icono" />
              </li>
            </Link>
            <Link className="navbar-link" to="/tv">
              <li>
                <FaTv className="icono" />
              </li>
            </Link>
          </div>

          <div className="responsive-navbar">
            <li className="navbar-busqueda">
              <FaSearch className="icono" />
              <form onSubmit={handleSubmit}>
                <div>
                  <label>
                    {/* un label vacio es lo mismo que nada en terminos de accesibilidad */}
                    <input
                      className="navbar-input-texto"
                      type="text"
                      placeholder="Buscar"
                      onChange={handleChange}
                    ></input>
                  </label>
                  <label>
                    <input
                      className="navbar-boton-buscar"
                      type="submit"
                      value="Buscar"
                    ></input>
                  </label>
                </div>
              </form>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
