import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Categories from "../Pages/Categories/Categories";
import Bag from "../Components/Bag/Bag";
import UserProfile from "../Pages/UserProfile/UserProfile"
import Login from "../Pages/Login/Login"
import Signup from "../Pages/Signup/Signup";
import RegisterProducts from "../Pages/RegisterProducts/RegProducts";
import StartScreen from "../Pages/StartScreen/StartScreen";
import Wishlist from "../Components/Wishlist/wishlist";
import Private from "./Private";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Private><UserProfile /></Private>} />
        <Route path="/bag" element={<Private><Bag /></Private>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register-products" element={<RegisterProducts />} />
        <Route path="/startScreen" element={<StartScreen />} />
        <Route path="/wishlist" element={<Private><Wishlist /></Private>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
