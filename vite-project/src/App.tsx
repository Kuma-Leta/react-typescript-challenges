// import { useState } from 'react'
import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
