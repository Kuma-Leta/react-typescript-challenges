import React from "react";
import { Link } from "react-router-dom";
import { ChildOne, ChildTwo, ChildThree } from "./childComponents";
import "../styles/challenge1.css";
const ChallengeTwo: React.FC = () => {
  const propsToBePassed: string[] = [
    "child one props",
    "child two props",
    "child three props",
  ];
  return (
    <div className="container">
      <div className="linksContainer">
        <Link to={"/"}>go home Page</Link>
        <Link to={"/challenge1"}>Challenge 1</Link>
        <Link to={"/challenge3"}>Challenge 3</Link>
        <Link to={"/challenge4"}>to do app</Link>
      </div>
      <div className="props">
        <ChildOne propOne={propsToBePassed[0]} />
        <ChildTwo propTwo={propsToBePassed[1]} />
        <ChildThree propThree={propsToBePassed[2]} />
      </div>
    </div>
  );
};
export default ChallengeTwo;
