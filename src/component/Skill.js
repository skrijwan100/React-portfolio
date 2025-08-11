import React from 'react'
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb,SiExpress,SiFlask ,SiMysql,SiRazorpay  } from "react-icons/si";
import { FaNodeJs,FaCss3Alt,FaBootstrap ,FaGitAlt   } from "react-icons/fa";
import { FaReact ,FaHtml5 ,FaPython  } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiGithubBadge } from "react-icons/di";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { SiHiveBlockchain } from "react-icons/si";
import { FaEthereum,FaHardHat  } from "react-icons/fa";
export default function Skill({ navhide }) {
  return (
    <div style={{ width: "100vw", backgroundColor: "#151515" }}>
      <div className="main-box" style={{ marginLeft: navhide ? "80px" : "225px", transition: "margin-left 0.4s ease-in-out",display:"flex",flexDirection:"column"}}>
        <div className="row-1" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"2rem",flexWrap:"wrap",marginTop:"85px"}}>
          <div className="skill-box" style={{ height: "160px", width: "160px"}}>
            <SiMongodb style={{height:"150px",width:"150px"}}/>

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <SiExpress style={{height:"150px",width:"150px"}} />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <FaReact style={{height:"150px",width:"150px"}} />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <FaNodeJs style={{height:"150px",width:"150px"}} />

          </div>
        </div>
        <div className="row-2" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"2rem",flexWrap:"wrap"}}>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <FaHtml5 style={{height:"150px",width:"150px"}} />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <FaCss3Alt  style={{height:"150px",width:"150px"}} />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <IoLogoJavascript style={{height:"150px",width:"150px"}} />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <RiTailwindCssFill style={{height:"150px",width:"150px"}} />

          </div>

        </div>
        <div className="row-3" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"2rem",flexWrap:"wrap"}}>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <FaBootstrap style={{height:"150px",width:"150px"}} />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <DiGithubBadge  style={{height:"150px",width:"150px"}} />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <FaGitAlt  style={{height:"150px",width:"150px"}} />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <AiOutlineThunderbolt style={{height:"150px",width:"150px"}} />
          </div>

        </div>
        <div className="row-4" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"2rem",flexWrap:"wrap"}}>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <FaPython style={{height:"150px",width:"150px"}} />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <SiFlask style={{height:"150px",width:"150px"}} />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <SiMysql style={{height:"150px",width:"150px"}}/>

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
           <svg style={{height:"150px",width:"150px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M329.1 142.9c-62.5-62.5-155.8-62.5-218.3 0s-62.5 163.8 0 226.3s155.8 62.5 218.3 0c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3c-87.5 87.5-221.3 87.5-308.8 0s-87.5-229.3 0-316.8s221.3-87.5 308.8 0c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z"/></svg>
            {/* <img  src={c} alt="" /> */}

          </div>

        </div>
        <div className="row-4" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"2rem",flexWrap:"wrap"}}>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <SiRazorpay style={{height:"150px",width:"150px"}} />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <SiHiveBlockchain style={{height:"150px",width:"150px"}} />

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <FaEthereum style={{height:"150px",width:"150px"}}/>

          </div>
          <div className="skill-box" style={{ height: "160px", width: "160px" }}>
            <FaHardHat style={{height:"150px",width:"150px"}}/>

          </div>

        </div>
      </div>

    </div>
  )
}
