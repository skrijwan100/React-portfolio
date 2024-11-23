import React from 'react'
import { Link } from 'react-router-dom'
import mongodb from "../Asset/skill/mongo-db.png"
import expressjs from "../Asset/skill/expressjs.png"
import react from "../Asset/skill/react.svg"
import nodejs from "../Asset/skill/nodejs.png"
import github from "../Asset/skill/Octicons-mark-github.svg"
import thander from "../Asset/skill/thender-client.png"
import html from "../Asset/skill/HTML5.png"
import css from "../Asset/skill/css.png"
import js from "../Asset/skill/JavaScript-logo.png"
import python from "../Asset/skill/python.jpeg"
import flask from "../Asset/skill/flask.svg"
import bootstrap from "../Asset/skill/bootstrao.png"
import madrasavedio from "../Asset/ssorvedio/madrasavedio.mp4"
import hackthon from "../Asset/ssorvedio/hackatho.mp4"
import lifeline from "../Asset/ssorvedio/LIFE_line_vedio.mp4"
import textutils from "../Asset/ssorvedio/Text_utilites.mp4"
import passwordmanger from "../Asset/ssorvedio/Password.mp4"
import tictactoe from "../Asset/ssorvedio/TIC_TAC_TOE.mp4"
import todo from "../Asset/ssorvedio/TODO.mp4"
import login from "../Asset/ssorvedio/Login_form.mp4"
import pahari from "../Asset/ssorvedio/PAHARI_HOME.mp4"
import playmusic from "../Asset/ssorvedio/PLAY_MUSIC.mp4"
import noteboox from "../Asset/ssorvedio/notebook.png"

export default function Project({ navhide }) {
  return (
    <div style={{ width: "100vw", backgroundColor: "#151515", paddingLeft: "20px", paddingTop: "10px", color: "white" }}>
      <div className="main-project-box" style={{ marginLeft: navhide ? "80px" : "202px", transition: "margin-left 0.4s ease-in-out" }}>

        <div className="project-box">
          <div className="title-box">Medicin shop and Doctor appointment (MERN)</div>
          <div className="vedio-box" style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "18px 0px" }}>
            <div className="vedio" style={{ height: "350px", width: "57vw", border: "1px solid #fa5c0e", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <video className='vedio-src-box' controls style={{ height: "350px", width: "57vw" }}>
                <source src={lifeline} type="video/webm" />
              </video>
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
            <div className="link-box" style={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginBottom: "20px" }}>
              <div className="github-link">
                <Link to="https://github.com/skrijwan100/medicine-backend-Express-Mongodb-Nodejs-" target='_blank' style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Soures code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                    <path
                      fill="black"
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                    ></path>
                  </svg>
                </button></Link>

              </div>
              <div className="depoly-link">
                <Link to="" style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Depoly Link</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
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
        <div className="project-box">
          <div className="title-box">Parsonal Notebook (MERN)</div>
          <div className="vedio-box" style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "18px 0px" }}>
            <div className="vedio" style={{ height: "350px", width: "57vw", border: "1px solid #fa5c0e" }}>
              <img className='vedio-src-box' src={noteboox} style={{ height: "350px", width: "57vw" }} alt="" />
              {/* <video  controls >
                <source src={noteboox} type="video/webm" />
              </video> */}
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
            <div className="link-box" style={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginBottom: "20px" }}>
              <div className="github-link">
                <Link to="https://github.com/skrijwan100/notebook-MERN-" target='_blank' style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Soures code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                    <path
                      fill="black"
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                    ></path>
                  </svg>
                </button></Link>

              </div>
              <div className="depoly-link">
                <Link to="https://notebook-mern-pi8g.vercel.app/login" style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Depoly Link</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
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
        <div className="project-box">
          <div className="title-box">Rupsona Iqra Madrasa MIssion (React) </div>
          <div className="vedio-box" style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "18px 0px" }}>
            <div className="vedio" style={{ height: "350px", width: "57vw", border: "1px solid #fa5c0e", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <video className='vedio-src-box' controls style={{ height: "350px", width: "57vw" }}>
                <source src={madrasavedio} type="video/webm" />
              </video>
            </div>
          </div>
          <div className="about-box">
            <div className="tech-stack" style={{ display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap", marginBottom: "20px" }}>
              <div className="img-box">

                <img className='img-hover' src={html} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={css} alt="" style={{ height: "55px", width: "55px", objectFit: "cover" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={js} alt="" style={{ height: "55px", width: "55px" }} />
              </div>

              <div className="img-box">

                <img className='img-hover' src={react} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={github} alt="" style={{ height: "55px", width: "55px" }} />
              </div>





            </div>
            <div className="link-box" style={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginBottom: "20px" }}>
              <div className="github-link">
                <Link to="https://github.com/skrijwan100/RUPSONA-IQRA-MADRASA-MISSON-web" target='_blank' style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Soures code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                    <path
                      fill="black"
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                    ></path>
                  </svg>
                </button></Link>

              </div>
              <div className="depoly-link">
                <Link to="https://rupsonaiqramadrasamission.in/" style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Depoly Link</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
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
        <div className="project-box">
          <div className="title-box">Hackthon project secure 4th position (React) </div>
          <div className="vedio-box" style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "18px 0px" }}>
            <div className="vedio" style={{ height: "350px", width: "57vw", border: "1px solid #fa5c0e", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <video className='vedio-src-box' controls style={{ height: "340px", width: "57vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <source src={hackthon} type="video/webm" />
              </video>
            </div>
          </div>
          <div className="about-box">
            <div className="tech-stack" style={{ display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap", marginBottom: "20px" }}>
              <div className="img-box">

                <img className='img-hover' src={html} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={css} alt="" style={{ height: "55px", width: "55px", objectFit: "cover" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={js} alt="" style={{ height: "55px", width: "55px" }} />
              </div>

              <div className="img-box">

                <img className='img-hover' src={react} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={github} alt="" style={{ height: "55px", width: "55px" }} />
              </div>





            </div>
            <div className="link-box" style={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginBottom: "20px" }}>
              <div className="github-link">
                <Link to="https://github.com/skrijwan100/-BWU-Hackathon-Project-" target='_blank' style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Soures code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                    <path
                      fill="black"
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                    ></path>
                  </svg>
                </button></Link>

              </div>
              <div className="depoly-link">
                <Link to="https://bw-hackathon-undefined.netlify.app/" style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Depoly Link</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
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
        <div className="project-box">
          <div className="title-box">Textutils (React) </div>
          <div className="vedio-box" style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "18px 0px" }}>
            <div className="vedio" style={{ height: "350px", width: "57vw", border: "1px solid #fa5c0e", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <video className='vedio-src-box' controls style={{ height: "340px", width: "57vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <source src={textutils} type="video/webm" />
              </video>
            </div>
          </div>
          <div className="about-box">
            <div className="tech-stack" style={{ display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap", marginBottom: "20px" }}>
              <div className="img-box">

                <img className='img-hover' src={html} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={css} alt="" style={{ height: "55px", width: "55px", objectFit: "cover" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={js} alt="" style={{ height: "55px", width: "55px" }} />
              </div>

              <div className="img-box">

                <img className='img-hover' src={react} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={github} alt="" style={{ height: "55px", width: "55px" }} />
              </div>





            </div>
            <div className="link-box" style={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginBottom: "20px" }}>
              <div className="github-link">
                <Link to="https://github.com/skrijwan100/textutils-react-webapp" target='_blank' style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Soures code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                    <path
                      fill="black"
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                    ></path>
                  </svg>
                </button></Link>

              </div>
              <div className="depoly-link">
                <Link to="https://66b7895d18f5a5541487ccff--text-utiles-rijwan.netlify.app/" style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Depoly Link</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
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
        <div className="project-box">
          <div className="title-box"> Todo-web-app(Flask) </div>
          <div className="vedio-box" style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "18px 0px" }}>
            <div className="vedio" style={{ height: "350px", width: "57vw", border: "1px solid #fa5c0e", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <video className='vedio-src-box' controls style={{ height: "340px", width: "57vw" }}>
                <source src={todo} type="video/webm" />
              </video>
            </div>
          </div>
          <div className="about-box">
            <div className="tech-stack" style={{ display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap", marginBottom: "20px" }}>
              <div className="img-box">

                <img className='img-hover' src={html} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={css} alt="" style={{ height: "55px", width: "55px", objectFit: "cover" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={js} alt="" style={{ height: "55px", width: "55px" }} />
              </div>

              <div className="img-box">

                <img className='img-hover' src={python} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={flask} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={bootstrap} alt="" style={{ height: "55px", width: "55px" }} />
              </div>





            </div>
            <div className="link-box" style={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginBottom: "20px" }}>
              <div className="github-link">
                <Link to="https://github.com/skrijwan100/Todo-web-app" target='_blank' style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Soures code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                    <path
                      fill="black"
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                    ></path>
                  </svg>
                </button></Link>

              </div>
              <div className="depoly-link">
                <Link to="" style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Depoly Link</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
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
        <div className="project-box">
          <div className="title-box"> PAHARI HOME SOLUTIONS PVT. LTD. (Flask) </div>
          <div className="vedio-box" style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "18px 0px" }}>
            <div className="vedio" style={{ height: "350px", width: "57vw",border: "1px solid #fa5c0e", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <video className='vedio-src-box' controls style={{ height: "340px", width: "57vw" }}>
                <source src={pahari} type="video/webm" />
              </video>
            </div>
          </div>
          <div className="about-box">
            <div className="tech-stack" style={{ display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap", marginBottom: "20px" }}>
              <div className="img-box">

                <img className='img-hover' src={html} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={css} alt="" style={{ height: "55px", width: "55px", objectFit: "cover" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={js} alt="" style={{ height: "55px", width: "55px" }} />
              </div>

              <div className="img-box">

                <img className='img-hover' src={python} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={flask} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={bootstrap} alt="" style={{ height: "55px", width: "55px" }} />
              </div>





            </div>
            <div className="link-box" style={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginBottom: "20px" }}>
              <div className="github-link">
                <Link to="https://github.com/skrijwan100/Pahari-Home-Solutions-Web-Development-Internship-2024" target='_blank' style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Soures code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                    <path
                      fill="black"
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                    ></path>
                  </svg>
                </button></Link>

              </div>
              <div className="depoly-link">
                <Link to="https://github.com/skrijwan100/Pahari-Home-Solutions-Web-Development-Internship-2024" style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Depoly Link</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
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
        <div className="project-box">
          <div className="title-box"> Password-manager(Flask) </div>
          <div className="vedio-box" style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "18px 0px" }}>
            <div className="vedio" style={{ height: "350px", width: "57vw", border: "1px solid #fa5c0e", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <video className='vedio-src-box' controls style={{ height: "340px", width: "57vw" }}>
                <source src={passwordmanger} type="video/webm" />
              </video>


            </div>
          </div>
          <div className="about-box">
            <div className="tech-stack" style={{ display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap", marginBottom: "20px" }}>
              <div className="img-box">

                <img className='img-hover' src={html} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={css} alt="" style={{ height: "55px", width: "55px", objectFit: "cover" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={js} alt="" style={{ height: "55px", width: "55px" }} />
              </div>

              <div className="img-box">

                <img className='img-hover' src={python} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={flask} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={bootstrap} alt="" style={{ height: "55px", width: "55px" }} />
              </div>





            </div>
            <div className="link-box" style={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginBottom: "20px" }}>
              <div className="github-link">
                <Link to="https://github.com/skrijwan100/Password-manager" target='_blank' style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Soures code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                    <path
                      fill="black"
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                    ></path>
                  </svg>
                </button></Link>

              </div>
              <div className="depoly-link">
                <Link to="https://password-manager-pc9s.onrender.com/" style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Depoly Link</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
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
        <div className="project-box">
          <div className="title-box"> Login Portal (Flask) </div>
          <div className="vedio-box" style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "18px 0px" }}>
            <div className="vedio" style={{ height: "350px", width: "57vw", border: "1px solid #fa5c0e", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <video className='vedio-src-box' controls style={{ height: "340px", width: "57vw" }}>
                <source src={login} type="video/webm" />
              </video>
            </div>
          </div>
          <div className="about-box">
            <div className="tech-stack" style={{ display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap", marginBottom: "20px" }}>
              <div className="img-box">

                <img className='img-hover' src={html} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={css} alt="" style={{ height: "55px", width: "55px", objectFit: "cover" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={js} alt="" style={{ height: "55px", width: "55px" }} />
              </div>

              <div className="img-box">

                <img className='img-hover' src={python} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={flask} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={bootstrap} alt="" style={{ height: "55px", width: "55px" }} />
              </div>





            </div>
            <div className="link-box" style={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginBottom: "20px" }}>
              <div className="github-link">
                <Link to="https://github.com/skrijwan100/LoginPortal" target='_blank' style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Soures code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                    <path
                      fill="black"
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                    ></path>
                  </svg>
                </button></Link>

              </div>
              <div className="depoly-link">
                <Link to="" style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Depoly Link</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
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
        <div className="project-box">
          <div className="title-box"> Music app phone</div>
          <div className="vedio-box" style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "18px 0px" }}>
            <div className="vedio" style={{ height: "350px", width: "57vw", border: "1px solid #fa5c0e", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <video className='vedio-src-box' controls style={{ height: "350px", width: "57vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <source src={playmusic} type="video/webm" />
              </video>
            </div>
          </div>
          <div className="about-box">
            <div className="tech-stack" style={{ display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap", marginBottom: "20px" }}>
              <div className="img-box">

                <img className='img-hover' src={html} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={css} alt="" style={{ height: "55px", width: "55px", objectFit: "cover" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={js} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={bootstrap} alt="" style={{ height: "55px", width: "55px" }} />
              </div>





            </div>
            <div className="link-box" style={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginBottom: "20px" }}>
              <div className="github-link">
                <Link to="https://github.com/skrijwan100/Music-app-phone-" target='_blank' style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Soures code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                    <path
                      fill="black"
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                    ></path>
                  </svg>
                </button></Link>

              </div>
              <div className="depoly-link">
                <Link to="https://66989b88a2affa3a6a049a02--musicsappbyrijwan.netlify.app/" style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Depoly Link</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
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
        <div className="project-box">
          <div className="title-box">Tic-Tac-Toe Game</div>
          <div className="vedio-box" style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "18px 0px" }}>
            <div className="vedio" style={{ height: "350px", width: "57vw", border: "1px solid #fa5c0e", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <video className='vedio-src-box' controls style={{ height: "340px", width: "57vw" }}>
                <source src={tictactoe} type="video/webm" />
              </video>
            </div>
          </div>
          <div className="about-box">
            <div className="tech-stack" style={{ display: "flex", justifyContent: "center", gap: "50px", flexWrap: "wrap", marginBottom: "20px" }}>
              <div className="img-box">

                <img className='img-hover' src={html} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={css} alt="" style={{ height: "55px", width: "55px", objectFit: "cover" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={js} alt="" style={{ height: "55px", width: "55px" }} />
              </div>
              <div className="img-box">

                <img className='img-hover' src={bootstrap} alt="" style={{ height: "55px", width: "55px" }} />
              </div>





            </div>
            <div className="link-box" style={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginBottom: "20px" }}>
              <div className="github-link">
                <Link to="https://github.com/skrijwan100/TIC-TAC-TOE-game" target='_blank' style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Soures code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
                    <path
                      fill="black"
                      d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                    ></path>
                  </svg>
                </button></Link>

              </div>
              <div className="depoly-link">
                <Link to="https://669aab2c9dd1e08803104a80--tic-tac-toe-by-rijwan.netlify.app/" style={{ textDecoration: "none" }}><button className='code-btn'>
                  <span>Depoly Link</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 74 74"
                    height="34"
                    width="34"
                  >
                    <circle strokeWidth="3" stroke="black" r="35.5" cy="37" cx="37"></circle>
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
