import {useState, useRef, useEffect} from 'react';

function Stopwatch() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    handleStop();
    setTimer(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  let min = Math.floor(timer / 60);
  let sec = timer % 60;

  return (
    <>
      <p>Time:{` ${min}m : ${sec}s`} </p>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
}
export default Stopwatch;
