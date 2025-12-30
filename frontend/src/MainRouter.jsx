import Home from "./pages/HomePage";
import {Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import CustomerDashboard from "./pages/dashboard/CustomerDashboard.jsx";

function MainRouter() {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/dashboard/customer" element={<CustomerDashboard/>}/>
    </Routes>
    </>
  )
}

export default MainRouter