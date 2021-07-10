import React,{useContext} from 'react'
import {CounterContext} from '../hooks/CounterContext'

const Counter = () => {
    const data = useContext(CounterContext);
    const [counter,dispatch,incHandler,decHandler] = data;
    return (
        <div>
            <h2>Counter : {counter.count}</h2>
            <button onClick={e=>dispatch(incHandler())}>Increment</button>
            <button onClick={e=>dispatch(decHandler())}>Decrement</button>
        </div>
    )
}
export default Counter;