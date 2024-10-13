import React from 'react'
import closepic from "../Asset/close.png"
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Navebar({startLoader}) {
    const loctaion = useLocation()
    const handleclick=()=>{
        startLoader()
    }
    return (
        <div>
            <div className="saidbar">
                <img className="close" src={closepic} alt="" />
                <div className="Manue" style={{ display: "flex" }}>
                    <ul>
                        <Link onClick={loctaion.pathname==="/"?null:handleclick} to="/" className={`${loctaion.pathname === "/" ? "active" : "dactive"}`} > <li  style={{ cursor: "pointer" }} className="home">Home</li></Link>
                        <Link onClick={loctaion.pathname==="/project"?null:handleclick} to="/project" className={`${loctaion.pathname === "/project" ? "active" : "dactive"}`}> <li  style={{ cursor: "pointer" }} className="home">Project</li></Link>
                        <Link onClick={loctaion.pathname==="/skill"?null:handleclick} to="/skill" className={`${loctaion.pathname === "/skill" ? "active" : "dactive"}`}><li  style={{ cursor: "pointer" }} className="home">Skills</li></Link>
                        <Link onClick={loctaion.pathname==="/contact"?null:handleclick} to="/contact" className={`${loctaion.pathname === "/contact" ? "active" : "dactive"}`}><li  style={{ cursor: "pointer" }} className="home">contact me</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}
