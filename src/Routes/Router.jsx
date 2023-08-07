import { Routes, Route, BrowserRouter, useParams } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Categories from "../Pages/Categories/Categories";
import Bag from "../Components/Bag/Bag";
import UserProfile from "../Pages/UserProfile/UserProfile";
import HandbagsPages from "../Pages/HandbagsPages/HandbagsPages";
import WatchesPages from "../Pages/WatchesPages/WatchesPages";
import SunGlassesPages from "../Pages/SunGlassesPages/SunGlassesPages";
import PersonalCarePages from "../Pages/PersonalCarePages/PersonalCarePages";
import SkinCarePages from "../Pages/SkinCarePages/SkinCarePages";
import JewelleryPages from "../Pages/JewelleryPages/JewelleryPages";
import ApparelsPages from "../Pages/ApparelsPage/ApparelsPage";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import RegisterProducts from "../Pages/RegisterProducts/RegProducts";
import StartScreen from "../Pages/StartScreen/StartScreen";
import Wishlist from "../Components/Wishlist/wishlist";
import Private from "./Private";
import ProductDetail from "../Pages/ProductDetail/productDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/profile"
          element={
            <Private>
              <UserProfile />
            </Private>
          }
        />
        <Route
          path="/bag"
          element={
            <Private>
              <Bag />
            </Private>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/register-products"
          element={
            <Private>
              <RegisterProducts />
            </Private>
          }
        />
        <Route path="/startScreen" element={<StartScreen />} />
        <Route
          path="/wishlist"
          element={
            <Private>
              <Wishlist />
            </Private>
          }
        />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/products/handbags" element={<HandbagsPages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
