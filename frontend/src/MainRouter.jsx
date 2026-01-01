import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";

import CustomerLayout from "./pages/customer/CustomerLayout.jsx";
import Home from "./pages/customer/Home/home.jsx";
import Services from "./pages/customer/Services.jsx";
import Bookings from "./pages/customer/Booking.jsx";
import Profile from "./pages/customer/Profile.jsx";

function MainRouter() {
  return (
    <Routes>
      {/* Public pages */}
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Customer dashboard */}
      <Route path="/customer/dashboard" element={<CustomerLayout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default MainRouter;
