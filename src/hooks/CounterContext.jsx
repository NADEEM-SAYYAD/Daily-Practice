import { useReducer,createContext } from "react"
import {counterInc,counterDec,counterReducer} from '../usereducer/CounterReducer'

export const CounterContext = createContext();
const CounterContextProvider = (props) =>{
    const initialState = {
        count : 0
    }
    const [counter,dispatch] = useReducer(counterReducer,initialState);
    return(
        <CounterContext.Provider value={[counter,dispatch,counterInc,counterDec]}>
            {props.children}
        </CounterContext.Provider>
    )
}
export default CounterContextProvider;