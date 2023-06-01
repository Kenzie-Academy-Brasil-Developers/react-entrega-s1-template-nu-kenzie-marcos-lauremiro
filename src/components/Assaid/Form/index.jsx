import { useState } from "react"
import { Input } from "./Input"
import { Select } from "./Select"
import { ButtonForm } from "./button"
import { Label } from "./label"
import { v4  as  uuidv4 }  from  'uuid';

export const Form = ({list , setList}) => {

    const [descript, setdescript] = useState('')
    const [value, setValue] = useState('')
    const [type, setType] = useState('')

    const submit = (e) => {
        e.preventDefault()

        const data = {descript, value, type, id: uuidv4()}

        setList([...list, data])

        //setList((oldList) => {return [...oldList, data]})

        setType('')
        setValue('')
        setdescript('')
    }

    return(
        <form onSubmit={submit} action="">
            <div className="descricao">
                <Label forLabel={'descri'} text={'Descrição'} />
                <Input type={'text'} place={'Digite aqui sua descrição'} name={''} id={'descri'} value={descript} onChange={(e) => setdescript(e.target.value)}/>
                <p>Ex: Compra de roupas</p>
            </div>
            <div className="valor-form">
                <Label forLabel={'Valor'} text={'Valor {R$}'} />
                <Input type={'number'} place={'0'} name={'valor'} id={'Valor'} value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <div className="tipo_valor">
                <Label forLabel={'Tipo'} text={'Tipo de valor'} />
                <Select name={'tipo-de-valor'} id={'Tipo'} value={type} onChange={(e) => setType(e.target.value)} />
            </div>
            <div className="button_submit">
                <ButtonForm className={''}text={'Inserir Valor'}/>
            </div>
        </form>
    )
}