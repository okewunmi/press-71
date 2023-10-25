import React from "react";
import Home from "./HomePage";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HealthPage from "./components/Pages/healthPage";
import BusinessPage from "./components/Pages/BusinessPage";
import PoliticsPage from "./components/Pages/PoliticsPage";
import SportPage from "./components/Pages/sportPage";
import EntainmentPage from "./components/Pages/EntainmentPage";
import TechnologyPage from "./components/Pages/TechnologyPage";

import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Business" element={<BusinessPage />} />
          <Route path="Entainment" element={<EntainmentPage />} />
          <Route path="health" element={<HealthPage />} />
          <Route path="Politics" element={<PoliticsPage />} />
          <Route path="Sport" element={<SportPage />} />
          <Route path="Technology" element={<TechnologyPage />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;
