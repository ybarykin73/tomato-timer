import React from "react";
import './Button.scss'

export interface IProps {
    children: React.ReactNode
    ariaLabel: string
    onClick?:  () => void
}

const Button:React.FC<IProps> = (props) => {
    const  {
        children,
        ariaLabel,
        onClick
    } = props
    return (
        <button
            className="button"
            aria-label={ariaLabel}
            onClick={onClick}
        >
            {children}
        </button>
    )
};

export default Button