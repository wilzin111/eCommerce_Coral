import { useState } from "react";

import "./UserProfile.css";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

import logout from "./../../Assets/Icons/logout.svg";
import right from "./../../Assets/Icons/chevron-right.svg";
import rightSmall from "./../../Assets/Icons/chevron-right-small.svg";
import profile from "./../../Assets/Icons/profile.svg";
import trash from "./../../Assets/Icons/delete.svg";
import eye from "./../../Assets/Icons/eye.svg";
import cross from "./../../Assets/Icons/cross.svg";

function UserProfile() {
  const [passwordIcon, setPasswordIcon] = useState(eye);

  function handleUpload(e) {
    e.preventDefault();
    console.log("Uploading");
  }
  function handleTrash(e) {
    e.preventDefault();
    console.log("Trash");
  }
  function handleTogglePasswordVisibility() {
    var newPassword = document.getElementById("newPassword");
    if (newPassword.type === "password") {
      newPassword.type = "text";
      setPasswordIcon(cross);
    } else {
      newPassword.type = "password";
      setPasswordIcon(eye);
    }
  }

  return (
    <>
      <Header />

      <section className="user_profile">
        <div className="user_profile_breadcrumb">
          <span className="text_low_emphasis text_primary">Home</span>
          <img src={rightSmall} />
          <span className="text_low_emphasis">User Profile</span>
        </div>

        <div className="user_profile_logout_section flex_row align_center_justify_between">
          <p className="user_profile_h1">Personal Information</p>
          <button type="button" className="button_icon user_profile_logout">
            <img className="icon change_to_blue" src={logout} />
            <span>Logout</span>
          </button>
        </div>

        <div className="flex_row">
          <div className="user_profile_side_navigation">
            <button className="div_to_button flex_row align_center_justify_between">
              <div className="user_profile_side_navigation_selector user_profile_side_navigation_selector_enabled "></div>
              <span className="user_profile_side_navigation_text user_profile_side_navigation_text_enabled ">
                Personal Information
              </span>
              <img className="change_to_blue" src={right} />
            </button>
            <button className="div_to_button flex_row align_center_justify_between">
              <div className="user_profile_side_navigation_selector"></div>
              <span className="user_profile_side_navigation_text">
                Refer and Earn
              </span>
              <img src={right} />
            </button>
            <button className="div_to_button flex_row align_center_justify_between">
              <div className="user_profile_side_navigation_selector"></div>
              <span className="user_profile_side_navigation_text">
                My Orders
              </span>
              <img src={right} />
            </button>
            <button className="div_to_button flex_row align_center_justify_between">
              <div className="user_profile_side_navigation_selector"></div>
              <span className="user_profile_side_navigation_text">
                My Wishlist
              </span>
              <img src={right} />
            </button>
            <button className="div_to_button flex_row align_center_justify_between">
              <div className="user_profile_side_navigation_selector"></div>
              <span className="user_profile_side_navigation_text">
                My Reviews
              </span>
              <img src={right} />
            </button>
            <button className="div_to_button flex_row align_center_justify_between">
              <div className="user_profile_side_navigation_selector"></div>
              <span className="user_profile_side_navigation_text">
                My Address Book
              </span>
              <img src={right} />
            </button>
            <button className="div_to_button flex_row align_center_justify_between">
              <div className="user_profile_side_navigation_selector"></div>
              <span className="user_profile_side_navigation_text">
                My Saved Cards
              </span>
              <img src={right} />
            </button>
          </div>

          <div className="user_profile_container">
            <div>
              <p className="user_profile_container_title">
                Personal Information
              </p>
              <div className="user_profile_separator"></div>
            </div>

            <form className="user_profile_picture">
              <img src={profile} className="profile_photo" />
              <button onClick={handleUpload} className="profile_button_blue">
                Upload
              </button>
              <button onClick={handleTrash} className="profile_photo_trash">
                <img src={trash} className="icon" />
                <span>Delete</span>
              </button>
            </form>

            <form className="user_profile_info flex_column">
              <div className="flex_row">
                <div className="user_profile_info_inputs flex_column padding_right_2-06rem">
                  <label>First Name</label>
                  <input
                    placeholder=""
                    className="user_profile_info_input width_18rem"
                    type="text"
                    required
                  />
                </div>

                <div className="user_profile_info_inputs flex_column">
                  <label>Last Name</label>
                  <input
                    placeholder=""
                    className="user_profile_info_input width_18rem"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="user_profile_info_inputs flex_column">
                <label>Email</label>
                <input
                  className="user_profile_info_input width_38rem"
                  type="text"
                  value="email@email.com"
                  readOnly
                />
              </div>

              <div className="user_profile_info_inputs flex_column">
                <label>Mobile Number</label>
                <div className="flex_row column_gap_0-5rem">
                  <input
                    className="user_profile_info_input width_5rem"
                    type="number"
                    placeholder="+1"
                  />
                  <input
                    className="user_profile_info_input width_19rem"
                    type="tel"
                    placeholder="xxx-xxx-xxxx"
                    inputmode="numeric"
                    autoComplete="on"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                  />
                </div>
              </div>

              <div className="user_profile_info_inputs flex_column padding_top_1-44rem ">
                <label>Date of birth</label>
                <input
                  className="user_profile_info_input margin_bottom_2-5rem width_19rem"
                  type="date"
                  required
                />
              </div>

              <div>
                <p className="user_profile_container_title">
                  Personal Information
                </p>
                <div className="user_profile_separator"></div>

                <div className="flex_column padding_top_1-5rem row_gap_0-5rem margin_bottom_1rem">
                  <label>Current Password</label>
                  <input
                    className="user_profile_info_input width_18rem"
                    type="Password"
                    required
                  />
                </div>

                <div className="flex_column relative width_fitcontent row_gap_0-5rem margin_bottom_1rem">
                  <label>New Password</label>
                  <input
                    id="newPassword"
                    className="user_profile_info_input width_18rem"
                    type="Password"
                    required
                  />
                  <img
                    onClick={handleTogglePasswordVisibility}
                    src={passwordIcon}
                    className="icon user_profile_show_password"
                  />
                </div>

                <div className="flex_column row_gap_0-5rem margin_bottom_2rem">
                  <label>Confirm Password</label>
                  <input
                    className="user_profile_info_input width_18rem"
                    type="Password"
                    required
                  />
                </div>
              </div>

              <button
                className="profile_button_blue align_self_end"
                type="submit"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default UserProfile;
