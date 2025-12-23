import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/RegisterPage.css';

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
    <div className="registerpage-container">

      {/* Left Side - Register Form */}
      <div className="register-left-side">
        <div style={{ position: "absolute", top: "20px", left: "30px", zIndex: 10 }}>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "#c53030", fontWeight: "bold" }}
          >
            Back Home
          </Link>
        </div>

        <h1 className="register-title">Create Account</h1>
        <p className="register-subtitle">
          Join us as a {role === "mechanic" ? "Service Partner" : "Customer"}
        </p>

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

        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="name"
            className="register-input"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="register-input"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            className="register-input"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            className="register-input"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className="register-btn">Sign Up</button>
        </form>

        <p className="register-footer">
          Already have an account?{" "}
          <Link to="/login" className="register-link">Sign In</Link>
        </p>
      </div>

      {/* Right Side - Video */}
      <div className="register-right-side">
        <video
          src="/images/F18W4VK4z0nHoDv7og.mp4"
          className="register-video"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
}