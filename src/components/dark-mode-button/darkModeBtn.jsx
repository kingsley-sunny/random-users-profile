import React from "react";
import "./darkModeBtn.css";

const DarkModeBtn = props => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 20,
            }}
        >
            <h2 style={{ textTransform: "capitalize", marginRight: 10 }}>{props.mode}</h2>
            <div className='button-container' onClick={props.toggleDarkMode}>
                <div className={`button-child1 ${props.effect.one}`}></div>
                <div className={`button-child2 ${props.effect.two}`}></div>
            </div>
        </div>
    );
};

export default DarkModeBtn;
