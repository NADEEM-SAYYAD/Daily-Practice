import React,{useContext} from 'react'
import {CounterContext} from '../hooks/CounterContext'
const Counter2 = () => {
    const data = useContext(CounterContext);
    const [counter,dispatch,incHandler,decHandler] = data;
    return (
        <div>
            <h2>Counter 2: {counter.count}</h2>
            <button onClick={e=>dispatch(incHandler())}>Increment</button>
            <button onClick={e=>dispatch(decHandler())}>Decrement</button>
        </div>
    )
}
export default Counter2;