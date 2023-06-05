export const ValorAll = ({value}) => {
    return (
        <div className="Valor-total__container">
            {
                value == 0 ? <div></div> : <div className="title_value">
                <h1 className="title-2-style">Valor total:</h1>
                <span className="text-2-style">O valor se refere ao saldo</span>
                </div>
            }
            {
            value == 0 ? <div></div> : <div className="valor-total">
                <span className="text-1-style">{value.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })}</span>
            </div>
            }
        </div>
    )
}