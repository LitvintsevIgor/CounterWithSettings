import React, {ChangeEvent} from "react";
import s from "../CounterSettingsWindow.module.css";


export type SettingsValuePropsType = {
    changeValueInInput: (e: ChangeEvent<HTMLInputElement>) => void
    label: string
    inputStyle: string
    value: number
}


export const SettingsValue = (props: SettingsValuePropsType) => {
    return (
        <div className={s.setValue}>
            <div>
                {props.label}
            </div>
            <input className={props.inputStyle}
                   type={"number"}
                   value={props.value}
                   onChange={props.changeValueInInput}/>
        </div>
    )
}