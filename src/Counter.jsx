import { useCallback, useState } from "react";

function Counter() {

    const [counter, setCounter] = useState(0)

    const increament = useCallback(() => {
        setCounter( (prev) => prev + 1 );
    }, []) 

    const decreament = useCallback(() => {
            setCounter( (prev) => prev - 1);
        }, []) 

    const reset = useCallback(() => {
        setCounter(0)
    }, []) 
 
  return (
    <div>   
        <h3>Counter: {counter}</h3>
        <button onClick={increament}>Increament</button>
        <button onClick={decreament}>Decreament</button>
        <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
