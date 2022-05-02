import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <h2>{props.fullname}</h2>
      <p className="">{props.email}</p>
    </div>
  );
};

export default Card;
