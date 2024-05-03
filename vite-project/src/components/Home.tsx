import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
// import ChallengeOne from "./challenge1";
const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="links">
        <Link to={"/challenge1"}>Challenge 1</Link>
        <Link to={"/challenge2"}>Challenge 2</Link>
        <Link to={"/challenge3"}>Challenge 3</Link>
        <Link to={"/challenge4"}>to do app</Link>
      </div>
      <div className="headersContainer">
        <h1 className="">WellCome to List of Challenges Home Page</h1>
        <h2> Please use the Above Links To Navigate Among The Challenges</h2>
      </div>
    </div>
  );
};
export default Home;
