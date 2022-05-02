import React from "react";
import "./navBar.css";
import DarkModeBtn from "../dark-mode-button/darkModeBtn";

function NavBar(props) {
  return (
    <nav>
      <h1 style={{ fontSize: "40px" }}>Random Users</h1>
      <DarkModeBtn
        effect={props.darkEffect}
        toggleDarkMode={props.toggleDarkMode}
        mode={props.mode}
      />
    </nav>
  );
}

export default NavBar;
