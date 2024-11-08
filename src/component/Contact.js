import React from 'react'

export default function Contact({navhide}) {
  return (
    <div style={{width:"100vw",backgroundColor:"#151515"}}>
      <div className="main-box"style={{ marginLeft: navhide ? "88px" : "220px", transition: "margin-left 0.4s ease-in-out",display:"flex",alignItems:"center",justifyContent:"center",height:"100vh" }}>

      <div className="main-contact-box" style={{height:"500px",width:"400px",border:"1px solid red",borderRadius:"20px"}}>

      </div>
      </div>
    </div>
  )
}
