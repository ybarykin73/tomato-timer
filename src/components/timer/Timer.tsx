import React from "react";
import './Timer.scss'

import getMinutes from "../../utils/getMinutes";
import getSeconds from "../../utils/getSeconds";

export interface IProps {
    seconds: number
}

const Timer:React.FC<IProps> = (props) => {
    const {
        seconds,
    } = props

    let className ='timer'
    if (seconds <=60) {
        className+= ' timer--warning'
    }

    return (
        <div className={className}>{getMinutes(seconds)} : {getSeconds(seconds)}</div>
    )
}

export default Timer