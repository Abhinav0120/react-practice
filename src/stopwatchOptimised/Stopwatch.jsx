import { useStopwatch } from "./useStopwatch";
import TimeDisplay from "./TimeDispaly";

function Stopwatch() {
  const { time, isRunning, start, stop, reset } = useStopwatch();

  return (
    <div>
      <TimeDisplay time={time} />

      <button onClick={start} disabled={isRunning}>
        Start
      </button>

      <button onClick={stop} disabled={!isRunning}>
        Stop
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;
