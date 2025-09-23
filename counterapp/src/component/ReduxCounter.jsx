import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement,reset,addNumber } from '../store/slice/counterSlice'
function ReduxCounter() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)
     

    return (
         <div>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(addNumber(5))}>Add 5</button>
    </div>
    )
}

export default ReduxCounter
