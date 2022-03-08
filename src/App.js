import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Series from "./components/Series";
import Pelicula from "./components/Pelicula";
import Busqueda from "./components/Busqueda";
import Main from "./components/Main";
import Error404 from "./components/Error404";

import "./App.scss"

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={ <Main />}></Route>
        <Route path="/pelicula/:peliculaId/:seccion" element={<Pelicula/>}></Route>
        <Route path="/pelicula/:valoracion/pagina/:numeroPagina" element={<Pelicula/>}></Route>
        <Route path="/tv/:seriesId/:seccion/:temporada" element={<Series/>}></Route>
        <Route path="/tv/:valoracion/pagina/:numeroPagina" element={<Series/>}></Route>
        {/* <Route path="/busqueda/:inputBusqueda" element={<Busqueda/>}></Route> */}
        <Route path="/busqueda/:inputBusqueda/pagina/:numeroPagina" element={<Busqueda/>}></Route>
        <Route path="*" element={<Error404 />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;