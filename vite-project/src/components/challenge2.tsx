import React from "react";
import { Link } from "react-router-dom";
const ChallengeTwo: React.FC = () => {
  return (
    <>
      <div>this is Challenge2 page</div>
      <Link to={"/"}>go home Page</Link>
      <Link to={"/challenge1"}>Challenge 1</Link>
      <Link to={"/challenge3"}>Challenge 3</Link>
    </>
  );
};
export default ChallengeTwo;
