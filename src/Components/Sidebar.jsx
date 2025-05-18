import React, { useState } from "react";
import speedometerIcon from "../assets/speedometer.png";
import settingsIcon from "../assets/settings.svg";
import categoriesIcon from "../assets/categories.png";
import secureIcon from "../assets/secure.png";
import datacleaningIcon from "../assets/data-cleaning.png";

// Define your filter as a reusable constant
const iconFilterStyle = {
  width: "30px",
  height: "30px",
  filter:
    "brightness(0) saturate(100%) invert(97%) sepia(2%) saturate(195%) hue-rotate(298deg) brightness(107%) contrast(91%)",
};

const sidebarStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "27%",
  height: "100%",
  backgroundColor: "#27391C", // dark background
  fontWeight: "100",
  gap: "10px",
};

const labelStyle = {
  color: "white",
  fontSize: "14px",
  fontFamily: "'Barlow', sans-serif",
  fontWeight: 100,
};

const baseItemBoxStyle = {
  background: "#314726", // slightly darker than sidebar
  borderRadius: "3px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  border: "1px solid #3a5630",
  width: "90px",
  height: "90px",
  overflow: "hidden",
  transition: "all 0.3s ease", // smooth transition for hover
};

// Hover styles applied only on hover
const hoverItemBoxStyle = {
  backgroundColor: "#3a5630",
  border: "1px solid #4caf50",
  boxShadow: "0 4px 12px rgba(76, 175, 80, 0.5)",
  transform: "scale(1.05)",
  cursor: "pointer",
};

export default function Sidebar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [
    { icon: datacleaningIcon, label: "Data Cleaning" },
    { icon: speedometerIcon, label: "Speedometer" },
    { icon: secureIcon, label: "Secure" },
    { icon: categoriesIcon, label: "Application" },
    { icon: settingsIcon, label: "Settings" },
  ];

  return (
    <div style={sidebarStyle}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            ...baseItemBoxStyle,
            ...(hoveredIndex === index ? hoverItemBoxStyle : {}),
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img src={item.icon} alt={item.label} style={iconFilterStyle} />
          <h1 style={labelStyle}>{item.label}</h1>
        </div>
      ))}
    </div>
  );
}
