import React, { useState } from 'react'
import myimg from '../Asset/skrijwan.jpeg'
import manue from "../Asset/menu.png"
import closebtn from "../Asset/close.png"
import { useLocation,Link } from 'react-router-dom'
export default function Mobilenav({startLoader}) {
  const loctaion =useLocation()
  const [nav,setnav]=useState(false)
  // const [shownav,setshownav]=useState(false)
  const handlelink=()=>{
    startLoader()
    setnav(false)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })
  }
  const handleclick=(e)=>{
    e.preventDefault();
    setnav(false)
;
  }
  const handleshow=(e)=>{
    e.preventDefault()
    setnav(true)
    // setshownav(true)
  }
  return (<>
    <div className="mobilenav-show-hide" style={{backgroundColor:"#151515",color:"white",display:"flex",justifyContent:"space-between",width:"100vw"}}>
      <div className="myimg" style={{marginLeft:"27px",marginTop:"15px"}}>
        <img  src={manue} onClick={handleshow} alt="sk rijwan" style={{height:"50px",width:"50px",backgroundColor:"#151515",marginRight:loctaion.pathname==="/"?"-36px":"0px",display:nav?"none":"block"}} />
      </div>
      <div onClick={handleshow} className="hambargar" style={{marginTop:"15px",backgroundColor:"#151515",marginRight:"10px"}}> 
       <img onClick={handleshow} src={myimg} alt="sk rijwan" style={{height:"50px",width:"50px",borderRadius:"50%",backgroundColor:"#151515"}} />
       
      </div>
    </div>
   <div className={`${nav?'show-nav':'hide-nav'}`}  style={{position:"fixed",top:"8px",display:"flex",justifyContent:"flex-end",width:"100vw",transform: "translateX(284px)",zIndex:"11"}}>
    <div className="nav-box"style={{width:"280px",height:"300px",marginRight:loctaion.pathname==="/"?"-36px":"0px",backgroundColor:"black",color:"white",display:"flex"}}>
    <img onClick={handleclick} src={closebtn} alt="" style={{height:"40px",width:"40px",fontSize:"25px"}} />
      <ul style={{listStyle:"none",gap:"30px",fontSize:"28px",display:"flex",flexDirection:"column",justifyContent:"center",}}>
        <Link onClick={handlelink}  style={{textDecoration:"none",color:loctaion.pathname==="/"?"#fa5c0e":"white"}} to="/"><li >Home</li></Link>
        <Link onClick={handlelink}  style={{textDecoration:"none",color:loctaion.pathname==="/project"?"#fa5c0e":"white"}} to="/project"><li>Project</li></Link>
        <Link onClick={handlelink}  style={{textDecoration:"none",color:loctaion.pathname==="/skill"?"#fa5c0e":"white"}} to="/skill"><li>Skill</li></Link>
        <Link onClick={handlelink}  style={{textDecoration:"none",color:loctaion.pathname==="/contact"?"#fa5c0e":"white"}} to="/contact"><li>Contact</li></Link>
      </ul>
    </div>
    </div> 
  </>
  )
}
