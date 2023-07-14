import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import UserProfile from "../Pages/UserProfile/UserProfile"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='about' element={<About/>}/>
                <Route path='userprofile' element={<UserProfile/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router