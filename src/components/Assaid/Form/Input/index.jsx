export const Input = ({ type, place, name, id, valor, ...rest}) => {
    return (
        <input required className="text-1-style input-1-style" placeholder = {place} type = { type } name = { name } id = {id} value={valor} {...rest}/>
    )
}