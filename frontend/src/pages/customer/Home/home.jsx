import "./home.css";

export default function Home() {
  return (
    <div className="home-wrapper">
      
      {/* Fixed background */}
      <div className="home-bg"></div>

      {/* Scrollable content */}
      <div className="home-content">
        <section className="home-section">
          <h1>Doorstep Mechanic</h1>
          <p>Vehicle service at your doorstep</p>
        </section>

        <section className="home-section">
          <h2>How it Works</h2>
          <p>Book → Track → Get service</p>
        </section>

        <section className="home-section">
          <h2>Why Choose Us</h2>
          <p>Verified mechanics, fast service</p>
        </section>

        <section className="home-section">
          <h2>Ready to book?</h2>
          <button>Book a Service</button>
        </section>
      </div>

    </div>
  );
}
