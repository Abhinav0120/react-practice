import { useState } from "react"
import useDebounce from "./useDebounce"

function DebounceExample(){

    const [input, setInput] = useState('')
    const debounce = useDebounce((value)=> console.log("Api call without useEffect ", value), 500) 

    const handleChange = (e) => {
        setInput(e.target.value)
        debounce(e.target.value)
    }

    return <div>
        <p> debounce without useEffect</p>
        <input
            type="text"
            placeholder="debounce whithout useEffect"
            value={input}
            onChange={handleChange}
        />
    </div>
}
export default DebounceExample