import React, { useMemo , useState } from "react"
const Perform =()=>{
   let[count1, setCount1]=useState(0)
   let[count2, setCount2]=useState(0)

   let incre1=()=>{
       setCount1(count1+1)
   }
   let incre2=()=>{
       setCount2(count2+1)
   }

     let Even=useMemo(()=>{
     let i=0
     while(i<10000 ) i++
     return count1%2==0
     },[count1])
return (
   <div>
       {count1}
       <button onClick={incre1}>Count1 increment</button> <br />
       {Even?"EVEN":"ODD"} <br />
       {count2}
       <button onClick={incre2}>Count2 increment</button>
   </div>
   )
}

export default Perform