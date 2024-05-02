import React from "react";
import { Link } from "react-router-dom";
// import ChallengeOne from "./challenge1";
const Home: React.FC = () => {
  return (
    <>
      <div className="text-blue underline">this is home page</div>
      <div className="text-black">
        <Link to={"/challenge1"}>Challenge 1</Link>
        <Link to={"/challenge2"}>Challenge 2</Link>
        <Link to={"/challenge3"}>Challenge 3</Link>
        <Link to={"/challenge4"}>to do app</Link>
      </div>
    </>
  );
};
export default Home;
