import { useNavigate, Link } from "react-router-dom";
import "../Styles/HomePage.css"

export default function HomePage() {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    navigate(`/register?role=${role}`);
  };

  return (
    <div className="homepage-container">

      {/* Left Side - Image */}
      <div className="left-side">
  <video
    src="/images/Hailuo_Video_make the static image into ani_459863097865142279.mp4"
    className="welcome-video"
    autoPlay
    loop
    muted
    playsInline
  />
</div>

      {/* Right Side - Text & Buttons */}
      <div className="right-side">
        <div style={{position: 'absolute', top: '20px', right: '30px', zIndex: 10}}>
           <Link to="/login" style={{textDecoration: 'none', color: '#c53030', fontWeight: 'bold'}}>Sign In</Link>
        </div>

        <h1 className="welcome-title">
          Welcome to DoorstepMechanic
        </h1>
        <p className="welcome-text">
          Get reliable vehicle service at your doorstep in just a few clicks
        </p>

        <div className="role-buttons">
          <button
            onClick={() => handleSelect("mechanic")}
            className="role-btn mechanic-btn"
          >
            <h2>I provide mechanic service</h2>
            <p>For mechanics & service providers</p>
          </button>

          <button
            onClick={() => handleSelect("customer")}
            className="role-btn customer-btn"
          >
            <h2>I want a mechanic service</h2>
            <p>For vehicle owners</p>
          </button>
        </div>
      </div>

    </div>
  );
}