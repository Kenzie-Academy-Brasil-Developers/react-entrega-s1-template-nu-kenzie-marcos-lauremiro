import { Option } from "./Option"

export const Select = ({ name, id, valor, ...rest}) => {
    return(
        <select className="text-1-style input-1-style" value={valor} name={name} id={id} {...rest}>
            <Option value={'entrada'} text={'Entrada'}/> 
            <Option value={'saida'} text={'Saida'}/> 
        </select>
    )
}