import React, { useEffect, useState } from 'react';
import myImg from "../Asset/my__pic.png"

export default function Home() {

  return (

    <div className="main" style={{ backgroundColor: "black", color: "white", paddingLeft: "20px", paddingTop: "10px", display: "flex" }}>
      <div className="info">
        <h1 style={{ color: "#fa5c0e" }}>Hello, I am <span id="name">sk Rijwan</span></h1>
        {/* <h1>Web Developer | MERN Stack Developer | Flask Developer | React Developer </h1>  */}
        <h1>I am a <span id="skill"></span><span className="cursor">|</span></h1>

        <div className="myinfo">
          Driven and passionate junior web developer with expertise in <br />
          <b>Programming Languages</b>:  Python, JavaScript, HTML, CSS <br />
          <b>Web Development</b>:React.js, Flask, Node.js, Express.js<br />
          <b>Front-End Frameworks</b>: Bootstrap, Tailwind CSS<br />
          <b>Databases</b>: MySQL, SQLAlchemy, MongoDB<br />
          <b>Tools & Platforms</b>:  GitHub, VS Code, Postman<br />
          <b>Others</b>: RESTful APIs, Git, SQL, OAuth<br />
          A motivated web developer with over 2 years of experience building responsive web applications and interactive websites. Proficient in the MERN stack, Flask, and various front-end frameworks. Experienced in developing full-stack applications, managing databases, and implementing secure user authentication systems. Currently interning at Pinnacle Labs and working on a range of practical projects that solve real-world problems. Looking for an internship opportunity to further develop technical skills and contribute to innovative solutions.
        </div>
      </div>
      <img src={myImg} alt="" style={{ height: "300px", width: "300px", borderRadius: "50%", marginTop: "70px", marginRight: "30px", cursor: "pointer" }} />

    </div>


  );
}

