const Tarjetas = ({titulo, imagen, id}) => {
    return (
        <div className="tarjeta" key={id}>
            <div>
                <img className="imagen" src={imagen}/>
            </div>
            <h2>{titulo}</h2>
        </div>
    )
}

export default Tarjetas