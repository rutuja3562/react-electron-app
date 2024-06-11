import * as React from "react";
// import { createRoot } from "react-dom";
import { createRoot } from "react-dom/client";
// import Home from "./components/Home.jsx";
import App from "./App.jsx";
// const root = createRoot(document.body);
// root.render(<App />);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter as Router

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
