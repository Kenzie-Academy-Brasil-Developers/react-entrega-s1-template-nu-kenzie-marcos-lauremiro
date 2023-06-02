import { useState } from "react"
import { Form } from "./Form"
import { ValorAll } from "./ValorAll"
import { AsideStaled } from "../../styles/AsaidStyled"

export const Assid = ({list, setList}) => {
    const sumValue = list.reduce((acc, sum) => {
        if(sum.type == 'saida'){
            const sumAll = acc - Number(sum.value)
            return (sumAll.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }))
        }else if(sum.type == 'entrada'){
            const sumAll = acc + Number(sum.value)
            return (sumAll.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }))
        }else if(sum.type == ''){
            const sumAll = acc + Number(sum.value)
            return (sumAll.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }))
        }
    },0)

    return(
        <AsideStaled >
            <Form list={list} setList={setList}/>
            <ValorAll value={sumValue} />
        </AsideStaled>
    )
}