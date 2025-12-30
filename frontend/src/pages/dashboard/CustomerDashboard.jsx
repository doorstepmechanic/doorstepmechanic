import "../../Styles/CustomerDashboard.css";

export default function CustomerDashboard() {
  return (
    <div className="scroll-container">

      <section className="scroll-section section-1">
        <h1>Dashboard Home</h1>
        <p>Overview, stats, welcome message</p>
      </section>

      <section className="scroll-section section-2">
        <h1>Book Service</h1>
        <p>Select vehicle, issue, location</p>
      </section>

      <section className="scroll-section section-3">
        <h1>My Bookings</h1>
        <p>Active & past service requests</p>
      </section>

      <section className="scroll-section section-4">
        <h1>Profile</h1>
        <p>User details, address, settings</p>
      </section>

    </div>
  );
}
