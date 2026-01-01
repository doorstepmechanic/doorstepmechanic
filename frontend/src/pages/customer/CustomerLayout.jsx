import AppNavbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
import "../../Styles/CustomerLayout.css";

export default function CustomerLayout() {
  return (
    <>
      <AppNavbar />
      <div className="customer-layout">
        <div className="dashboard-container">
          <Outlet />
        </div>
      </div>
    </>
  );
}
