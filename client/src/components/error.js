import React from "react";
import "../templates/error.css";
import lostpic from "../pictures/lost.jpg";

const Error = () => {
  return (
    <div className="errorPage">
      <h2>Page does not exist</h2>
      <img src={lostpic} className="lost" />
    </div>
  );
};

export default Error;
