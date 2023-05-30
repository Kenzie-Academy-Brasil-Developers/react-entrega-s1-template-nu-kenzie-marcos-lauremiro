export const Input = ({ type, place, name, id}) => {
    return (
        <input placeholder = {place} type = { type } name = { name } id = {id} />
    )
}