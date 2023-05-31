import { useState } from "react"
import { Form } from "./Form"
import { ValorAll } from "./ValorAll"

export const Assid = ({list, setList}) => {
    const sumValue = list.reduce((acc, sum) => {
        if(sum.type == 'entrada'){
            return acc + Number(sum.value)
        }else{
            return acc - Number(sum.value)
        }
    },0)

    return(
        <aside >
            <Form list={list} setList={setList}/>
            <ValorAll value={sumValue} />
        </aside>
    )
}