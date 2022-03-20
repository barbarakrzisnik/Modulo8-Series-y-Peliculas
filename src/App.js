import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Series from "./components/Series";
import Pelicula from "./components/Pelicula";
import Reparto from "./components/Reparto"
import Video from "./components/Video"
import Similares from "./components/Similares"
import Busqueda from "./components/Busqueda";
import Detalle from "./components/Detalle";
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
        <Route path="/pelicula" element={<Pelicula />}></Route>
        <Route path="/tv" element={<Series/>}></Route>
        <Route path="/:categoria/:id/info/:temporada" element={<Detalle/>}></Route>
        <Route path="/:categoria/:id/reparto/:temporada" element={<Reparto/>}></Route>
        <Route path="/:categoria/:id/video/:temporada" element={<Video/>}></Route>
        <Route path="/:categoria/:id/similares/:temporada" element={<Similares/>}></Route>
        <Route path="/:categoria/:valoracion/pagina/:numeroPagina" element={<Pelicula/>}></Route>
        <Route path="/busqueda/:inputBusqueda/pagina/:numeroPagina" element={<Busqueda/>}></Route>
        <Route path="*" element={<Error404 />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;