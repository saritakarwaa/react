import { useEffect, useState } from "react";

const images=[
    "https://plus.unsplash.com/premium_photo-1704546974012-78acde0d4905?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1542641734-3b824eaabad0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1542641734-3b824eaabad0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1541753236788-b0ac1fc5009d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D"
]

export default function ImageSlider(){
    const [currentIndex,setCurrentIndex]=useState(0)

    useEffect(()=>{
        const interval=setInterval(()=>{
            setCurrentIndex((prevIndex)=>
            prevIndex===images.length-1?0:prevIndex+1 )
        },3000)
        return ()=> clearInterval(interval)
    },[])
}