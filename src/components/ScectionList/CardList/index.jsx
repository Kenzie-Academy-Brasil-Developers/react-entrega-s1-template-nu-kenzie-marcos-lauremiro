import { Card } from "./Card"


export const CardList = ({list, setList}) => {

    const delet = (itemId) => {
        setList((list) => {
            return list.filter(listItem => listItem.id !== itemId) 
        })
    }

    return(
        <ul>
           {list.map((item) => {
                console.log(item)
               return <Card listItens={item} key={item.id} delet={delet}/>
           })}
        </ul>
    )
}