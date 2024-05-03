import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { signIn } from "../firebaseConfig";
import "../styles/challenge5.css";
export const ChallengeFive: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [Error, setError] = useState("");
  const [LoginResult, setResult] = useState<any>(null);
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const result = await signIn(email, password);
      if (result) {
        setResult("successfully Logged in");
      }
    } catch (error: any) {
      setError(error.message);
    }
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
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
            />
          </div>
          <div className="submit">
            <input type="submit" value={"Login"} />
          </div>
        </form>
        {LoginResult ? <p>{LoginResult}</p> : <p>{Error}</p>}
      </div>
    </div>
  );
};
