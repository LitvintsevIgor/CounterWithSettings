import s from "../CounterSettingsWindow/CounterSettingsWindow.module.css";
import React, {ChangeEvent} from "react";

export type CounterSettingsWindowPropsType = {
    maxValue: number
    startValue: number
    changeStartValueInInput: (e: ChangeEvent<HTMLInputElement>) => void
    changeMaxValueInInput: (e: ChangeEvent<HTMLInputElement>) => void
    setSettingsCallback: () => void
}

export const CounterSettingsWindow = (props: CounterSettingsWindowPropsType) => {

    return (
        <div className={s.counterWrapper}>
            <div className={s.windowWithSettings}>
                <div className={s.setValue}>
                    <div>
                        max value:
                    </div>
                    <input className={s.inputClass}
                           type={"number"}
                           value={props.maxValue}
                           onChange={props.changeMaxValueInInput}/>
                </div>
                <div className={s.setValue}>
                    <div>
                        start value:
                    </div>
                    <input className={s.inputClass}
                           type="number"
                           value={props.startValue}
                           onChange={props.changeStartValueInInput}
                    />
                </div>
            </div>
            <div className={s.btnWrapper}>
                <button className={s.btn}
                        onClick={props.setSettingsCallback}
                >set</button>
            </div>
        </div>
    )
}
