import React from "react";
import './Timer.scss'

export interface IProps {

}

const Timer:React.FC<IProps> = () => {
    return (
        <div className="timer">19:18</div>
    )
}

export default Timer