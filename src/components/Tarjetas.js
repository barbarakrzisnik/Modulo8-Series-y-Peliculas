import { Link } from "react-router-dom"

const Tarjetas = ({title, name, imagen, id, categoria}) => {

    return (
        <Link className="link-tarjeta" to={`/${categoria}/${id}/info/:temporada`}>
        <div key={id} className="tarjeta">
            <div>
                <img className="imagen" src={imagen} alt="Poster de pelicula"/>
            </div>
            <h3>{title ? title : name}</h3>
        </div>
        </Link>
        
    )
}

export default Tarjetas