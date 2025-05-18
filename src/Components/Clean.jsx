import React, { useState } from "react";
import scanIcon from "../assets/scan.svg";

export default function Cleansection() {
  const [isHovered, setIsHovered] = useState(false);

  const cleansectionStyle = {
  position: 'relative', // add this line
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "73%",
  height: "100%",
  backgroundColor: "#18230F", // dark background
};

  const logoStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontFamily: "'Nova Square', cursive",  // Use Nova Square here
    fontWeight: 400, // Nova Square is typically all caps and blocky; weight may have less effect
    fontSize: '28px',
    color: 'white',
    userSelect: 'none',
  };

  const scanIconStyle = {
    width: "300px",
    height: "300px",
    transition: "transform 0.3s ease, width 0.3s ease, height 0.3s ease",
    cursor: "pointer",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    width: isHovered ? "310px" : "300px",
    height: isHovered ? "310px" : "300px",
  };

  return (
    <div style={cleansectionStyle}>
      <div style={logoStyle}>CacheWipe</div>
      <div>
        <img
          style={scanIconStyle}
          src={scanIcon}
          alt="Scan"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
    </div>
  );
}
