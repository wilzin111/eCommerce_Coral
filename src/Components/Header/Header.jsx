import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// CSS
import "./header.css";

// images
import menu from "./../../Assets/Icons/menu.svg";
import add from "./../../Assets/Icons/add-to-homescreen.svg";
import search from "./../../Assets/Icons/search.svg";
import notification from "./../../Assets/Icons/notification.svg";
import wishlistIcon from "./../../Assets/Icons/wishlist.svg";
import profile from "./../../Assets/Icons/profile.svg";
import bag from "./../../Assets/Icons/bag.svg";
import del from "./../../Assets/Icons/del.svg";
import smallMinus from "./../../Assets/Icons/small-minus.svg";
import smallPlus from "./../../Assets/Icons/small-plus.svg";
import crossSmall from "./../../Assets/Icons/cross-small.svg";
import logo from "./../../Assets/Images_header/logo.png";
import testImage from "./../../Assets/Images_header/testImage.png";
import Drawer from "../Drawer/Drawer";
import { DataUserContext } from "../../Contexts/dataUser";
import heartEmpty from "../../Assets/Icons/wishlist.svg";
import heartFill from "../../Assets/Icons/wishlist-fill.svg";

// Contexts 
import { productContext } from "../../Contexts/productsContext";

function Header() {
  const [openBag, setOpenBag] = useState(false);
  const [bagQuantity, setBagQuantity] = useState(1);

  function bagQuantityScroll(e) {
    document.getElementById("AllProducts").classList.add("stop-scrolling");
    //console.log(AllProducts.classList);
    if (e.deltaY < 0) {
      setBagQuantity(bagQuantity + 1);
    } else {
      if (bagQuantity > 1) {
        setBagQuantity(bagQuantity - 1);
      }
    }
    document.getElementById("AllProducts").classList.remove("stop-scrolling");
  }

  function handleClick() { }
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

  const { isLog } = useContext(DataUserContext);
  const { produtos } = useContext(productContext);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchBar, setSearchBar] = useState("");
  const [productsSearched, setProductsSearched] = useState([]);

  useEffect(() => {

    let a = document.getElementById("search_modal")
    let re = new RegExp(`${searchBar.normalize("NFD").replace(/[\u0300-\u036f]/g, '')}`, "gi");

    if(searchBar.length < 1) {
      a.classList.add("header_search_modal_none");
    } else { 
      //document.body.classList.add("stop-scrolling")
    }
    if (searchBar.length > 0) {
      let produtosFiltered = produtos.filter((product) => {
        return product.name.match(re);
      });
      setProductsSearched(produtosFiltered);
    };
  },[searchBar]);

  //useEffect(() => {
  //},[productsSearched]);

  function handleSearchChange(e) {
    let a = document.getElementById("search_modal")
    setSearchBar(e.target.value);
    if (searchBar === "") {
      a.classList.remove("header_search_modal_none");
    } else {
      document.body.classList.add("stop-scrolling");
    }
  };

  return (
    <>
      <div id="search_modal" className="header_search_modal header_search_modal_none">
        <div className="header_search_modal_products">
          <section className="products-wishlist" id="products-wishlist">

            {productsSearched.map((product) => (
              <div key={product.id} className="wishlist-product search_product">
                <div className="wishlist-product-img">
                  <Link
                    to={`/product-detail/${product.id}`}
                    key={product.id}
                    className="product-link">
                    <img src={product.url} alt={product.name} />
                  </Link>
                </div>
                <div className="wishlist-product-details">
                  <h3 className="wishlist-product-name">{product.name}</h3>
                  
                  <Link
                    to={`/product-detail/${product.id}`}
                    key={product.id}
                    className="product-link"
                  >
                    <p className="wishlist-product-subname">{product.subname}</p>
                    <span className="wishlist-product-price">${product.price}</span>
                  </Link>
                </div>
              </div>
            ))}

          </section>
        </div>
      </div>
      <Drawer isOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <section className="header">
        <div className="header-mobile">
          <div className="header_menu">
            <button
              onClick={() => {
                setDrawerOpen(true);
              }}
              className="header-btn-menu"
            >
              <img src={menu} className="icon change_to_blue" />
            </button>
            <h1 className="header-h1-home">
              <Link to={"/"}>Home</Link>
            </h1>
          </div>
          <div className="header_icons">
            <button>
              <img src={add} className="icon change_to_blue" />
            </button>
            <button>
              <img src={search} className="icon change_to_blue" />
            </button>
            {isLog ? (
              <>
                <button>
                  <img src={notification} className="icon change_to_blue" />
                </button>
              </>
            ) : (
              <>
                <div className="heade-btn-notLog">
                  <Link to={"/startScreen"}>Get Started</Link>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="header-desktop">
          <div className="nav-category">
            <Link to={"/"}>
              <img src={logo} className="logo" />
            </Link>
            <div className="nav-category-text">
              <Link to={"/products/handbags"}>Handbags</Link>
              <Link to={"/products/watches"}>Watches</Link>
              <Link to={"/products/skincare"}>Skincare</Link>
              <Link to={"/products/jewellery"}>Jewellery</Link>
              <Link to={"/products/apparels"}>Apparels</Link>
            </div>
          </div>

          <div className="flex">
            <form style={{zIndex: "1"}} className="search-bar">
              <button className="search_bar" type="submit"><img src={search} /></button>
              <input
                type="search"
                placeholder="Search for products or brands....."
                onChange={(handleSearchChange)}
                value={searchBar}
              ></input>
            </form>
            <div className="header_icons change_to_blue">
              {isLog ? (
                <>
                  <Link to='/wishlist' onClick={handleClick}>
                    <img src={wishlistIcon} className="icon" />
                  </Link>
                  <Link to="/profile" onClick={handleClick}>
                    <img src={profile} className="icon" />
                  </Link>
                  <button onClick={() => setOpenBag(true)}>
                    <img src={bag} className="icon" />
                  </button>
                </>
              ) : (
                <>
                  <div className="heade-btn-notLog">
                    <Link to={"/startScreen"}>Get Started</Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <Bag isOpen={openBag} />
      </section>
    </>
  );
}

export default Header;
