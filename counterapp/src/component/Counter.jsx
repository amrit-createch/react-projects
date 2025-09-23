import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
function Counter() {
    const dispatch = useDispatch()
    const [count,setCount] = useState(0)
    const [input,setInput] = useState('')
    const handleIncrement = ()=>{
        setCount(prev => prev+1)
    }
    const handleDecrement = ()=>{
         setCount(prev => prev > 0 ? prev-1 : 0)
    }

    const handleReset =()=> {
        setCount(0)
    }

    const addInputnumber= ()=>{
        const num = parseInt(input)
         if (!isNaN(num)) {
            setCount(prev => prev + num)
        }
        setInput('')
    }
     
    useEffect(() => {
        const handleKeyDown = (e) => {
        if(e.key === 'ArrowUp') handleIncrement()
        else if(e.key === 'ArrowDown') handleDecrement()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
        window.removeEventListener('keydown', handleKeyDown)
    }
},[input])

    return (
        <div>
            <h3>count:{count}</h3>
            <div style={{margin:'10px',gap:'10px'}}>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
                <button onClick={addInputnumber} style={{gap:"10px",margin:'10px'}}>add number</button>
            </div>
            <div style={{
                display:'flex',
                justifyItems:'center',
                alignItems:'center',
                gap:'10px'
            }}>
                <button onClick={handleIncrement} style={{backgroundColor:'green'}}>increment</button>
                <span onClick={handleDecrement} style={{backgroundColor:'red'}}><button>decrement</button></span>
               
            </div>
             <button onClick={handleReset} style={{margin:'10px',backgroundColor:'grey'}}>reset</button>
             
        </div>
    )
}

export default Counter
