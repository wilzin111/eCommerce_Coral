import "./UserProfile.css";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import ProfileInfo from "../../Components/ProfileInfo/ProfileInfo";

function UserProfile() {

  return (
    <>
      <Header />

      <ProfileInfo />

      <Footer />
      <Navbar page='Profile'/>
    </>
  );
}
export default UserProfile;
