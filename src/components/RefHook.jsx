import { useEffect, useRef, useState} from "react"; //for dom manipulation,handling focus, animations and transitions

export default function RefHook(){
    //let [number,setNumber]=useState(0)  
    //const ref=useRef(0) //returns an object that has one property of current
    //console.log(ref)
    const inputRef1=useRef(null)
    const inputRef2=useRef(null)
    const inputRef3=useRef(null)
  
    useEffect(()=>{
        console.log('component rendered')
    
    })
    
    function handleClick1(){
        //setNumber(n=>n+1)
       
        // ref.current++
        // console.log(ref.current)
        inputRef1.current.focus() //the component isn't rerendering
        inputRef1.current.style.backgroundColor='yellow'
        inputRef2.current.style.backgroundColor=''
        inputRef3.current.style.backgroundColor=''
    }

    function handleClick2(){
        inputRef2.current.focus()
        inputRef1.current.style.backgroundColor=''
        inputRef2.current.style.backgroundColor='yellow'
        inputRef3.current.style.backgroundColor=''
    }

    function handleClick3(){
        inputRef3.current.focus() 
        inputRef1.current.style.backgroundColor=''
        inputRef2.current.style.backgroundColor=''
        inputRef3.current.style.backgroundColor='yellow'
    }

    return (
        <div>
            <button onClick={handleClick1}>Click me1
            </button>
            <input ref={inputRef1} type="text" />

            <button onClick={handleClick2}>Click me2
            </button>
            <input ref={inputRef2} type="text" />

            <button onClick={handleClick3}>Click me3
            </button>
            <input ref={inputRef3} type="text" />
        </div>
    )
}        


//useState=re-renders the component when the state value changes
//useRef= does not cause re-renders when its value changes. When you want a component to 
//          "remember" some information, but you don't want that information to trigger new renders.