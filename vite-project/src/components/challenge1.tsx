import React from "react";
import { Link } from "react-router-dom";
import "../styles/challenge1.css";
const ChallengeOne: React.FC = () => {
  return (
    <div className="container">
      <div className="linksContainer">
        <Link to={"/"}>go Home page </Link>
        <Link to={"/challenge2"}>Challenge 2</Link>
        <Link to={"/challenge3"}>Challenge 3</Link>
        <Link to={"/challenge4"}>to do app</Link>
      </div>
      <div className="hello">Hello World !</div>
    </div>
  );
};
export default ChallengeOne;
