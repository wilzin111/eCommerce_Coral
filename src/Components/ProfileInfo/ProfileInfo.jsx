import logout from "./../../Assets/Icons/logout.svg";
import rightSmall from "./../../Assets/Icons/chevron-right-small.svg";
import left from "./../../Assets/Icons/chevron-left.svg";
import right from "./../../Assets/Icons/chevron-right.svg";
import profile from "./../../Assets/Icons/profile.svg";

import SideNav from "./../SideNav/SideNav";

export default function ProfileInfo() {
  return (
    <>
      <section className="user_profile">
        <div className="user_profile_breadcrumb">
          <span className="text_low_emphasis text_primary">Home</span>
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
          >
            <img className="icon change_to_blue" src={logout} />
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

          <div className="user_information flex_row">
            <img
              src={profile}
              alt=""
              className="profile_photo"
              style={{ marginRight: "max(5.41%, 1rem)" }}
            />
            <div className="flex-row">
              <span className="user_profile_container_title">
                Nome Sobrenome
              </span>
              <br />
              <span className="text_low_emphasis2">email@email.com</span>
              <br />
              <span className="text_low_emphasis2">Numero</span>
            </div>
            <div className="flex_row absolute" style={{ right: "1rem" }}>
              <img className="change_to_gray" src={right} />
            </div>
          </div>

          <SideNav />
          <button
            id="user_profile_logout"
            type="button"
            className="button_icon user_profile_logout"
          >
            <img className="icon change_to_blue" src={logout} />
            <span>Logout</span>
          </button>
        </div>
      </section>
    </>
  );
}
