const Tarjetas = ({titulo, imagen, id}) => {
    return (
        <div key={id}>
            <img src={imagen}/>
            <h2>{titulo}</h2>
        </div>
    )
}

export default Tarjetas