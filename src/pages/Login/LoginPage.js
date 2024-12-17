import React, { useState } from "react";
import "./LoginPage.css"; // Подключаем стили для страницы логина

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Логика входа
    console.log("Logging in with", email, password);
  };

  const handleSignUp = () => {
    // Логика регистрации
    console.log("Redirect to Sign Up");
  };

  const handleForgotPassword = () => {
    // Логика восстановления пароля
    console.log("Redirect to Forgot Password");
  };

  return (
    <div className="login-overlay">
      <div className="login-popup">
        <h2>Sign In</h2>
        <form className="login-form">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="login-buttons">
            <button type="button"  onClick={handleLogin}>
              Log In
            </button>
            <button type="button" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </form>
        <p className="forgot-password" onClick={handleForgotPassword}>
          Forgot password?
        </p>
      </div>
    </div>
  );
}

export default LoginPage;