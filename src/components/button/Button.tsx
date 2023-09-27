import React from "react";
import './Button.scss'

export interface IProps {
    children: React.ReactNode
    ariaLabel: string
}

const Button:React.FC<IProps> = (props) => {
    const  {
        children,
        ariaLabel
    } = props
    return (
        <button
            className="button"
            aria-label={ariaLabel}
        >
            {children}
        </button>
    )
};

export default Button