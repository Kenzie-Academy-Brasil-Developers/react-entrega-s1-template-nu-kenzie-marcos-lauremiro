import { Option } from "./Option"

export const Select = ({ name, id, valor}) => {
    return(
        <select value={valor} name={name} id={id}>
            <Option value={'Entrada'} text={'Entrada'}/> 
            <Option value={'Saida'} text={'Saida'}/> 
        </select>
    )
}