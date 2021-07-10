import { useState,createContext } from "react";
export const NameContext = createContext();

const NameContextProvider = (props) =>{
    const [name,setName] = useState("Nadeem")
    return(
        <NameContext.Provider value={name}>
            {props.children}
        </NameContext.Provider>
    )
}
export default NameContextProvider


