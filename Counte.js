import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incermentByAmount } from './CounterSlice';

export function Counte(){
    const count = useSelector((state) => state.conter.value);

    const dispatch = useDispatch();

   const [amount, setAmount] = useState(0);

   return {
    <div>
    <h1>Redux Counter </h1>
    <p>Count: {count}</p>
    <button onClick={() => dispatch(increment())}>Increment</button>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
    <button onClick={() => dispatch(reset())}>Reset</button>
    
    <div>
    </div>
   }

}



