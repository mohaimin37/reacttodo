import React from 'react'
import axios from 'axios'

function Todo({text,id,setplay,setupdt,setdata}) {
    const dlt = ()=>{
        axios.delete(`todos/${id}`)
        setplay((prevstate)=>!prevstate)
    }
    const update = ()=>{
        setdata({text,id})
       setupdt(true)

    }
  return (
   <>
   <div className="con">
    <div className="list">
        <p> {text}</p>
        <button onClick={dlt} className='b ab'>delete</button>
        <button onClick={update}  className='b ba'>update</button>
          
           
        </div>

    </div>
   </>
  )
}

export default Todo
