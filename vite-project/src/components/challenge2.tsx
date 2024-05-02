import React from "react";
import { Link } from "react-router-dom";
import { ChildOne, ChildTwo, ChildThree } from "./childComponents";
const ChallengeTwo: React.FC = () => {
  const propsToBePassed: string[] = [
    "child one props",
    "child two props",
    "child three props",
  ];
  return (
    <>
      <div>this is Challenge2 page</div>
      <Link to={"/"}>go home Page</Link>
      <Link to={"/challenge1"}>Challenge 1</Link>
      <Link to={"/challenge3"}>Challenge 3</Link>
      <div>
        <ChildOne propOne={propsToBePassed[0]} />
        <ChildTwo propTwo={propsToBePassed[1]} />
        <ChildThree propThree={propsToBePassed[2]} />
      </div>
    </>
  );
};
export default ChallengeTwo;
