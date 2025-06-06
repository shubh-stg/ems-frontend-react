import React, { useState } from 'react'
import styles from './Register.module.css'
import { registerUser } from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigator=useNavigate();
  const [namee, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
  
    namee: "",
    username: "",
    email: "",
    password: ""
  });

  const validate = ()=>{
    const newErrors = {};
    
    if (!namee.trim()) newErrors.namee = "Name is required";
    if (!username.trim()) newErrors.username = "Username is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    
 return Object.keys(newErrors).length === 0;
    }
  

  const handleRegister = (e) => {
    e.preventDefault();
     if (!validate()) return; 
     const user={
     name :namee,
      username,
      password,
      email
     }
     registerUser(user).then((reponse)=>{
      console.log(reponse);
      navigator("/login");
     }).catch(error=>console.log(error));
  }

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <form onSubmit={handleRegister} className={styles.form}>
          <h2 className={styles.title}>Create Account</h2>
          <p className={styles.subtitle}>Join us today and get started</p>

          <div className={styles.inputGroup}>
            <input 
              type="text" 
              placeholder="Full Name" 
              value={namee} 
              onChange={(e) => setName(e.target.value)}
              className={`${styles.input} ${errors.namee ? styles.inputError : ''}`}
            />
            {errors.namee && <span className={styles.errorMessage}>{errors.namee}</span>}
          </div>

          <div className={styles.inputGroup}>
            <input 
              type="text" 
              placeholder="Username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              className={`${styles.input} ${errors.username ? styles.inputError : ''}`}
            />
            {errors.username && <span className={styles.errorMessage}>{errors.username}</span>}
          </div>

          <div className={styles.inputGroup}>
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
          </div>

          <div className={styles.inputGroup}>
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
            />
            {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
          </div>

          <button type="submit" className={styles.submitButton}>
            Create Account
          </button>

          <div className={styles.loginPrompt}>
            <p>Already have an account? 
              <button 
                type="button" 
                className={styles.loginLink}
                onClick={() => {
                  // Replace with your navigation logic
                  navigator("/login");
                }}
              >
                Sign In
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register