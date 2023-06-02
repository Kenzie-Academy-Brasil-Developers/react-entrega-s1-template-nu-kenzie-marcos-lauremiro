import { useState } from "react"
import { Form } from "./Form"
import { ValorAll } from "./ValorAll"
import { AsideStaled } from "../../styles/AsaidStyled"

export const Assid = ({list, setList}) => {
    const sumValue = list.reduce((acc, sum) => {
        if(sum.type == 'saida'){
            return acc - Number(sum.value)
        }else if(sum.type == 'entrada'){
            return acc + Number(sum.value)
        }else if(sum.type == ''){
            return acc + Number(sum.value)
        }
    },0)

    return(
        <AsideStaled >
            <Form list={list} setList={setList}/>
            <ValorAll value={sumValue} />
        </AsideStaled>
    )
}