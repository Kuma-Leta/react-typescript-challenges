import React, { useState } from "react";
import { Link } from "react-router-dom";
const ChallengeThree: React.FC = () => {
  const [count, setCount] = useState(0);
  const handleIncreament = () => {
    setCount(count + 1);
  };
  const handleDecreament = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>this is ChallengeThree page</div>
      <Link to={"/"}>go home </Link>
      <Link to={"/challenge1"}>Challenge 1</Link>
      <Link to={"/challenge2"}>Challenge 2</Link>
      <div className="flex align-center justify-center">
        <button onClick={handleDecreament} className="bg-blue ">
          -
        </button>
        <span>count :{count}</span>
        <button onClick={handleIncreament}>+</button>
      </div>
    </>
  );
};
export default ChallengeThree;
