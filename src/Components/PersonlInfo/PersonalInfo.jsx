import { useState } from "react";

import profile from "./../../Assets/Icons/profile.svg";
import trash from "./../../Assets/Icons/delete.svg";
import eye from "./../../Assets/Icons/eye.svg";
import cross from "./../../Assets/Icons/cross.svg";

export default function PersonalInfo() {
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
    <div className="user_profile_container">
      <div>
        <p className="user_profile_container_title">Personal Information</p>
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
              inputMode="numeric"
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
          <p className="user_profile_container_title">Personal Information</p>
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

        <button className="profile_button_blue align_self_end" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
}
