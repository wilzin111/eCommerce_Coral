import { useState, useEffect } from "react";

import "./UserProfile.css";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import ProfileInfo from "../../Components/ProfileInfo/ProfileInfo";

function UserProfile() {

  const [width, setWidth] = useState(window.screen.width)
  
  useEffect(() => {
    function handleResize() {
      setWidth(window.screen.width)
    }
    window.addEventListener('resize', handleResize)
  })

  return (
    <>
      <Header />

      <ProfileInfo />

      {width >= 901 ? <Footer /> :null}
      
      <Navbar page='Profile'/>
    </>
  );
}
export default UserProfile;
