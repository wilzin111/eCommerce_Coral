import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About";
import Categories from "../Pages/Categories/Categories";
import Bag from "../Components/Bag/Bag";
import UserProfile from "../Pages/UserProfile/UserProfile"
import HandbagsPages from '../Pages/HandbagsPages/HandbagsPages'
import WatchesPages from '../Pages/WatchesPages/WatchesPages'
import SunGlassesPages from '../Pages/SunGlassesPages/SunGlassesPages'
import PersonalCarePages from '../Pages/PersonalCarePages/PersonalCarePages'
import SkinCarePages from '../Pages/SkinCarePages/SkinCarePages'
import JewelleryPages from '../Pages/JewelleryPages/JewelleryPages'
import ApparelsPages from '../Pages/ApparelsPage/ApparelsPage'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/products/personalcare" element={<PersonalCarePages/>}/>
        <Route path="/products/handbags" element={<HandbagsPages/>}/>
        <Route path="/products/watches" element={<WatchesPages/>}/>
        <Route path="/products/sunglasses" element={<SunGlassesPages/>}/>
        <Route path="/products/skincare" element={<SkinCarePages/>}/>
        <Route path="/products/jewellery" element={<JewelleryPages/>}/>
        <Route path="/products/apparels" element={<ApparelsPages/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;