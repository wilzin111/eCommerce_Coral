import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About";
import Categories from "../Pages/Categories/Categories";
import Bag from "../Components/Bag/Bag";
import UserProfile from "../Pages/UserProfile/UserProfile"
import Login from "../Pages/Login/Login"
import Signup from "../Pages/Signup/Signup";



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default Router;