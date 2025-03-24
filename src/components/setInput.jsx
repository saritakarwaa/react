import { useState } from "react";

export default function SetInput(){
    const [inputValue,setInputValue]=useState("Hi")

    const onChange=(event)=>{
        const newValue=event.target.value
        setInputValue(newValue)
    }
    return (
        <div>
            <input type="text" placeholder="Write something" value={inputValue} onChange={onChange}/>
            <p>{inputValue}</p>
        </div>
    )
}