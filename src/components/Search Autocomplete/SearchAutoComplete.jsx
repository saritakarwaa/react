import { useEffect, useState } from "react"
import Suggestions from "./Suggestions"

export default function SearchAutoComplete(){
    const [loading,setLoading]=useState(false)
    const [users,setUsers]=useState([])
    const [error,setError]=useState(null)
    const [searchParams,setSearchParams]=useState('')
    const [ShowDropdown,setShowDropdown]=useState(false)
    const [filteredUsers,setFilteredUsers]=useState([])

    function handleChange(event){
        const query=event.target.value.toLowerCase()
        setSearchParams(query)
        if(query.length>1){
            const filteredData=users && users && users.length? users.filter((item)=>item.toLowerCase().indexOf(query)>-1):[]
            setFilteredUsers(filteredData)
            setShowDropdown(true)
        }
        else{
            setShowDropdown(false)
        }
    }

    function handleClick(event){
        console.log(event.target.innerText)
        setShowDropdown(false)
        setSearchParams(event.target.innerText)
        setFilteredUsers([])
    }

    async function fetchListofUsers(){
        try{
            const response=await fetch('https://dummyjson.com/users')
            const data=await response.json()
            console.log(data)
            if(data && data.users && data.users.length){
                setUsers(data.users.map((userItems)=>userItems.firstName))
                setLoading(false)
                setError(null)
            }
        }
        catch{
            console.log(error)
            setError(error)
        }
        
    }

    useEffect(()=>{
        fetchListofUsers()
    },[])

    console.log(users,filteredUsers)

    return <div class='search-autocomplete-container'>
        {
            loading ? <h1>:Loading data...</h1> :
            <input value={searchParams} name="search-users" placeholder="Search Users here..." onChange={handleChange} />
        }
        
        { ShowDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />}
    </div>
}