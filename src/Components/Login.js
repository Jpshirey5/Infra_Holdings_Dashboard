import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('userData'));

    if (storedData && storedData.email === email && storedData.password === password) {
      console.log('Login Successful!');
      setIsLoggedIn(true);
      Navigate('/Dash')
    } else {
      console.log('Failed to Login!');
      setIsLoggedIn(false);
      alert('Failed to Login!');
    }
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-box">
      {isLoggedIn ? (
        <p>Welcome, David!</p> // Render content for logged-in user
      ) : (
        <>
          <p>Login</p>
          <form onSubmit={handleSubmit}>
            <div className="user-box">
              <input
                required
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                required
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <button type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
          </form>
          <p>
            Don't have an account? <Link to="/Signup">Sign Up!</Link>
          </p>
        </>
      )}
    </div>
  );
};

export default LoginForm;
