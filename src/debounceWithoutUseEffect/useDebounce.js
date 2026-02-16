import { useRef } from "react"

function useDebounce(callback, delay){
    const timerRef = useRef(null)
    const debounce = (...args) => {
        if(timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }
    return debounce
}

export default useDebounce;