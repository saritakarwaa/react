import { useRef} from "react"; //for dom manipulation

export default function RefHook(){
    const inputRef=useRef(null)

    const onClick=()=>{
        inputRef.current.value=""
    }
    return (
        <div>
            <input type="text" placeholder="Ex..." ref={inputRef} />
            <button onClick={onClick}>Change Name</button>
        </div>
    )
}        