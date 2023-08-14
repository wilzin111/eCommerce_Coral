import { useState, useEffect, useRef } from "react";

import right from "./../../Assets/Icons/chevron-right.svg";

import PersonlInfo from "./../PersonlInfo/PersonalInfo";
import MyOrder from "../MyOrder/MyOrder";
import Wishlist from "../Wishlist/wishlist";

export default function SideNav() {
  const [component, setComponent] = useState(0);
  const [start, setStart] = useState(false);

  if(window.screen.width < 900){
    if(start == false){
      setComponent(-1);
      setStart(true);
    }
    console.log("test " + component);
  }

  const PersonalInformation = useRef();
  const PersonalInformationSpan = useRef();
  const PersonalInformationImg = useRef();

  const myOrders = useRef();
  const myOrdersSpan = useRef();
  const myOrdersImg = useRef();

  const myWishlist = useRef();
  const myWishlistSpan = useRef();
  const myWishlistImg = useRef();

  useEffect(() => {
    const loggoutButton = document.getElementById("user_profile_logout");
    const orderSearch = document.getElementById("my_order_search");
    const userProfileH1 = document.getElementById("user_profile_h1");
    const breadCrumbImg = document.getElementById("breadCrumbImg");
    const breadCrumb = document.getElementById("breadCrumb");

    loggoutButton.classList.add("display_none");
    orderSearch.classList.add("display_none");
    userProfileH1.innerHTML = "Personal Information";
    breadCrumbImg.classList.add("display_none");
    breadCrumb.innerHTML = "";

    PersonalInformation.current.classList.remove(
      "user_profile_side_navigation_selector_enabled"
    );
    PersonalInformationSpan.current.classList.remove(
      "user_profile_side_navigation_text_enabled"
    );
    PersonalInformationImg.current.classList.remove("change_to_blue");

    myOrders.current.classList.remove(
      "user_profile_side_navigation_selector_enabled"
    );
    myOrdersSpan.current.classList.remove(
      "user_profile_side_navigation_text_enabled"
    );
    myOrdersImg.current.classList.remove("change_to_blue");

    myWishlist.current.classList.remove(
      "user_profile_side_navigation_selector_enabled"
    );
    myWishlistSpan.current.classList.remove(
      "user_profile_side_navigation_text_enabled"
    );
    myWishlistImg.current.classList.remove("change_to_blue");
    
    if (component === 0) {
      if(window.screen.width < 900) {
        console.log("teste");
      }
      loggoutButton.classList.remove("display_none");
      PersonalInformation.current.classList.add(
        "user_profile_side_navigation_selector_enabled"
      );
      PersonalInformationSpan.current.classList.add(
        "user_profile_side_navigation_text_enabled"
      );
      PersonalInformationImg.current.classList.add("change_to_blue");
    }
    if (component === 1) {
    }
    if (component === 2) {
      userProfileH1.innerHTML = "My Orders";
      myOrders.current.classList.add(
        "user_profile_side_navigation_selector_enabled"
      );
      myOrdersSpan.current.classList.add(
        "user_profile_side_navigation_text_enabled"
      );
      myOrdersImg.current.classList.add("change_to_blue");
      breadCrumbImg.classList.remove("display_none");
      breadCrumb.innerHTML = "My Orders";
      orderSearch.classList.remove("display_none");
    }
    if (component === 3) {

      myWishlist.current.classList.add(
        "user_profile_side_navigation_selector_enabled"
      );
      myWishlistSpan.current.classList.add(
        "user_profile_side_navigation_text_enabled"
      );
      myWishlistImg.current.classList.add("change_to_blue");

      if(window.screen.width < 900){
        setComponent(3)
      }
    }
    if (component === 4) {
    }
    if (component === 5) {
    }
    if (component === 6) {
    }

  }, [component]);

  
  


  return (
    <>
      <div className="user_profile_side_navigation">
        <button
          onClick={() => {
            setComponent(0);
          }}
          className="div_to_button flex_row align_center_justify_between"
        >
          <div
            ref={PersonalInformation}
            className="user_profile_side_navigation_selector user_profile_side_navigation_selector_enabled"
          ></div>
          <span
            ref={PersonalInformationSpan}
            className="user_profile_side_navigation_text"
          >
            Personal Information
          </span>
          <img ref={PersonalInformationImg} className="" src={right} />
        </button>
        <button
          onClick={() => {
            setComponent(1);
          }}
          className="div_to_button flex_row align_center_justify_between"
        >
          <div className="user_profile_side_navigation_selector"></div>
          <span className="user_profile_side_navigation_text">
            Refer and Earn
          </span>
          <img src={right} />
        </button>
        <button
          onClick={() => {
            setComponent(2);
          }}
          className="div_to_button flex_row align_center_justify_between"
        >
          <div
            ref={myOrders}
            className="user_profile_side_navigation_selector"
          ></div>
          <span
            ref={myOrdersSpan}
            className="user_profile_side_navigation_text"
          >
            My Orders
          </span>
          <img ref={myOrdersImg} src={right} />
        </button>
        <button
          onClick={() => {
            setComponent(3);
          }}
          className="div_to_button flex_row align_center_justify_between"
        >
          <div ref={myWishlist} className="user_profile_side_navigation_selector"></div>
          <span ref={myWishlistSpan} className="user_profile_side_navigation_text">My Wishlist</span>
          <img ref={myWishlistImg} src={right} />
        </button>
        <button
          onClick={() => {
            setComponent(4);
          }}
          className="div_to_button flex_row align_center_justify_between"
        >
          <div className="user_profile_side_navigation_selector"></div>
          <span className="user_profile_side_navigation_text">My Reviews</span>
          <img src={right} />
        </button>
        <button
          onClick={() => {
            setComponent(5);
          }}
          className="div_to_button flex_row align_center_justify_between"
        >
          <div className="user_profile_side_navigation_selector"></div>
          <span className="user_profile_side_navigation_text">
            My Address Book
          </span>
          <img src={right} />
        </button>
        <button
          onClick={() => {
            setComponent(6);
          }}
          className="div_to_button flex_row align_center_justify_between"
        >
          <div className="user_profile_side_navigation_selector"></div>
          <span className="user_profile_side_navigation_text">
            My Saved Cards
          </span>
          <img src={right} />
        </button>
      </div>

      {component === 0 ? <PersonlInfo /> : null}
      {component === 2 ? <MyOrder /> : null}
      {component === 3 ? <Wishlist component={setComponent} /> : null}
    </>
  );
}
