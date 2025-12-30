import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import AppNavbar from "./components/Navbar.jsx";
import CustomerDashboard from "./pages/dashboard/CustomerDashboard.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";

function MainRouter() {
  const location = useLocation();

  // Pages where navbar should NOT show
  const hideNavbarRoutes = ["/", "/login", "/register"];

  const showNavbar = !hideNavbarRoutes.includes(location.pathname);
  return (
    <>
    {showNavbar && <AppNavbar />}

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/homepage" element={<CustomerDashboard />} />
      </Routes>
    </>
  );
}

export default MainRouter;
