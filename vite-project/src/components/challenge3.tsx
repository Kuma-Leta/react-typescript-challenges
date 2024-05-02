import React from "react";
import { Link } from "react-router-dom";
const ChallengeThree: React.FC = () => {
  return (
    <>
      <div>this is ChallengeThree page</div>
      <Link to={"/"}>go home </Link>
      <Link to={"/challenge1"}>Challenge 1</Link>
      <Link to={"/challenge2"}>Challenge 2</Link>
    </>
  );
};
export default ChallengeThree;
