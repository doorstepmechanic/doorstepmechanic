import Home from "./pages/HomePage";
import {Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage.jsx";

function MainRouter() {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
    </Routes>
    </>
  )
}

export default MainRouter