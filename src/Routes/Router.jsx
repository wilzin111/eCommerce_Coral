import { Routes, Route, BrowserRouter, useParams } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Categories from "../Pages/Categories/Categories";
import Bag from "../Components/Bag/Bag";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import RegisterProducts from "../Pages/RegisterProducts/RegProducts";
import StartScreen from "../Pages/StartScreen/StartScreen";
import ProductDetail from "../Pages/ProductDetail/productDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register-products" element={<RegisterProducts />} />
        <Route path="/" element={<StartScreen />} />

        <Route path="/product-detail/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
