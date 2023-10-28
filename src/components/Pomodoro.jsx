import { useState } from "react";
import Timer from "./Timer";

function Pomodoro() {
    const [isRunning, setIsRunning] = useState(false);
    const [seconds, setSeconds] = useState(1500); //25min

    const startTimer = () => {
        console.log("start timer working");
        setIsRunning(true);
    };

    const pauseTimer = () => {
        console.log("pause timer working");
        setIsRunning(false);
    };

    const restartTimer = () => {
        console.log("restart timer working");
        setIsRunning(false);
        setSeconds(1500);
    };

    return (
        <div className="text-xl p-12">
            <Timer
                isRunning={isRunning}
                seconds={seconds}
                startTimer={startTimer}
                pauseTimer={pauseTimer}
                restartTimer={restartTimer}
            />
        </div>
    );
}

export default Pomodoro;
