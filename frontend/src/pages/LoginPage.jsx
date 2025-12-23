import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Auth.css';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login with:", { email, password });
    // Add login logic here
  };

  return (
    <div className="auth-container">
      {/* Left Side - Image */}
      <div className="auth-left">
         {/* Animated Illustration */}
         <video 
           src="/images/F18W4VK4z0nHoDv7og.mp4" 
           className="auth-image" 
           autoPlay 
           loop 
           muted 
           playsInline
         />
      </div>

      {/* Right Side - Login Form */}
      <div className="auth-right">
        <div className="auth-card">
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Please sign in to your account</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input 
                type="email" 
                className="form-input" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input 
                type="password" 
                className="form-input" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="auth-btn">Sign In</button>
          </form>

          <div className="auth-links">
            <p>Don't have an account? 
              <Link to="/register" className="auth-link">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
