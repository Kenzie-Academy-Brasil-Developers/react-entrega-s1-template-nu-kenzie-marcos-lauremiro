import { CardList } from "./CardList"

export const SectionCards = ({list, setList}) => {
    return(
        <section>
            <CardList list={list} setList={setList}/>
        </section>
    )
}