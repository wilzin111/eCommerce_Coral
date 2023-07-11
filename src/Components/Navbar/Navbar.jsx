import "./navbar.css";
import homeGray from "../../Assets/navbar/home-gray.svg";
import categGray from "../../Assets/navbar/categories-gray.svg";
import profileGray from "../../Assets/navbar/profile-gray.svg";
import bagGray from "../../Assets/navbar/bag-gray.svg";

export default function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div>
          <img src={homeGray} alt="home icon" />
        </div>
        <div>
          <img src={categGray} alt="categories icon" />
        </div>
        <div>
          <img src={profileGray} alt="profile icon" />
        </div>
        <div>
          <img src={bagGray} alt="bag icon" />
        </div>
      </div>
    </>
  );
}
