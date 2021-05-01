import React, { useState, useRef } from "react";

export default function useInput(name){

    const [value, setValue] = useState("");

    const inputRef = useRef(null)

    const inputChangeHandler = (e) => {
        setValue(e.target.value)
    }

    return{
        value, onChange : inputChangeHandler, ref : inputRef
    }

}
