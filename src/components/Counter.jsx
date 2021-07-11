import React,{useState,useContext,useMemo} from 'react'
import {CounterContext} from '../hooks/CounterContext'

const UseMemoDummyComp = () =>{
    const [name,setName] = useState("Nadeem");
    const myName = useMemo(()=>{
        console.log('here 123')
        return name;
    },[name]);
    return(
        <h3>Hello {myName}</h3>
    )
}
const Counter = () => {
    const data = useContext(CounterContext);
    const [counter,dispatch,incHandler,decHandler] = data;
    return (
        <div>
            <UseMemoDummyComp />
            <h2>Counter : {counter.count}</h2>
            <button onClick={e=>dispatch(incHandler())}>Increment</button>
            <button onClick={e=>dispatch(decHandler())}>Decrement</button>
        </div>
    )
}
export default Counter;