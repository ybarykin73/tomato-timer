import React from "react"
import Circle from "../circle/Circle"
import Timer from "../timer/Timer"
import './Main.scss'

export interface IProps {}

const Main:React.FC<IProps> = (props) => {

    const WORK_TIME = 60
    const REST_TIME = 300

    const [progress, setProgress] = React.useState(WORK_TIME)
    const getTime = (progress) => {
        if (!progress) {
            setProgress(REST_TIME)
        }
        setProgress(current => current -1)
    }

    React.useEffect(() => {
        const interval = setInterval(() => getTime(progress), 1000);
        return () => clearInterval(interval);
    }, [progress])

    return (
        <main className="main">
            <Circle timeLimi={WORK_TIME} strokeDashoffse={progress} />
            <Timer seconds={progress} />
        </main>
    )
}

export default Main