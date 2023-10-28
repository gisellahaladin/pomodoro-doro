import { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GradientSVG from "./GradientSVG";

function Timer() {
    console.log("timer function");
    const [isRunning, setIsRunning] = useState(false);
    const [seconds, setSeconds] = useState(1500); //25min
    const idCSS = "hello";
    // const percentage = 66;

    const handleStart = () => {
        console.log("start button clicked");
        setIsRunning(true);
    };

    const handlePause = () => {
        console.log("pause button clicked");
        setIsRunning(false);
    };

    const handleReStart = () => {
        console.log("restart button clicked");
        setIsRunning(false);
        setSeconds(1500);
    };

    useEffect(() => {
        let timer;

        if (isRunning && seconds > 0) {
            timer = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        } else if (seconds === 0) {
            clearInterval(timer);
        }

        // useEffect(() => {
        //     const timer = setInterval(() => {
        //         if (seconds > 0) {
        //             setSeconds(seconds - 1);
        //         } else {
        //             clearInterval(timer);
        //         }
        //     }, 1000);

        return () => {
            console.log("Timer component unmounted");
            clearInterval(timer);
        };
    }, [isRunning, seconds]);

    const percentage = ((1500 - seconds) / 1500) * 100; // Calculate the progress as a percentage

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${
            remainingSeconds < 10 ? "0" : ""
        }${remainingSeconds}`;
    };

    console.log("Timer component rendered", seconds);

    return (
        <div className="flex content-center items-center justify-center flex-col">
            <h1 className="p-4 text-6xl mb-2 font-medium">Pomodoro-Doro</h1>
            <div className="flex items-center justify-center flex-col">
                <div className="w-80 h-80 m-4">
                    <GradientSVG />
                    <CircularProgressbar
                        strokeWidth={8}
                        value={percentage}
                        text={formatTime(seconds)} // Display remaining time
                        styles={{
                            path: { stroke: `url(#${idCSS})`, height: "100%" },
                            trail: {
                                stroke: "#2e2e2e",
                            },
                        }}
                    />
                </div>
                <div className="mt-4">
                    {/* <p className="text-slate-400 p-4 text-4xl">
                        {formatTime(seconds)}
                    </p> */}
                    <button
                        onClick={handleStart}
                        className="p-4 border-4 w-32 border-sky-300 rounded-2xl m-2 text-2xl"
                    >
                        Start
                    </button>
                    <button
                        onClick={handlePause}
                        className="p-4 border-4 w-32 border-sky-300 rounded-2xl m-2 text-2xl"
                    >
                        Pause
                    </button>
                    <button
                        onClick={handleReStart}
                        className="p-4 border-4 w-34 border-sky-300 rounded-2xl m-2 text-2xl text-center"
                    >
                        Restart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Timer;
