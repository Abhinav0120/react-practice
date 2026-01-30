import {useState, useRef, useEffect} from 'react';

function useStopwatch(){

    const [time, setTime] = useState(0)
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    console.log('mytime', time);
    const start = () =>{
        if(intervalRef.current !== null) return

        startTimeRef.current = Date.now() - time * 1000

        console.log('startTimeRef.current',startTimeRef.current);
        intervalRef.current = setInterval(() => {
            let elapsedSeconds = Math.floor((Date.now() - startTimeRef.current) / 1000 )
            console.log('elapsedSeconds', elapsedSeconds)
            setTime(elapsedSeconds);
        }, 1000)
    }

    const stop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null
    }

    const reset = () => {
        stop()
        setTime(0)
    }

    useEffect(()=> {
        return () => clearInterval(intervalRef.current);
    }, [])
 
    return {
        time,
        start,
        stop,
        reset
    }

}

export default useStopwatch;