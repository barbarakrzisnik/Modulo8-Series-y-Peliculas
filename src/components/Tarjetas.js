import { Link, useParams } from "react-router-dom"

const Tarjetas = ({title, name, imagen, id, categoria}) => {

    return (
        <Link to={`/${categoria}/${id}/:seccion/:temporada`}>
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