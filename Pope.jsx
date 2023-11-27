import { useState } from "react"
import axios from "axios"

function Pope({setupdt,data,setplay}) {
  const[input,setinput] = useState(data.text)
  const hd = ()=>{
setupdt(false)
  }
  const updatetodo = ()=>{
    axios.put(`/todos/${data.id}`,{title:input}).then((res)=>{
      console.log(res.data)
      setplay((prevstate)=>!prevstate)
      setupdt(false)

    })
  }
  return (
   <>
   <div className="big">
    <textarea  cols="35" rows="5"  value={input} onChange={(e)=>{
      setinput(e.target.value) 
    }}  ></textarea>
    <button onClick={updatetodo} className="pre sec">update</button>
    <button onClick={hd} className="pre ter">hide</button>
    </div>
   </>
  )
}

export default Pope
