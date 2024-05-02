// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChallengeOne from "./components/challenge1";
import ChallengeTwo from "./components/challenge2";
import ChallengeThree from "./components/challenge3";
import NotFound from "./components/notFound";
import { ToDoList } from "./components/challenge4";
const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenge1" element={<ChallengeOne />} />
          <Route path="/challenge2" element={<ChallengeTwo />} />
          <Route path="/challenge3" element={<ChallengeThree />} />
          <Route path="/challenge4" element={<ToDoList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
