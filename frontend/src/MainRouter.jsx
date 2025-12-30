import {Routes,Route} from "react-router-dom"
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

function MainRouter() {
  return (
    <>
    <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
    </>
  )
}

export default MainRouter