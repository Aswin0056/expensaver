import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Css/Dashboard.css";

const Navbar = ({ handleLogout, email, search, setSearch }) => (
  <nav className="navbar">
    <h2 className="navbar-title">ExpenSaver Dashboard</h2>
    <input
      type="text"
      placeholder="Search expenses..."
      className="search-input"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <div className="navbar-right">
      <span className="user-email">{email}</span>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  </nav>
);

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => navigate("/dashboard")}>Dashboard</li>
        <li onClick={() => navigate("/expenses")}>Expenses</li>
        <li onClick={() => navigate("/income")}>Income</li>
      </ul>
    </div>
  );
};

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2025 ExpenSaver. All rights reserved.</p>
  </footer>
);

const Dashboard = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [showQuantity, setShowQuantity] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/");
    } else {
      fetchUserDetails();
      fetchExpenses();
    }
  }, [navigate]);

  // Fetch logged-in user details
  const fetchUserDetails = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const res = await axios.get("http://localhost:5000/user", {
        headers: { Authorization: token },
      });
      setEmail(res.data.email);
    } catch (err) {
      console.error("Error fetching user details:", err.response?.data?.error);
    }
  };

  // Fetch Expenses from Backend
  const fetchExpenses = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const res = await axios.get("http://localhost:5000/latest-expense", {
        headers: { Authorization: token },
      });
      setExpenses([res.data]); // Store only the latest expense
    } catch (err) {
      console.error("Error fetching latest expense:", err.response?.data?.error);
    }
  };
  

  // Add Expense
  const handleAddExpense = async () => {
    if (!title || !amount) {
      alert("Title and Amount are required!");
      return;
    }
  
    const token = localStorage.getItem("authToken");
  
    try {
      const res = await axios.post(
        "http://localhost:5000/add-expense",
        { title, amount, quantity: showQuantity ? quantity : null },
        { headers: { Authorization: token } }
      );
  
      // Create a new expense object and update the state without reloading
      const newExpense = {
        id: res.data.insertId, // Assuming backend returns the inserted ID
        title,
        amount: parseFloat(amount),
        quantity: showQuantity ? parseInt(quantity) : null,
        created_at: new Date().toISOString(), // Add timestamp
      };
  
      setExpenses((prevExpenses) => [...prevExpenses, newExpense]); // Append new expense
  
      // Clear input fields
      setTitle("");
      setAmount("");
      setQuantity("");
    } catch (err) {
      console.error("Error adding expense:", err.response?.data?.error);
    }
  };
  

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <Navbar handleLogout={handleLogout} email={email} search={search} setSearch={setSearch} />
      <div className="main-content">
        <Sidebar />
        <div className="dashboard-content">
          <h2>Welcome to Your Dashboard</h2>

          {/* Toggle Quantity Column */}
          <label className="toggle-label">
            <input type="checkbox" checked={showQuantity} onChange={() => setShowQuantity(!showQuantity)} />
            Show Quantity Column
          </label>

          {/* Expense Table */}
          <table className="expense-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Amount ($)</th>
                {showQuantity && <th>Quantity</th>}
                <th>Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {expenses
                .filter((expense) => expense.title.toLowerCase().includes(search.toLowerCase()))
                .map((expense, index) => (
                  <tr key={index}>
                    <td>{expense.title}</td>
                    <td>{expense.amount}</td>
                    {showQuantity && <td>{expense.quantity || "-"}</td>}
                    <td>{new Date(expense.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Enter title"
                    className="input-field"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="input-field"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </td>
                {showQuantity && (
                  <td>
                    <input
                      type="number"
                      placeholder="Enter quantity"
                      className="input-field"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </td>
                )}
                <td>
                  <button className="add-button" onClick={handleAddExpense}>
                    Add Expense
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
