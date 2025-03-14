import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Css/Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear old messages

    try {
      const res = await axios.post("http://localhost:5000/register", { email, password });

      console.log("Register Response:", res.data); // Debugging log

      if (res.data.message === "User already exists") {
        setMessage("Email is already registered. Try logging in.");
      } else if (res.data.message === "Registration successful!") {
        setMessage("Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (err) {
      console.error("Register Error:", err.response?.data?.error); // Debugging log
      setMessage(err.response?.data?.error || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <p className="back-text">ExpenSaver</p>
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
        {message && <p className="error-message">{message}</p>}
        <p className="login-text">
          Already have an account?{" "}
          <button onClick={() => navigate("/")} className="login-button">
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
