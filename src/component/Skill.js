import React from 'react'
import mongodb from "../Asset/skill/mongo-db.png"
import expressjs from "../Asset/skill/expressjs.png"
import react from "../Asset/skill/react.svg"
import nodejs from "../Asset/skill/nodejs.png"
import html from "../Asset/skill/HTML5.png"
import css from "../Asset/skill/css.png"
import js from "../Asset/skill/JavaScript-logo.png"
import github from "../Asset/skill/Octicons-mark-github.svg"
import tailwind from "../Asset/skill/tailwind.png"
import bootstrap from "../Asset/skill/bootstrao.png"
import git from "../Asset/skill/git.webp"
import thander from "../Asset/skill/thender-client.png"
import python from "../Asset/skill/python.jpeg"
import flask from "../Asset/skill/flask.svg"
import mysql from "../Asset/skill/mysql-logo.svg"
import c from "../Asset/skill/c.png"

export default function Skill({ navhide }) {
  return (
    <div style={{ width: "100vw", backgroundColor: "#151515" }}>
      <div className="main-box" style={{ marginLeft: navhide ? "80px" : "225px", transition: "margin-left 0.4s ease-in-out",display:"flex",flexDirection:"column"}}>
        <div className="row-1" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"2rem",flexWrap:"wrap",marginTop:"85px"}}>
          <div className="skill-box" style={{ height: "160px", width: "160px"}}>
            <img style={{height:"150px",width:"150px"}} src={mongodb} alt="" />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <img style={{height:"150px",width:"150px"}} src={expressjs} alt="" />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <img style={{height:"150px",width:"150px"}} src={react} alt="" />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <img style={{height:"150px",width:"150px"}} src={nodejs} alt="" />

          </div>
        </div>
        <div className="row-2" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"2rem",flexWrap:"wrap"}}>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <img style={{height:"150px",width:"150px"}} src={html} alt="" />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <img style={{height:"150px",width:"150px",objectFit:"cover"}} src={css} alt="" />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <img style={{height:"150px",width:"150px"}} src={js} alt="" />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <img style={{height:"150px",width:"150px",objectFit:"contain"}} src={tailwind} alt="" />

          </div>

        </div>
        <div className="row-3" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"2rem",flexWrap:"wrap"}}>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <img style={{height:"150px",width:"150px",objectFit:"contain"}} src={bootstrap} alt="" />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <img style={{height:"150px",width:"150px"}} src={github} alt="" />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <img style={{height:"150px",width:"150px"}} src={git} alt="" />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <img style={{height:"150px",width:"150px"}} src={thander} alt="" />

          </div>

        </div>
        <div className="row-4" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"2rem",flexWrap:"wrap"}}>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <img style={{height:"150px",width:"150px"}} src={python} alt="" />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <img style={{height:"150px",width:"150px"}} src={flask} alt="" />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <img style={{height:"150px",width:"150px"}} src={mysql} alt="" />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <img style={{height:"150px",width:"150px"}} src={c} alt="" />

          </div>

        </div>
      </div>

    </div>
  )
}
