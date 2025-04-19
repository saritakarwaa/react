import { useEffect, useState } from "react";


export default function UseLocalStorage(key,defaultValue){
    const [value,setValue]=useState(()=>{
        let currentValue;
        try{
            currentValue=JSON.parse(localStorage.getItem(key)) || String(defaultValue)
        }
        catch(error){
            console.log(error)
            currentValue=defaultValue
        }
        return currentValue
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    })
    return [value,setValue]
}