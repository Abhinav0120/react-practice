import { useState } from "react"

function Calculator() {
    const [value, setValue] = useState('');
    const operator = ['+', '-', '*', '/']

    const handleClick = (val) =>{
        setValue((prev) => {
           let lastChar = prev.slice(-1)
           if(operator.includes(val)){
            if(prev=== '') return prev
            if(operator.includes(lastChar)) return
           }
            return prev+val
        });
    }

    const handleClear = () => {
        setValue('')
    }

    const calculate = () => {
        try{
            setValue(String(eval(value)))
            
        } catch(error){
            console.log('eval', error)
            setValue(error)
        }
      
    }

    return(
        <div>
            <input value={value} readOnly/>

            <div>
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('+')}>+</button>
            </div>

            <div>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>-</button>
            </div>

            <div>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('*')}>*</button>
            </div>

            <div>
                <button onClick={() => handleClear()}>C</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => calculate()}>=</button>
                <button onClick={() => handleClick('/')}>/</button>
            </div>

        </div>
    )
}

export default Calculator