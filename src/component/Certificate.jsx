import React from 'react'
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
export default function Certificate({ navhide }) {
  const cardStyle = {
    backgroundColor: "#222",
    borderRadius: "12px",
    boxShadow: "0 2px 12px #fa5c0e",
    padding: "24px",
    margin: "32px auto",
    maxWidth: "400px",
    color: "white",
    fontFamily: "Bebas Neue",
    textAlign: "center"
  };

  return (
    <div style={{ backgroundColor: "#151515", paddingTop: "70px", color: "white", minHeight: "100vh" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{
          marginLeft: navhide ? "40px" : "80px",
          transition: "margin-left 0.4s ease-in-out",
          color: "white",
          fontSize: "40px",
          fontFamily: "Bebas Neue"
        }}>
          All Certificate
        </div>
      </div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",marginLeft: navhide ? "40px" : "80px",
          transition: "margin-left 0.4s ease-in-out",}}>

        <div style={cardStyle}>
          <img src={c1} alt="my Certificate " style={{ height: "250px", width: "370px" }} />
          <p style={{ margin: "4px 0 8px 0", fontSize: "22px", color: "#fa5c0e" }}>Brainware University Hackthon(dev Innov)</p>
          <p style={{ margin: "0 0 8px 0", fontSize: "16px", color: "white" }}> <b>Date:</b> Augest 2024</p>
        </div>
        <div style={cardStyle}>
          <img src={c2} alt="my Certificate " style={{ height: "250px", width: "370px" }} />
          <p style={{ margin: "4px 0 8px 0", fontSize: "22px", color: "#fa5c0e" }}>BWU Hackthon (Innoveture 2K25)</p>
          <p style={{ margin: "0 0 8px 0", fontSize: "16px", color: "white" }}> <b>Date:</b> March 2025</p>
        </div>
      </div>
    </div>
  )
}