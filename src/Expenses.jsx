import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Css/Expenses.css";

const Navbar = ({ search, setSearch }) => (
  <nav className="navbar">
    <h2 className="navbar-title">ExpenSaver - Expenses</h2>
    <input
      type="text"
      placeholder="Search expenses..."
      className="search-input"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
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

const Expenses = () => {
  const [search, setSearch] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [editingExpenseId, setEditingExpenseId] = useState(null); // Store only the expense ID being edited
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");

  // Fetch expenses from the backend
  const fetchExpenses = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:5000/expenses", {
        headers: { Authorization: token },
      });
      setExpenses(res.data);
    } catch (err) {
      console.error("Error fetching expenses:", err.response?.data?.error);
    }
  }, [token]);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      fetchExpenses();
    }
  }, [navigate, token, fetchExpenses]);

  // Calculate Grand Total of All Expenses
  const grandTotal = expenses.reduce(
    (total, expense) => total + expense.amount * (expense.quantity || 1),
    0
  );

  // Enable editing for a specific expense
  const handleEdit = (expenseId) => {
    setEditingExpenseId(expenseId); // Set only the selected row as editable
  };  

  // Handle input changes in the editable row
  const handleInputChange = (e, expenseId, field) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === expenseId ? { ...expense, [field]: e.target.value } : expense
      )
    );
  };

  // Update the expense in the backend
  const handleUpdate = async (expenseId) => {
    const expenseToUpdate = expenses.find((expense) => expense.id === expenseId);

    try {
      await axios.put(
        `http://localhost:5000/update-expense/${expenseId}`,
        expenseToUpdate,
        { headers: { Authorization: token } }
      );

      setEditingExpenseId(null); // Exit editing mode
    } catch (err) {
      console.error("Error updating expense:", err.response?.data?.error);
    }
  };

  return (
    <div className="expenses-container">
      <Navbar search={search} setSearch={setSearch} />
      <div className="main-content">
        <Sidebar />
        <div className="expenses-content">
          <h2>Expense History</h2>
          <table className="expense-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Amount ($)</th>
                <th>Quantity</th>
                <th>Total ($)</th>
                <th>Date & Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses
                .filter((expense) =>
                  expense.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((expense) => (
                  <tr key={expense.id}>
                    {editingExpenseId === expense.id ? (
                      <>
                        <td>
                          <input
                            type="text"
                            value={expense.title}
                            onChange={(e) => handleInputChange(e, expense.id, "title")}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={expense.amount}
                            onChange={(e) => handleInputChange(e, expense.id, "amount")}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={expense.quantity || ""}
                            onChange={(e) => handleInputChange(e, expense.id, "quantity")}
                          />
                        </td>
                        <td>{(expense.amount * (expense.quantity || 1)).toFixed(2)}</td>
                        <td>{new Date(expense.created_at).toLocaleString()}</td>
                        <td>
                          <button
                            className="update-button"
                            onClick={() => handleUpdate(expense.id)}
                          >
                            Update
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{expense.title}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.quantity || "-"}</td>
                        <td>{(expense.amount * (expense.quantity || 1)).toFixed(2)}</td>
                        <td>{new Date(expense.created_at).toLocaleString()}</td>
                        <td>
                          <button
                            className="edit-button"
                            onClick={() => handleEdit(expense.id)}
                          >
                            Edit
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              {/* Grand Total Row */}
              <tr className="grand-total-row">
                <td colSpan="3">
                  <strong>Grand Total</strong>
                </td>
                <td>
                  <strong>${grandTotal.toFixed(2)}</strong>
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Expenses;
                            