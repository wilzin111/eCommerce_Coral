import { useState } from "react";
import { Link } from "react-router-dom";

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
import del from "./../../Assets/Icons/del.svg";
import smallMinus from "./../../Assets/Icons/small-minus.svg";
import smallPlus from "./../../Assets/Icons/small-plus.svg";
import crossSmall from "./../../Assets/Icons/cross-small.svg";
import logo from "./../../Assets/Images_header/logo.png";
import testImage from "./../../Assets/Images_header/testImage.png";
import Drawer from "../Drawer/Drawer";

//pages

import wishlistPage from '../Wishlist/wishlist'

function Header() {
  const [openBag, setOpenBag] = useState(false);
  const [bagQuantity, setBagQuantity] = useState(1);

  function bagQuantityScroll(e) {
    document.getElementById("AllProducts").classList.add("stop-scrolling");
    console.log(AllProducts.classList);
    if (e.deltaY < 0) {
      setBagQuantity(bagQuantity + 1);
    } else {
      if (bagQuantity > 1) {
        setBagQuantity(bagQuantity - 1);
      }
    }
    document.getElementById("AllProducts").classList.remove("stop-scrolling");
  }

  function handleClick() {
    console.log("1");
  }
  function Bag() {
    if (openBag) {
      document.body.classList.add("stop-scrolling");

      return (
        <div className="bag_modal">
          <div className="bag_background">
            <button className="bag_return" onClick={() => setOpenBag(false)}>
              <img className="icon change_to_blue" src={del}></img>
              <span>Back</span>
            </button>

            <div id="AllProducts" className="bag_all_products">
              <div className="bag_products">
                <img src={testImage} className="bag_product_image"></img>

                <div className="bag_product_info">
                  <h4 className="bag_product_brand">Marca</h4>
                  <h5 className="bag_product_name">Produto</h5>

                  <div onWheel={bagQuantityScroll} className="bag_quantity">
                    <button
                      onClick={() =>
                        bagQuantity > 1
                          ? setBagQuantity(bagQuantity - 1)
                          : setBagQuantity(bagQuantity)
                      }
                      className="button_icon button_hover"
                    >
                      <img src={smallMinus} className="icon"></img>
                    </button>
                    <span>{bagQuantity}</span>
                    <button
                      onClick={() => setBagQuantity(bagQuantity + 1)}
                      className="button_icon button_hover"
                    >
                      <img src={smallPlus} className="icon"></img>
                    </button>
                  </div>
                </div>

                <div className="bag_products_remove">
                  <button className="button_icon">
                    <img src={crossSmall} className="icon"></img>
                  </button>
                  <span>$54.69</span>
                </div>
              </div>

              <hr className="bag_bar" />

              <div className="bag_products">
                <img src={testImage} className="bag_product_image"></img>

                <div className="bag_product_info">
                  <h4 className="bag_product_brand">Marca</h4>
                  <h5 className="bag_product_name">Produto</h5>

                  <div onWheel={bagQuantityScroll} className="bag_quantity">
                    <button
                      onClick={() =>
                        bagQuantity > 1
                          ? setBagQuantity(bagQuantity - 1)
                          : setBagQuantity(bagQuantity)
                      }
                      className="button_icon button_hover"
                    >
                      <img src={smallMinus} className="icon"></img>
                    </button>
                    <span>{bagQuantity}</span>
                    <button
                      onClick={() => setBagQuantity(bagQuantity + 1)}
                      className="button_icon button_hover"
                    >
                      <img src={smallPlus} className="icon"></img>
                    </button>
                  </div>
                </div>

                <div className="bag_products_remove">
                  <button className="button_icon">
                    <img src={crossSmall} className="icon"></img>
                  </button>
                  <span>$54.69</span>
                </div>
              </div>

              <hr className="bag_bar" />

              <div className="bag_products">
                <img src={testImage} className="bag_product_image"></img>

                <div className="bag_product_info">
                  <h4 className="bag_product_brand">Marca</h4>
                  <h5 className="bag_product_name">Produto</h5>

                  <div onWheel={bagQuantityScroll} className="bag_quantity">
                    <button
                      onClick={() =>
                        bagQuantity > 1
                          ? setBagQuantity(bagQuantity - 1)
                          : setBagQuantity(bagQuantity)
                      }
                      className="button_icon button_hover"
                    >
                      <img src={smallMinus} className="icon"></img>
                    </button>
                    <span>{bagQuantity}</span>
                    <button
                      onClick={() => setBagQuantity(bagQuantity + 1)}
                      className="button_icon button_hover"
                    >
                      <img src={smallPlus} className="icon"></img>
                    </button>
                  </div>
                </div>

                <div className="bag_products_remove">
                  <button className="button_icon">
                    <img src={crossSmall} className="icon"></img>
                  </button>
                  <span>$54.69</span>
                </div>
              </div>

              <hr className="bag_bar2" />

            </div>
          </div>
        </div>
      );
    }
    return document.body.classList.remove("stop-scrolling");
  }

  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <Drawer isOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <section className="header">
        <div className="header-mobile">
          <div className="header_menu">
            <button onClick={() => { setDrawerOpen(true) }} className="header-btn-menu">
              <img src={menu} className="icon change_to_blue" />
            </button>
            <h1 className="header-h1-home"><Link to={'/'}>Home</Link></h1>
          </div>
          <div className="header_icons">
            <button onClick={handleClick}>
              <img src={add} className="icon change_to_blue" />
            </button>
            <button onClick={handleClick}>
              <img src={search} className="icon change_to_blue" />
            </button>
            <button onClick={handleClick}>
              <img src={notification} className="icon change_to_blue" />
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
              <img src={search} />
              <input
                type="search"
                placeholder="Search for products or brands....."
              ></input>
            </div>
            <div className="header_icons change_to_blue">
              <button onClick={handleClick}>
                <Link to={wishlistPage}><img src={wishlist} className="icon" /></Link>
              </button>
              <Link to="/profile" onClick={handleClick}>
                <img src={profile} className="icon" />
              </Link>
              <button onClick={() => setOpenBag(true)}>
                <img src={bag} className="icon" />
              </button>
            </div>
          </div>
        </div>
        <Bag isOpen={openBag} />
      </section>
    </>
  );
}

export default Header;
