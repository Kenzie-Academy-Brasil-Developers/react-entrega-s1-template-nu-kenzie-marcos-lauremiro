export const ValorAll = ({value}) => {
    return (
        <div className="Valor-total__container">
            <div>
                <h1></h1>
                <span></span>
            </div>
            <div className="valor-total">
                <span>R$ {value}</span>
            </div>
        </div>
    )
}