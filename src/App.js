import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login"; // Make sure this is correct
import Register from "./Register";
import Dashboard from "./Dashboard";
import Expenses from "./Expenses";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </Router>
  );
};

export default App;
