import React from 'react'
import myimg from '../Asset/my__pic.png'
import manue from "../Asset/menu.png"
import { useLocation,Link } from 'react-router-dom'

export default function Mobilenav() {
  const loctaion =useLocation()
  return (<>
    <div className="mobilenav-show-hide" style={{backgroundColor:"#151515",color:"white",display:"flex",justifyContent:"space-between",width:"100vw"}}>
      <div className="myimg" style={{marginLeft:"27px"}}>
       <img src={myimg} alt="sk rijwan" style={{height:"50px",width:"50px",borderRadius:"50%"}} />
      </div>
      <div className="hambargar">
       <img src={manue} alt="sk rijwan" style={{height:"50px",width:"50px",backgroundColor:"#151515",marginRight:loctaion.pathname==="/"?"-36px":"0px"}} />
       
      </div>
    </div>
   <div className="d" style={{position:"fixed",top:"8px",display:"flex",justifyContent:"flex-end",width:"100vw"}}>
    <div className="nav-box"style={{width:"280px",height:"300px",border:"1px solid red",marginRight:loctaion.pathname==="/"?"-36px":"0px",backgroundColor:"black",color:"white",display:"flex"}}>
      <ul style={{listStyle:"none",gap:"38px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <Link to="/"><li>Home</li></Link>
        <Link to="/project"><li>Project</li></Link>
        <Link to="/skill"><li>Skill</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
    </div>
    </div> 
  </>
  )
}
