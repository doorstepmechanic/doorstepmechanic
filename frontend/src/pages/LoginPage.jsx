import { useNavigate, Link } from "react-router-dom";
import "../Styles/LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted");
    navigate("/dashboard"); // Example redirect after login
  };

  return (
    <div className="loginpage-container">

      {/* Left Side - Login Form */}
      <div className="login-left-side">
        <div style={{ position: "absolute", top: "20px", left: "30px", zIndex: 10 }}>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "#c53030", fontWeight: "bold" }}
          >
            Back Home
          </Link>
        </div>

        <h1 className="login-title">Sign In to DoorstepMechanic</h1>
        <p className="login-subtitle">
          Enter your credentials to access your account
        </p>

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="login-input"
          />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p className="login-footer">
          Don't have an account?{" "}
          <Link to="/register" className="login-register-link">
            Sign Up
          </Link>
        </p>
      </div>

      {/* Right Side - Video */}
      <div className="login-right-side">
        <video
          src="/images/F18W4VK4z0nHoDv7og.mp4"
          className="login-welcome-video"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
}