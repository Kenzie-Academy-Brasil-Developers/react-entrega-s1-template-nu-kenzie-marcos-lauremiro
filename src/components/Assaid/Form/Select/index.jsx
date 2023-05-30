import { Option } from "./Option"

export const Select = ({ name, id}) => {
    return(
        <select name={name} id={id}>
            <Option value={''} text={''}/> 
            <Option value={''} text={''}/> 
        </select>
    )
}