import React, { useState } from 'react'
import "./cardcss.css"
import closepic from "../Asset/close.png"

export default function Card() {
    const [card,setcard]=useState(true)
    const closeclick=(e)=>{
        console.log("hi")
        alert("hi")

        setcard(false)

    }
  return (
    <div style={{display:card?"block":"none"}}>
      <div class="container noselect">
      
  <div class="canvas">
    <div class="tracker tr-1"></div>
    <div class="tracker tr-2"></div>
    <div class="tracker tr-3"></div>
    <div class="tracker tr-4"></div>
    <div class="tracker tr-5"></div>
    <div class="tracker tr-6"></div>
    <div class="tracker tr-7"></div>
    <div class="tracker tr-8"></div>
    <div class="tracker tr-9"></div>
    <div class="tracker tr-10"></div>
    <div class="tracker tr-11"></div>
    <div class="tracker tr-12"></div>
    <div class="tracker tr-13"></div>
    <div class="tracker tr-14"></div>
    <div class="tracker tr-15"></div>
    <div class="tracker tr-16"></div>
    <div class="tracker tr-17"></div>
    <div class="tracker tr-18"></div>
    <div class="tracker tr-19"></div>
    <div class="tracker tr-20"></div>
    <div class="tracker tr-21"></div>
    <div class="tracker tr-22"></div>
    <div class="tracker tr-23"></div>
    <div class="tracker tr-24"></div>
    <div class="tracker tr-25"></div>
    <div onClick={closeclick} id="card">
    <img  src={closepic} alt="" style={{height:"50px",width:"50px"}}/>
    
      
      

      
    </div>
    HIIIIIIIIIIIII
  </div>
</div>
    </div>
  )
}
