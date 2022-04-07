import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaHome, FaVideo, FaTv, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [valorDelInput, setValorDelInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/busqueda/${valorDelInput}/pagina/:numeroPagina`);
  };

  const handleChange = (e) => {
    setValorDelInput(e.target.value);
  };

  return (
    <div className="navbar">
      <nav>
        <ul>
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
          <li className="navbar-busqueda">
            <FaSearch className="icono" />
            <form onSubmit={handleSubmit}>
              <div>
                <label>
                <input className="navbar-input-texto" type="text" placeholder="Buscar" onChange={handleChange}></input>
                </label>
                <label>
                <input className="navbar-boton-buscar" type="submit" value="Buscar"></input>
                </label>
              </div>
            </form>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
