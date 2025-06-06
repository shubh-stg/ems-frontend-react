import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../Services/EmployeeService";
import { jwtDecode } from "jwt-decode";
import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    const para = {
      username,
      password,
    };
    
    loginUser(para)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        
        const roles = jwtDecode(token).roles || [];
        if (roles.includes("ROLE_ADMIN")) {
          navigate("/add-employee");
        } else {
          navigate("/employee");
        }
      })
      .catch((error) => {
        setError("Invalid Credentials");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.header}>
            <h2 className={styles.title}>Welcome Back</h2>
            <p className={styles.subtitle}>Sign in to your account</p>
          </div>

          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              required
            />
          </div>

          {error && <div className={styles.errorMessage}>{error}</div>}

          <button 
            type="submit" 
            className={`${styles.submitButton} ${isLoading ? styles.loading : ''}`}
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>

          <div className={styles.registerPrompt}>
            <p>Not registered yet?</p>
            <button
              type="button"
              className={styles.registerLink}
              onClick={() => navigate("/register")}
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
