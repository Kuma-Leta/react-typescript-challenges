// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChallengeOne from "./components/challenge1";
import ChallengeTwo from "./components/challenge2";
import ChallengeThree from "./components/challenge3";
import NotFound from "./components/notFound";
const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chalenge1" element={<ChallengeOne />} />
          <Route path="/chalenge2" element={<ChallengeTwo />} />
          <Route path="/challenge3" element={<ChallengeThree />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
