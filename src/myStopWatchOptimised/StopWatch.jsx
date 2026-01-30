import ShowTime from "./ShowTime";
import useStopwatch from "./useStopwatch";

function Stopwatch(){
    
    const {time, start, stop, reset} = useStopwatch()
    
    return (
        <div>
            <ShowTime time={time}/>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Stopwatch;