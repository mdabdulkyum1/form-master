import { useState } from "react"

const useInputState = (defaultValue=null) => {
    const [value, setValue] = useState(defaultValue);

    const onChange = val => {
        setValue(val.target.value);
    }

    return {
       value, onChange
    }
}

export { useInputState }