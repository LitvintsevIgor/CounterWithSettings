import s from "../Buttons.module.css";
import React from "react";

export type OneButtonType = {
    buttonTitle: string
    disabled: boolean
    buttonClick: () => void

}

export const OneButton = (props: OneButtonType ) => {
    return (
        <button className={s.btn}
                disabled={props.disabled}
                onClick={props.buttonClick}
        >{props.buttonTitle}</button>
    )
}