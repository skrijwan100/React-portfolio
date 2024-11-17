import React from 'react'
import { Link } from 'react-router-dom'
import mongodb from "../Asset/skill/mongo-db.png"
import expressjs from "../Asset/skill/expressjs.png"
import react from "../Asset/skill/react.svg"
import nodejs from "../Asset/skill/nodejs.png"
import github from "../Asset/skill/Octicons-mark-github.svg"
import thander from "../Asset/skill/thender-client.png"

export default function Project({ navhide }) {
  return (
    <div style={{ width: "100vw", backgroundColor: "#151515", paddingLeft: "20px", paddingTop: "10px", color: "white" }}>
      <div className="main-project-box" style={{ marginLeft: navhide ? "80px" : "202px", transition: "margin-left 0.4s ease-in-out" }}>
        <div className="project-box">
          <div className="title-box">Medicin shop and Doctor appointment (MERN)</div>
          <div className="vedio-box" style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "18px 0px" }}>
            <div className="vedio" style={{ height: "350px", width: "57vw", border: "1px solid red" }}>
            {/* <video src=""></video> */}
            </div>
          </div>
          <div className="about-box">
            <div className="tech-stack" style={{ display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap", marginBottom: "20px" }}>
              <div className="img-box">

              <img className='img-hover' src={mongodb} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

              <img className='img-hover' src={expressjs} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

              <img className='img-hover' src={react} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
       
              <div className="img-box">

              <img className='img-hover' src={nodejs} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

              <img className='img-hover' src={github} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

              <img className='img-hover' src={thander} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
             
             
              

            </div>
            <div className="link-box" style={{display:"flex",alignItems:"center",justifyContent:"space-around",marginBottom:"20px"}}>
              <div className="github-link">
              <Link to="https://github.com/skrijwan100/medicine-backend-Express-Mongodb-Nodejs-" target='_blank' style={{textDecoration:"none"}}><button className='code-btn'>
                 <span>Soures code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle stroke-width="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                    <path
                      fill="black"
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                    ></path>
                  </svg>
                </button></Link>

              </div>
              <div className="depoly-link">
              <Link to="" style={{textDecoration:"none"}}><button className='code-btn'>
                 <span>Depoly Link</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle stroke-width="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                    <path
                      fill="black"
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                    ></path>
                  </svg>
                </button></Link>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
