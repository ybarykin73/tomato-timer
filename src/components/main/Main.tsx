import React from "react"
import Circle from "../circle/Circle"
import Timer from "../timer/Timer"
import './Main.scss'

export interface IProps {}

const Main:React.FC<IProps> = (props) => {

    const [progress, setProgress] = React.useState(69)

    return (
        <main className="main">
            <Circle strokeDashoffse={progress} />
            <Timer seconds={progress} />
        </main>
    )
}

export default Main