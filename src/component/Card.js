import React from 'react'
import "./cardcss.css"
import mypic from "../Asset/my__pic.png"
import { TypeAnimation } from 'react-type-animation';

export default function Card() {
  return (
    <div>
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
          <div id="card">
          <img  src={mypic} alt="" style={{width:"200px",height:"200px", borderRadius:"10px",cursor:"pointer",marginTop:"10px"}} />
          {/* <div style={{fontSize:"20px",fontWeight:"600",padding:"24px",color:"linen"}}>FULL STACK WEB DEVOLOPER</div> */}
          <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'FULL STACK DEVELOPER',
            1500, // wait 1s before replacing "Mice" with "Hamsters"
            'MERN STACK DEVELOPER',
            1500,
            'REACT DEVELOPER',
            1500,
            'FLASK DEVELOPER',
            1500,
          ]}
          wrapper="div"
          style={{fontSize:"22px",fontWeight:"800",padding:"24px",color:"#00ffef",textShadow:"0px 20px 22px rgb(0 255 215)"}}
          speed={50}
          repeat={Infinity} />
        </div>
      </div>
    </div>
    </div>
  )
}
