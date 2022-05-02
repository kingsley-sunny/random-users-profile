import React from "react";
import "./card-list.css";
import Card from "../card/card";

const CardList = (props) => {
  return (
    <div className="card-list-main">
      <div className="card-list">
        {props.users.map((user) => (
          <Card
            fullname={user.name.first + " " + user.name.last}
            image={user.picture.medium}
            email={user.email}
            key={user.name.first + "" + user.name.last}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
