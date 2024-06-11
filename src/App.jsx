// src/App.jsx
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Navigation from "./components/Navigation.jsx";
import Aboutus from "./components/Aboutus.jsx";
import { Switch } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      App
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
    </div>
  );
}

export default App;
