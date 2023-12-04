import React,{ useState } from "react"
import { useCallback } from "react"
import Count from "./Count"
import Button from "./Button"

const Main=()=>{
    let[age, setAge] = useState(25)
    let[salary, setSalary] = useState(25000)
    let increAge=()=>{setAge(age+1)}
    let increSalary=()=>{setSalary(salary+5000)}
    return(
        <div>
            <Count data={age}>Age</Count>
            <Button Func={increAge}>IncreAge</Button>
            <Count data={salary}>Salary</Count>
            <Button Func={increSalary}>IncreSalary</Button>

        </div>
    )
}
export default Main