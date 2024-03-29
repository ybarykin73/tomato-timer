import React from "react";

export interface IProps {
    strokeDashoffse: number
    timeLimit: number
}

const Circle:React.FC<IProps> = (props) => {
    const {
        timeLimit,
        strokeDashoffse = 0
    } = props
    const strokeDasharray = 314

    return (
        <div className="circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 120 120" >  
                <circle cx="60" cy="60" r="50" fill="none" stroke="#E1E1E1" strokeWidth="8"/>
                <circle cx="60" cy="60" r="50" transform="rotate(-90 60 60)" fill="none" strokeDashoffset={Math.floor(strokeDasharray * strokeDashoffse/timeLimit)} strokeDasharray={strokeDasharray} stroke="dodgerblue" strokeWidth="8" ></circle>
            </svg>  
        </div>
    )
}

export default Circle