import {useState} from 'react'

const useCustomInput = (val) => {
    const [value,setValue] = useState(val);
    const clear = () =>{
        setValue('')
    }
    const bindValue = {
        value,
        onChange: e =>{
            setValue(e.target.value)
        }
    }
    return [value,bindValue,clear]
}
export default useCustomInput