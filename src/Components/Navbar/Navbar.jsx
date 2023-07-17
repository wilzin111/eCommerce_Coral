import "./navbar.css";
import homeGray from "../../Assets/navbar/home-gray.svg";
import categGray from "../../Assets/navbar/categories-gray.svg";
import profileGray from "../../Assets/navbar/profile-gray.svg";
import bagGray from "../../Assets/navbar/bag-gray.svg";
import homeBlue from "../../Assets/navbar/home-blue.svg";
import categBlue from "../../Assets/navbar/categories-blue.svg";
import profileBlue from "../../Assets/navbar/profile-blue.svg";
import bagBlue from "../../Assets/navbar/bag-blue.svg";
import { Link } from "react-router-dom";

export default function Navbar({ page }) {
  return (
    <>
      <div className="navbar-container">
        <Link to={"/"}>
          <img src={page == "Home" ? homeBlue : homeGray} alt="home icon" />
          {page == "Home" && <span>Home</span>}
        </Link>
        <Link to={"/categories"}>
          <img
            src={page == "Categories" ? categBlue : categGray}
            alt="categories icon"
          />
          {page == "Categories" && <span>Categories</span>}
        </Link>
        <Link to={"/profile"}>
          <img
            src={page == "Profile" ? profileBlue : profileGray}
            alt="profile icon"
          />
          {page == "Profile" && <span>Profile</span>}
        </Link>
        <Link to={"/bag"}>
          <img src={page == "Bag" ? bagBlue : bagGray} alt="bag icon" />
          {page == "Bag" && <span>Bag</span>}
        </Link>
      </div>
    </>
  );
}
