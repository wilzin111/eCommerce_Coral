// CSS
import "./header.css";

// images
import menu from "./../../Assets/Icons/menu.svg";
import add from "./../../Assets/Icons/add-to-homescreen.svg";
import search from "./../../Assets/Icons/search.svg";
import notification from "./../../Assets/Icons/notification.svg";
import wishlist from "./../../Assets/Icons/wishlist.svg";
import profile from "./../../Assets/Icons/profile.svg";
import bag from "./../../Assets/Icons/bag.svg";

import logo from "./../../Assets/Images header/logo.png";

function Header() {
  function handleClick() {
    console.log("clicou");
  }

  return (
    <section className="header">
      <div className="header-mobile">
        <div className="header_menu">
          <img src={menu} className="icon" />
          <h1 className="">Home</h1>
        </div>
        <div className="header_icons">
          <button onClick={handleClick}>
            <img src={add} className="icon" />
          </button>
          <button onClick={handleClick}>
            <img src={search} className="icon"/>
          </button>
          <button onClick={handleClick}>
            <img src={notification} className="icon" />
          </button>
        </div>
      </div>

      <div className="header-desktop">
        <div className="nav-category">
          <img src={logo} className="logo" />
          <div className="nav-category-text">
            <span>Handbags</span>
            <span>Watches</span>
            <span>Skincare</span>
            <span>Jewellery</span>
            <span>Apparels</span>
          </div>
        </div>

        <div className="flex">
          <div className="search-bar">
            <img src={search}/>
            <input
              type="search"
              placeholder="Search for products or brands....."
            ></input>
          </div>
          <div className="header_icons">
            <button onClick={handleClick}>
              <img src={wishlist} className="icon" />
            </button>
            <button onClick={handleClick}>
              <img src={profile} className="icon" />
            </button>
            <button onClick={handleClick}>
              <img src={bag} className="icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
