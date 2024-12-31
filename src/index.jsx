import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Results from "./components/Results/Results";
import UserInput from "./components/UserInput";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user-input" element={<UserInput />} />  
    </Routes>
  </Router>
);
