import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (email && password) {
      const userData = { email, password };
      localStorage.setItem('userData', JSON.stringify(userData));
      alert("Sign-up success!")
      navigate('/Login');
    } else {
      alert('All fields are required.');
    }
  };

  return (
    <div className="login-box">
      <p>Sign Up</p>
      <form onSubmit={handleSignUp}>
        <div className="user-box">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <button type="submit" className="signup-btn">Sign Up</button> 
      </form>
    </div>
  );
};

export default SignUpForm;
