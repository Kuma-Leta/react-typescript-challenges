import React from "react";
import { Link } from "react-router-dom";
const ChallengeOne: React.FC = () => {
  return (
    <>
      <div>Hello World !</div>
      <Link to={"/"}>go Home page </Link>
      <Link to={"/challenge2"}>Challenge 2</Link>
      <Link to={"/challenge3"}>Challenge 3</Link>
    </>
  );
};
export default ChallengeOne;
