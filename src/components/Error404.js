import imagen from "./404.svg";

const Error404 = () => {
  return (
    <div className="error404">
        
      <div className="imagen">
        <img src={imagen} alt="Sitio no encontrado"></img>
      </div>
      <h3>Ups! No pudimos encontrar la página</h3>
    </div>
  );
};

export default Error404;
