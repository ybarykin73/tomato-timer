import React from "react"
import Circle from "../circle/Circle"
import Timer from "../timer/Timer"
import Button from "../button/Button"
import './Main.scss'

export interface IProps {}

const Main:React.FC<IProps> = (props) => {

    const WORK_TIME = 1200
    const REST_TIME = 300

    const TIME = {
        0: WORK_TIME,
        1: REST_TIME
    }

    const [progress, setProgress] = React.useState(WORK_TIME)
    const [isStart, setIsStart] = React.useState(false)
    const [time, setTime] = React.useState(false)

    const getTime = (progress) => {

        if (isStart) {
            setProgress(current => current -1)
        }

        if (!progress) {
            setProgress(TIME[Number(!time)])
            setTime(!time)
        }
    }

    const startTiner = () => {
        setIsStart(true)
    }

    React.useLayoutEffect(() => {
        const interval = setInterval(() => getTime(progress), 1000);
        return () => clearInterval(interval);
    }, [progress,isStart])

    return (
        <main className="main">
            <div className="main__wrapper">
                <Circle timeLimit={TIME[Number(time)]} strokeDashoffse={progress} />
                <Timer seconds={progress} />
            </div>
            <Button 
                ariaLabel='Start'
                onClick={startTiner}
            >
              Start
            </Button>
        </main>
              
    )
}

export default Main