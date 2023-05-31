import { Option } from "./Option"

export const Select = ({ name, id, valor, ...rest}) => {
    return(
        <select value={valor} name={name} id={id} {...rest}>
            <Option value={'Entrada'} text={'Entrada'}/> 
            <Option value={'Saida'} text={'Saida'}/> 
        </select>
    )
}