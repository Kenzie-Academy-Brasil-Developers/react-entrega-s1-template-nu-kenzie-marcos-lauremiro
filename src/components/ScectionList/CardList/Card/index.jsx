export const Card = ({ descricao, tipoEntrada, valor, textButton}) => {
    return(
        <li>
            <div className="side_left">
                <h2>{descricao}</h2>
                <span> {tipoEntrada} </span>
            </div>
            <div className="dide_right">
                <span> {valor} </span>
                <button> {textButton} </button>
            </div>
        </li>
    )
}