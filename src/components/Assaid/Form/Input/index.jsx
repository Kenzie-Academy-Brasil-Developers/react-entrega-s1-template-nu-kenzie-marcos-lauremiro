export const Input = ({ type, place, name, id, valor, ...rest}) => {
    return (
        <input placeholder = {place} type = { type } name = { name } id = {id} value={valor} {...rest}/>
    )
}