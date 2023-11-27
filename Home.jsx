import React, { useEffect, useState } from 'react'
import Todo from "./Todo"
import axios from "axios"
import Pope from './Pope'


function Home() {
  const[get,setget] = useState([])
  const[input,setinput] = useState("")
  const[play,setplay] = useState(true)
  const [updt,setupdt] = useState(false)
  const [data,setdata] = useState({})
  useEffect(()=>{
    axios.get("/todos").then((res)=>{
      setget(res.data)
    }).catch((err)=>{
      console.log("kya bhai kya kar rahe ho ")
    })
  },[play])
 
  const add = ()=>{
    if(!input){
      alert("plz add something")
    }
    else{
      axios.post("/todos",{title:input}).then((res)=>{
        console.log(res.data)
        setinput("")
        setplay((prevstate)=>!prevstate)
  
        
      })
    }
   

  }
  return (
  <>
  <h1 className='firsth1'>todo app</h1>
  <div className="box">
    <input type="text" className='firstinput' placeholder='enter a todo...' value={input} onChange={(e)=>{
setinput(e.target.value)    }} 

/>

    <button onClick={add} className='add'>add</button>
    </div>
    {
get.toReversed().map((elem=>
<Todo key={elem._id} text = {elem.title} 
     id = {elem._id} setplay = {setplay}
     setupdt={setupdt}
     setdata = {setdata}

/>
))
    }
    {
      ((updt ===true)?<Pope setupdt ={setupdt}  data ={data}
      setplay = {setplay}/>:<></>)

    }

  </>
  )
}

export default Home

