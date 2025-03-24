//useEffect is just a function that will be called whenever the page renders

import {useEffect, useState} from "react"
import axios from "axios"

export default function EffectHook(){

    const [data,setData]=useState("")
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response)=>{ 
                setData(response.data[0].email)
                console.log("API WAS CALLED")
            })
    },[]) //[]= to make the api call only once, not everytime we reload the page
//     [] (Dependency Array) → Controls when the effect runs:
// Empty Array ([]) → Runs only once when the component mounts.
// No Array → Runs on every render.
// [dependency] → Runs when the dependency value changes.

    return <div>Hello {data}</div>
}