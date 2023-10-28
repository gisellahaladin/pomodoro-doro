function TimerControls({ onStart, onPause, onReStart }) {
    const handleStart = () => {
        console.log("start button clicked");
        onStart();
    };

    const handlePause = () => {
        console.log("pause button clicked");
        onPause();
    };

    const handleReStart = () => {
        console.log("restart button clicked");
        onReStart();
    };

    return (
        <div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleReStart}>Restart</button>
        </div>
    );
}

export default TimerControls;
