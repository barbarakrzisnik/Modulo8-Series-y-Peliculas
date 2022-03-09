import { Link } from "react-router-dom"

const Tarjetas = ({title, name, imagen, id}) => {
    return (
        <Link to={`/pelicula/${id}/:seccion`}>
        <div key={id} className="tarjeta">
            <div>
                <img className="imagen" src={imagen}/>
            </div>
            <h2>{title}{name}</h2>
        </div>
        </Link>
        
    )
}

export default Tarjetas