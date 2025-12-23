import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Auth.css';

export default function RegisterPage() {
  const [role, setRole] = useState("customer"); // Default role
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  
  const location = useLocation();

  useEffect(() => {
    // Check for query param 'role' to pre-select
    const searchParams = new URLSearchParams(location.search);
    const roleParam = searchParams.get("role");
    if (roleParam === "mechanic" || roleParam === "customer") {
      setRole(roleParam);
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registering as:", role, "Data:", formData);
    // Add registration logic here
  };

  return (
    <div className="auth-container">
      {/* Left Side - Image */}
      <div className="auth-left">
         <video 
           src="/images/F18W4VK4z0nHoDv7og.mp4" 
           className="auth-image" 
           autoPlay 
           loop 
           muted 
           playsInline
         />
      </div>

      {/* Right Side - Register Form */}
      <div className="auth-right">
        <div className="auth-card">
          <h2 className="auth-title">Create Account</h2>
          <p className="auth-subtitle">Join us as a {role === 'mechanic' ? 'Service Partner' : 'Customer'}</p>

          <div className="role-toggle">
            <div 
              className={`toggle-option ${role === 'customer' ? 'active' : ''}`}
              onClick={() => setRole('customer')}
            >
              Customer
            </div>
            <div 
              className={`toggle-option ${role === 'mechanic' ? 'active' : ''}`}
              onClick={() => setRole('mechanic')}
            >
              Mechanic
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input 
                type="text" 
                name="name"
                className="form-input" 
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input 
                type="email" 
                name="email"
                className="form-input" 
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input 
                type="password" 
                name="password"
                className="form-input" 
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

             <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input 
                type="password" 
                name="confirmPassword"
                className="form-input" 
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="auth-btn">Sign Up</button>
          </form>

          <div className="auth-links">
            <p>Already have an account? 
              <Link to="/login" className="auth-link">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
