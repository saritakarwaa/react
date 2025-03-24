import { useState } from "react";
export default function StarRating({ totalStars=5}){
    const [rating,setRating]=useState(0) // useState returns an array and we are destructuring it
    // rating=initial state value, setRating= state updater function

    return (
        <div>
            {[...Array(totalStars)].map((_, index) => {  //[...Array(totalStars)] creates an array of length totalStars,  _=throwaway variable
                const currentStar = index + 1; //start numbering from 1
                return (
                    <span
                        key={index}
                        style={{
                            color: currentStar <= rating ? 'gold' : 'gray',
                            cursor: 'pointer',
                            fontSize: '30px'
                        }}
                        onClick={()=>setRating(currentStar)}
                    >
                         ★
                        </span>
                )
            })}
        </div>
    )
}