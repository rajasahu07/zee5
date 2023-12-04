import axios from "axios"
import React,{ useEffect , useState } from "react"

const FetchData = () => {
    let[content , setContent] =useState("")
    let[id, setId] = useState(0)
    let[btn, setBtn] = useState(0)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btn}`)
        .then ((resp)=>{
            // console.log("GOT THE DATA")
            // console.log(resp);
            setContent(resp.data)
        })
        .catch(()=>{
            console.log("DIDNT GET THE DATA TRY AGAIN")
        })
    },[btn])

    let idData=(e)=>{
        setId(e.target.value)
    }

    let formData=()=>{
        setBtn(id)
    }
    return (
        <div>
         {/* {data.map((x)=>{
            return(
                <div>
                  {x.title}
                </div>
            )
        })} */}
        
        <input type="text" value={id} onChange={idData} /><br />
        <button onClick={formData}>SUBMIT</button>
        {/* <h1>{content.id}</h1> */}
        <h1>{content.title}</h1>

        </div>
    )
}
export default FetchData