import { Input } from "./Input"
import { Select } from "./Select"
import { ButtonForm } from "./button"
import { Label } from "./label"

export const Form = () => {
    return(
        <form action="">
            <div className="descricao">
                <Label forLabel={''} text={''} />
                <Input type={''} place={''} name={''} id={''}/>
                <p></p>
            </div>
            <div className="valor">
                <Label forLabel={''} text={''} />
                <Input type={''} place={''} name={''} id={''}/>
            </div>
            <div className="tipo_valor">
                <Label forLabel={''} text={''} />
                <Select name={''} id={''}/>
            </div>
            <div className="button_submit">
                <ButtonForm className={''} text={''}/>
            </div>
        </form>
    )
}