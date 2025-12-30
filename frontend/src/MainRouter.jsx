import {Routes,Route} from "react-router-dom"
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";
import AppNavbar from "./components/Navbar.jsx";

function MainRouter() {
  return (
    <>
    <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/navbar" element={<AppNavbar/>}/>
    </Routes>
    </>
  )
}

export default MainRouter