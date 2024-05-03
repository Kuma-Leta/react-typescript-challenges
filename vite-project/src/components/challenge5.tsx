import React from "react";
import { Link } from "react-router-dom";
export const ChallengeFive: React.FC = () => {
  return (
    <div className="container">
      <div className="links">
        <Link to={"/challenge1"}>Challenge 1</Link>
        <Link to={"/challenge2"}>Challenge 2</Link>
        <Link to={"/challenge3"}>Challenge 3</Link>
        <Link to={"/challenge4"}>to do app</Link>
        <Link to={"/challenge5"}>challenge5</Link>
      </div>
      <div>challenge 5</div>
    </div>
  );
};
