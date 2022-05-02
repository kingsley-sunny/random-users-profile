import React from "react";
import "./loading.css";
import loading from "../../img/loading-buffering.gif";

const ShowLoading = (props) => {
  return (
    <div className="loading-container">
      <img src={loading} alt="Users is Loading....." />
    </div>
  );
};

export default ShowLoading;
