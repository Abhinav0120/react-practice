import { useCallback, useEffect, useRef, useState } from "react";

export function useStopwatch() {
  const [time, setTime] = useState(0); // seconds
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  const start = useCallback(() => {
    if (intervalRef.current !== null) return;

    startTimeRef.current = Date.now() - time * 1000;

    intervalRef.current = setInterval(() => {
      const elapsedSeconds = Math.floor(
        (Date.now() - startTimeRef.current) / 1000
      );
      setTime(elapsedSeconds);
    }, 1000);
  }, [time]);

  const stop = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);

  const reset = useCallback(() => {
    stop();
    setTime(0);
  }, [stop]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return {
    time,
    isRunning: intervalRef.current !== null,
    start,
    stop,
    reset
  };
}
