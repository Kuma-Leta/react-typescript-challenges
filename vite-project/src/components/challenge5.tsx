import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
export const ChallengeFive: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="container">
      <div className="links">
        <Link to={"/challenge1"}>Challenge 1</Link>
        <Link to={"/challenge2"}>Challenge 2</Link>
        <Link to={"/challenge3"}>Challenge 3</Link>
        <Link to={"/challenge4"}>to do app</Link>
        <Link to={"/challenge5"}>challenge5</Link>
      </div>
      <div className="formContaniner">
        <form onSubmit={handleFormSubmit} className="form">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input type="text" value={} />
          </div>
          <div className="password">
            <label htmlFor="password">password</label>
            <input type="password" />
          </div>
          <div className="submit">
            <input type="submit" value={"Login"} />
          </div>
        </form>
      </div>
    </div>
  );
};
