import React, { useEffect, useState } from 'react'

const SideEffect = () => {
    let [count, setCount ]= useState(0)
    let [count1, setCount1 ]= useState(5)

    useEffect(()=>{
        console.log("Hello baby i am useEffect");
    },[count,count1])
    
    let incre=()=>{
        setCount(count+1)
    }
    
    let incre1=()=>{
        setCount1(count1+5)

    }
   return(
    <div>
        {count}
        <button onClick={incre}>Increment</button>
        {count1}
        <button onClick={incre1}>Increment</button>
    </div>
   )

}
export default SideEffect