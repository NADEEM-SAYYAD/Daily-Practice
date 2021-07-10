import React,{useContext} from 'react'
import { NameContext } from '../hooks/NameContext'
const Displayer = () => {
    const name = useContext(NameContext);
    return (
        <div>
            <hr/>
            <h2>My Name is :{name}</h2>
        </div>
    )
}
export default Displayer