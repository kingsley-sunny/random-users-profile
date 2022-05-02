import React from "react";
import "./darkModeBtn.css";

const DarkModeBtn = (props) => {
  return (
    <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
      <h2 style={{ textTransform: "capitalize" }}>{props.mode}</h2>
      <div className="button-container" onClick={props.toggleDarkMode}>
        <div className={`button-child1 ${props.effect.one}`}></div>
        <div className={`button-child2 ${props.effect.two}`}></div>
      </div>
    </div>
  );
};

export default DarkModeBtn;
