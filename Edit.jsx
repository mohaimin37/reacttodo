import React, { useEffect, useState } from 'react'
import axios from "axios"

function Edit() {
  const[data,setdata] = useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((res)=>{
      setdata(res.data)

    })
    .catch((err)=>{
      console.log('something is')
    })
  
  },[])
  return (
    <>
{
data.map((elem=>
<div key={elem.id}>
<p>{elem.name}</p>
</div>
))

}
    </>
  )
}

export default Edit

