import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Expenses from "./Expenses";  // Import the Expenses page
import Register from "./Register";
import Income from "./Income";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expenses" element={<Expenses />} />  {/* New Route */}
        <Route path="/register" element={<Register />} />
        <Route path="/income" element={<Income />} />
      </Routes>
    </Router>
  );
}

export default App;
