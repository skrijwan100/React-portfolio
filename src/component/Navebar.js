import React, { useState } from 'react'
import closepic from "../Asset/close.png"
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import mypic from "../Asset/my__pic.png"
import home from"../Asset/home.svg"
import homecolor from"../Asset/homecolor.svg"
import skill from"../Asset/skill.svg"
import skillcolor from"../Asset/skillcolor.svg"
import project from"../Asset/project.svg"
import projrctcolor from"../Asset/projectcolor.svg"
import conatc from"../Asset/contact.svg"
import conatccolor from"../Asset/contactcolor.svg"
import manue from "../Asset/menu.png"
import Card from './Card'
// const navhide=falses 
export default function Navebar({startLoader}) {
    const [navhide,setnavhide]=useState(false)
    const [card,setcard]=useState(false)
    const loctaion = useLocation()
    const handleclick=()=>{
        startLoader()
    }

    const handleclose=()=>{
      setnavhide(true)
    }
    const showclick=()=>{
        setnavhide(false)

    }
    const imgclick=(e)=>{
        e.preventDefault();
        setcard(true)


    }
    return (
        <>
        <div style={{display:card?"block":"none",position:"fixed",left:"10px",top:"220px"}}>

        <Card/>
        </div>
        <div style={{backgroundColor:"#222222"}}>
            <div className={`saidbar ${navhide===true?"hide":""}`}>
                <img onClick={handleclose}  className="close" src={closepic} alt="" />
                <div className="Manue" style={{ display: "flex",flexDirection:"column" }}>
                    <img onClick={imgclick} src={mypic} alt="" style={{width:"100px",height:"100px", borderRadius:"50%",cursor:"pointer"}} />
                    <ul>
                        <Link onClick={loctaion.pathname==="/"?null:handleclick} to="/" className={`${loctaion.pathname === "/" ? "active" : "dactive"}`} > <div style={{display:"flex"}}> <img className='mx-2' src={loctaion.pathname==="/"?homecolor:home}  alt="" style={{width:"25px",height:"25px",marginTop:"50px"}} /> <li  style={{ cursor: "pointer" }} className="home">Home</li></div></Link>


                        <Link onClick={loctaion.pathname==="/project"?null:handleclick} to="/project" className={`${loctaion.pathname === "/project" ? "active" : "dactive"}`}> <div style={{display:"flex"}}><img className='mx-2' src={loctaion.pathname==="/project"?projrctcolor:project}alt="" style={{width:"25px",height:"25px",marginTop:"50px"}} /> <li  style={{ cursor: "pointer" }} className="home">Project</li></div></Link>


                        <Link onClick={loctaion.pathname==="/skill"?null:handleclick} to="/skill" className={`${loctaion.pathname === "/skill" ? "active" : "dactive"}`}><div style={{display:"flex"}}><img className='mx-2' src={loctaion.pathname==="/skill"?skillcolor:skill}alt="" style={{width:"25px",height:"25px",marginTop:"50px"}} /> <li  style={{ cursor: "pointer" }} className="home">Skills</li></div></Link>


                        <Link onClick={loctaion.pathname==="/contact"?null:handleclick} to="/contact" className={`${loctaion.pathname === "/contact" ? "active" : "dactive"}`}> <div style={{display:"flex"}}><img className='mx-2' src={loctaion.pathname==="/contact"?conatc:conatccolor}alt="" style={{width:"25px",height:"25px",marginTop:"50px"}} /><li  style={{ cursor: "pointer" }} className="home">contact me</li></div></Link>
                    </ul>
                </div>
            </div>
        </div>

        <div>
        <div style={{backgroundColor:"#222222"}} className={`newsidebar  ${navhide===true?"show":""} `}>
                <img onClick={showclick} className='manue'  style={{height:"25px",width:"25px", marginTop:"17px", cursor:"pointer"}} src={manue} alt="" />  
                <div className="Manue" style={{ display: "flex",flexDirection:"column" }}>
                <img onClick={imgclick} src={mypic} alt="" style={{width:"60px",height:"60px", borderRadius:"50%",cursor:"pointer"}} />
                    <ul>
                        <Link style={{marginLeft:"70px"}} onClick={loctaion.pathname==="/"?null:handleclick} to="/" className={`${loctaion.pathname === "/" ? "active" : "dactive"}`} > <div style={{display:"flex"}}> <img className='marginleft' src={loctaion.pathname==="/"?homecolor:home}  alt="" style={{width:"25px",height:"25px",marginTop:"50px"}} /></div></Link>


                        <Link style={{marginLeft:"70px"}} onClick={loctaion.pathname==="/project"?null:handleclick} to="/project" className={`${loctaion.pathname === "/project" ? "active" : "dactive"}`}> <div style={{display:"flex"}}><img className='marginleft' src={loctaion.pathname==="/project"?projrctcolor:project}alt="" style={{width:"25px",height:"25px",marginTop:"50px"}} /></div></Link>


                        <Link style={{marginLeft:"70px"}} onClick={loctaion.pathname==="/skill"?null:handleclick} to="/skill" className={`${loctaion.pathname === "/skill" ? "active" : "dactive"}`}><div style={{display:"flex"}}><img className='marginleft' src={loctaion.pathname==="/skill"?skillcolor:skill}alt="" style={{width:"25px",height:"25px",marginTop:"50px"}} /></div></Link>


                        <Link style={{marginLeft:"70px"}} onClick={loctaion.pathname==="/contact"?null:handleclick} to="/contact" className={`${loctaion.pathname === "/contact" ? "active" : "dactive"}`}> <div style={{display:"flex"}}><img className='marginleft' src={loctaion.pathname==="/contact"?conatc:conatccolor}alt="" style={{width:"25px",height:"25px",marginTop:"50px"}} /></div></Link>
                    </ul>
                </div>
            </div>

        </div>
        </>
    )
}
