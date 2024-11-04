import React from 'react';
import myImg from "../Asset/my__pic.png"
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
export default function Home({navhide}) {
  console.log(navhide)
  const naviget=useNavigate()
  const handleclick=(e)=>{
    e.preventDefault();
    naviget("/project")


  }
 
  return (

    <div className="main" style={{ backgroundColor: "#151515", color: "white", paddingLeft: "20px",paddingTop: "10px", display: "flex", }}>
      <div className="info" style={{marginLeft: navhide?"88px":"202px" ,transition: "margin-left 0.4s ease-in-out"}}>
        <h1 style={{ color: "#fa5c0e", }}>Hello, I am <span id="name" style={{fontFamily:"Alegreya Sans SC",fontSize:"45px",fontWeight:"700"}}>Sk Rijwan</span></h1>
        <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'I am a Web Developer',
          1500, // wait 1s before replacing "Mice" with "Hamsters"
          'I am a MERN Stack Developer',
          1500,
          'I am a React Developer',
          1500,
          'I am a Flask Developer',
          1500,
        ]}
        wrapper="h1"
        style={{color:"#fa5c0e"}}
        speed={50}
        repeat={Infinity}/>

        <div className="myinfo" style={{fontSize:"18px"}}>
          Driven and passionate web developer with expertise in <br />
          <b style={{color:"#fa5c0e"}}>Programming Languages</b>:  Python, JavaScript, HTML, CSS <br />
          <b style={{color:"#fa5c0e"}}>Web Development</b>:React.js, Flask, Node.js, Express.js<br />
          <b style={{color:"#fa5c0e"}}>Front-End Frameworks</b>: Bootstrap, Tailwind CSS<br />
          <b style={{color:"#fa5c0e"}}>Databases</b>: MySQL, SQLAlchemy, MongoDB<br />
          <b style={{color:"#fa5c0e"}}>Tools & Platforms</b>:  GitHub, VS Code, Postman, Thunder Clinet<br />
          <b style={{color:"#fa5c0e"}}>Others</b>: RESTful APIs, Git, SQL, OAuth<br />
          A motivated web developer with over 2 years of experience building responsive web applications and interactive websites. Proficient in the MERN stack, Flask, and various front-end frameworks. Experienced in developing full-stack applications, managing databases, and implementing secure user authentication systems. Currently interning at Pinnacle Labs and working on a range of practical projects that solve real-world problems. Looking for an internship opportunity to further develop technical skills and contribute to innovative solutions.
        </div>
        <div className="btn-box" style={{margin:"30px 0px",display:"flex", gap:"50px",alignItems:"center",justifyContent:"center"}}>
        <button onClick={handleclick} className='btn-home'>More about me</button>
        <button className='btn-home'>Download CV</button>

        </div>
        
      </div>
      <img src={myImg} alt="" style={{ height: "300px", width: "300px", borderRadius: "50%", marginTop: "70px", marginRight: "30px", cursor: "pointer" }} />

    </div>


  );
}

