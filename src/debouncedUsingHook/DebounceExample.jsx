import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

function DebounceExample(){
    const [input, setInput] = useState()
    const debouncedValue = useDebounce(input, 500)

    useEffect(() => {
        console.log('api called custom hook debounced', debouncedValue)
    }, [debouncedValue])

    return <div>
        <>Debounce Hook example</>
        <input
            type="text"
            placeholder="Debounce"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
    </div>
}

export default DebounceExample;