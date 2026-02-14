import { useEffect, useState } from "react";

function Debounce(){
    const [input, setInput] = useState('');
    const [debInput, setDebInput] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebInput(input);
        }, 500)

        return () => clearTimeout(timeout);
    }, [input])

    useEffect(()=> {
        console.log("Api call", debInput)
    }, [debInput])

    return (<div>
        <p>Debounce normal way</p>
        <input
            type="text"
            placeholder="Debounced Input"   
            value={input}
            onChange={(e)=> setInput(e.target.value)}
        />
    </div>)
}

export default Debounce;