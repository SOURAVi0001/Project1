import React, { useState } from "react";
import styles from "./Login.module.css";

const AdminIcon = () => <span>🛡️</span>; // Move outside

const Login = ({ onClose }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username === "admin" && formData.password === "password123") {
      alert("Login Successful!");
      onClose();
    } else {
      setErrorMessage("Invalid username or password.");
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.closeButton} onClick={onClose}>×</span>
        <div className={styles.adminHeader}>
          <AdminIcon className={styles.adminIcon} />
          <h2>Admin Login</h2>
        </div>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
            className={styles.inputField}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className={styles.inputField}
          />
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          <button type="submit" className={styles.loginButton}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;