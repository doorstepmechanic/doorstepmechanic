import "../Styles/HomePage.css"

export default function HomePage() {
  const handleSelect = (role) => {
    console.log("Selected role:", role);
  };

  return (
    <div className="homepage-container">

      {/* Left Side - Image */}
      <div className="left-side">
        <img
          src="/images/Gemini_Generated_Image_8wk8ng8wk8ng8wk8.png"
          alt="Welcome"
          className="welcome-image"
        />
      </div>

      {/* Right Side - Text & Buttons */}
      <div className="right-side">
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