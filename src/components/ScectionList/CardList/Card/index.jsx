export const Card = ({ listItens, delet}) => {
    return(
        <li>
            <div className="side_left">
                <h2>{listItens.descript}</h2>
                <span> {listItens.type} </span>
            </div>
            <div className="dide_right">
                <span> {listItens.value} </span>
                <button onClick={() => delet(listItens.id)}> Excluir </button>
            </div>
        </li>
    )
}