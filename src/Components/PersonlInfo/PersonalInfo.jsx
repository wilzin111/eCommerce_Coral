import { useContext, useState } from "react";
import trash from "./../../Assets/Icons/delete.svg";
import eye from "./../../Assets/Icons/eye.svg";
import cross from "./../../Assets/Icons/cross.svg";
import { DataUserContext } from "../../Contexts/dataUser";
import { db, storage } from "../../FireBaseConnection";
import { getDownloadURL, ref } from "firebase/storage";

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
  const { dataUser } = useContext(DataUserContext)
  const [urlImgUserProfile, setUrlImgUserProfile] = useState('');
  const [userFirstName, setUserFirstName] = useState(dataUser.firstName ? dataUser.firstName : '')
  const [userLastName, setUserLastName] = useState(dataUser.lastName ? dataUser.lastName : '')
  const [userDDD, setUserDDD] = useState(dataUser.DDD ? dataUser.DDD : '1')
  const [userNumber, setUserNumber] = useState(dataUser.Number ? dataUser.Number : 'xxxxx-xxxx')
  const [userNiver, setUserNiver] = useState(dataUser.niver ? dataUser.niver : '')
  const [userCurrentPassword, setUserCurrentPassword] = useState('')
  const [userNewPassword, setUserNewPassword] = useState('')
  const [userConfirmeNewPassword, setUserConfirmeNewPassword] = useState('')
  const regexPasswordN = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\-])(?=.*[A-Z]).{8,}$/;

  const handleUploadImage = async () => {
    const imagemRefUser = ref(storage, `images/users/${dataUser.uid}`);
    const downloadURLUser = await getDownloadURL(imagemRefUser);
    setUrlImgUserProfile(downloadURLUser);
  };

  if (!urlImgUserProfile) {
    handleUploadImage();
  }

  async function handleUpdate() {
    if (userFirstName == '' ||
      userLastName == '' ||
      userNiver == '' ||
      userCurrentPassword == '' ||
      userNewPassword == '' ||
      userConfirmeNewPassword == '') {

      console.log('Preencha os campos');
      return;
    }
    else if (userCurrentPassword != dataUser.signupPassword) {
      console.log('Senha incorreta');
      return;
    }
    else if (!regexPasswordN.test(userNewPassword)) {
      console.log("The password must contain one special character, one uppercase letter, and be at least 8 characters long.");
      return;
    }
    else if (userConfirmeNewPassword != userNewPassword) {
      console.log('Senhas devem ser igual');
      return;
    } else {
      await db.collection('users').doc(dataUser.uid)
        .update({
          firstName: userFirstName,
          lastName: userLastName,
          niver: userNiver,
          signupPassword: userNewPassword
        })
        .then(() => {
          console.log('Perfil atualizado');
        })
        .catch(e => {
          console.log('Não foi possivel atualizar tente mais tarde');
        })
    }
  }

  return (
    <div className="user_profile_container">
      <div>
        <p className="user_profile_container_title">Personal Information</p>
        <div className="user_profile_separator"></div>
      </div>

      <form className="user_profile_picture">
        <img src={urlImgUserProfile ? urlImgUserProfile : './imgUserNone.jpg'} className="profile_photo" />
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
          <div className="user_profile_info_inputs flex_column padding_right_2-06rem width_18rem">
            <label>First Name</label>
            <input
              value={userFirstName}
              className="user_profile_info_input width_18rem"
              type="text"
              onChange={(e) => setUserFirstName(e.target.value)}
            />
          </div>

          <div className="user_profile_info_inputs flex_column width_18rem">
            <label>Last Name</label>
            <input
              value={userLastName}
              className="user_profile_info_input width_18rem"
              type="text"
              onChange={(e) => setUserLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="user_profile_info_inputs flex_column">
          <label>Email</label>
          <input
            className="user_profile_info_input width_38rem"
            type="text"
            value={dataUser.signupEmail}
          />
        </div>

        <div className="user_profile_info_inputs flex_column">
          <label>Mobile Number</label>
          <div className="flex_row column_gap_0-5rem">
            <input
              className="user_profile_info_input width_5rem"
              type="number"
              value={userDDD}
              onChange={(e) => setUserDDD(e.target.value)}
            />
            <input
              className="user_profile_info_input width_19rem"
              type="tel"
              value={userNumber}
              // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              onChange={(e) => setUserNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="user_profile_info_inputs flex_column padding_top_1-44rem ">
          <label>Date of birth</label>
          <input
            className="user_profile_info_input margin_bottom_2-5rem width_19rem"
            type="date"
            value={userNiver}
            onChange={(e) => setUserNiver(e.target.value)}
          />
        </div>

        <div>
          <p className="user_profile_container_title">Change Password</p>
          <div className="user_profile_separator"></div>

          <div className="flex_column padding_top_1-5rem row_gap_0-5rem margin_bottom_1rem">
            <label>Current Password</label>
            <input
              className="user_profile_info_input width_18rem"
              type="Password"
              value={userCurrentPassword}
              onChange={(e) => setUserCurrentPassword(e.target.value)}
            />
          </div>

          <div className="flex_column relative width_fitcontent row_gap_0-5rem margin_bottom_1rem width_18rem">
            <label>New Password</label>
            <input
              id="newPassword"
              className="user_profile_info_input width_18rem"
              type="Password"
              value={userNewPassword}
              onChange={(e) => setUserNewPassword(e.target.value)}
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
              value={userConfirmeNewPassword}
              onChange={(e) => setUserConfirmeNewPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="align_self_end">
          <button className="profile_button_blue" type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
