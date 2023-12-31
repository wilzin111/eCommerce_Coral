import logoutimg from "./../../Assets/Icons/logout.svg";
import rightSmall from "./../../Assets/Icons/chevron-right-small.svg";
import left from "./../../Assets/Icons/chevron-left.svg";
import right from "./../../Assets/Icons/chevron-right.svg";
import SideNav from "./../SideNav/SideNav";
import { useContext, useState, useNavigate } from "react";
import { DataUserContext } from "../../Contexts/dataUser";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../FireBaseConnection";
import { Link } from "react-router-dom";

export default function ProfileInfo() {
  const { dataUser, logout } = useContext(DataUserContext);
  const [imguser, setImgUser] = useState("");
  const fullNumber = dataUser.DDD + " " + dataUser.Number;
  if (dataUser.uid) {
    const handleUploadImage = async (e) => {
      await getDownloadURL(ref(storage, `images/users/${e}`)).then((value) => {
        setImgUser(value);
      });
    };

    if (!imguser) {
      handleUploadImage(dataUser.uid);
    }
  }

  return (
    <>
      <section className="user_profile">
        <div className="user_profile_breadcrumb">
          <Link
            to={"/"}
            className="text_low_emphasis text_primary"
            style={{ marginLeft: 0 + "px" }}
          >
            Home
          </Link>
          <img src={rightSmall} />
          <span className="text_low_emphasis">User Profile</span>
          <img id="breadCrumbImg" className="display_none" src={rightSmall} />
          <span id="breadCrumb" className="text_low_emphasis"></span>
        </div>

        <div className="user_profile_logout_section flex_row align_center_justify_between">
          <p id="user_profile_h1" className="user_profile_h1">
            Personal Information
          </p>
          <button
            id="user_profile_logout"
            type="button"
            className="button_icon user_profile_logout display_none"
            onClick={logout}
          >
            <img className="icon change_to_blue" src={logoutimg} />
            <span>Logout</span>
          </button>

          <div id="my_order_search" className="flex_row display_none">
            <img src={left} style={{ marginRight: "0.5rem" }}></img>
            <input
              className="my_order_search"
              placeholder="Search"
              type="search"
            />
          </div>
        </div>

        <div className="flex_row">
          <SideNav />
        </div>
      </section>

      <section className="user_profile_mobile flex_column">
        <div className="user_grid" style={{ display: "grid" }}>
          <p
            className="user_profile_container_title"
            style={{ color: "#1b4b66" }}
          >
            Profile
          </p>

          <div className="user_information flex_row relative">
            <img
              src={imguser ? imguser : "./imgUserNone.jpg"}
              alt=""
              className="profile_photo"
              style={{ marginRight: "max(5.41%, 1rem)" }}
            />
            <div className="flex-row">
              <span className="user_profile_container_title">
                {dataUser.firstName}
              </span>
              <br />
              <span className="text_low_emphasis2">{dataUser.signupEmail}</span>
              <br />
              <span className="text_low_emphasis2">
                {fullNumber ? fullNumber : ""}
              </span>
            </div>
            <div className="flex_row absolute" style={{ right: "0.5rem" }}>
              <img className="change_to_gray" src={right} />
            </div>
          </div>

          <SideNav />
          <button
            id="user_profile_logout"
            type="button"
            className="button_icon user_profile_logout"
            onClick={logout}
          >
            <img className="icon change_to_blue" src={logoutimg} />
            <span>Logout</span>
          </button>
        </div>
      </section>
    </>
  );
}
