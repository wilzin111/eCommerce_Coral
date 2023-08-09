import { Link } from "react-router-dom";
import "./Signup.css";
import eye from "./../../Assets/Icons/eye.svg";
import cross from "./../../Assets/Icons/cross.svg";
import { useRef, useState } from "react";
import { db, auth, storage } from "../../FireBaseConnection";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable } from "firebase/storage";
import { error, success, warn } from "../../Hooks/Toastify/Toastify";

const Signup = () => {
  const navigatS = useNavigate();
  const inputRef = useRef(null);
  const [userImg, setUserImg] = useState("");
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNiver, setUserNiver] = useState("");
  const [userDDD, setUserDDD] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)


  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const imgReceived = e.target.files[0];
    setUserImg(imgReceived);
  };
  //letra maiuscula nome
  function capitalizeFirstName(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  //letra maiuscula sobrenome
  function capitalizeLastName(e) {
    let LastNameList = e.split(" ");

    for (let i = 0; i < LastNameList.length; i++) {
      let currentLastName = LastNameList[i];
      LastNameList[i] =
        currentLastName.charAt(0).toUpperCase() + currentLastName.slice(1);
    }
    return LastNameList.join(" ");
  }
  const capitalizedfirstName = capitalizeFirstName(userName);
  const capitalizedLastName = capitalizeLastName(userLastName);

  const regexPassword = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\-])(?=.*[A-Z]).{8,}$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleImage(e) {
    if (!userImg) {
      warn("nenhuma foto cadastrada");
      return;
    }
    const storageRef = ref(storage, `images/users/${e}`);
    const uploadTask = uploadBytesResumable(storageRef, userImg);
  }

  async function handleRegister() {
    if (
      userName == "" ||
      userLastName == "" ||
      userEmail == "" ||
      userNiver == "" ||
      password == "" ||
      passwordConfirm == ""
    ) {
      warn("Please fill in all fields");
      return;
    } else if (!regexEmail.test(userEmail)) {
      error("Please enter a valid email");
      return;
    }else if (!regexPassword.test(password)) {
      error(
        "The password must contain one special character, one uppercase letter, and be at least 8 characters long."
      );
      return;
    } else if (password != passwordConfirm) {
      error("The passwords must be the same");
      return;
    } else {
      await createUserWithEmailAndPassword(auth, userEmail, password)
        .then(async (value) => {
          const uid = value.user.uid;
          await setDoc(doc(db, "users", uid), {
            firstName: capitalizedfirstName,
            lastName: capitalizedLastName,
            niver: userNiver,
            DDD: userDDD,
            Number: userNumber,
            signupEmail: userEmail,
            signupPassword: password,
            uid: uid,
          })
            .then(() => {
              success("Registration done successfully");
              navigatS("/login");
              handleImage(uid);
            })
            .catch(() => {
              error("Unable to register, please try again!");
            });
        })
        .catch(() => {
          warn("Already existing email");
        });
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-container-input">
        <div className="signup-img-width">

          <div className="signup-img-none" onClick={handleImageClick}>
            <p>Select your image</p>
            {userImg ? (
              <img src={URL.createObjectURL(userImg)} alt="img" id="imgNone" />
            ) : (
              <img src="./imgUserNone.jpg" alt="img" id="imgNone" />
            )}

            <input
              type="file"
              id="img"
              ref={inputRef}
              onChange={handleImageChange}
            />
          </div>
        </div>

        <div className="label-float">
          <input
            type="text"
            id="Name"
            placeholder=" "
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="signup-hover"
          />
          <label >Your Name</label>
        </div>

        <div className="label-float">
          <input
            type="text"
            id="LastName"
            placeholder=" "
            value={userLastName}
            onChange={(e) => setUserLastName(e.target.value)}
            className="signup-hover"
          />
          <label >Your Last Name</label>
        </div>

        <div className="label-float">
          <input
            type="text"
            id="Email"
            placeholder=" "
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="signup-hover"
          />
          <label >Your Email</label>
        </div>

        <div className="label-float-date">
          <input
            type="date"
            id="Niver"
            placeholder=" "
            value={userNiver}
            onChange={(e) => setUserNiver(e.target.value)}
            className="signup-hover"
          />
          <label >Your birthday</label>
        </div>
        <div className="signup-fone-number">
          <div className="label-float signup-number-dd">
            <input
              type="DDD"
              id="Number"
              placeholder=" "
              maxLength={2}
              value={userDDD}
              onChange={(e) => setUserDDD(e.target.value)}
            />
            <label >DDD</label>
          </div>

          <div className="label-float signup-number">
            <input
              type="tel"
              id="Number"
              placeholder=" "
              maxLength={9}
              value={userNumber}
              onChange={(e) => setUserNumber(e.target.value)}
            />
            <label >Phone number</label>
          </div>
        </div>


        <div className="label-float">
          <input
            type={showPassword ? 'text' : 'password'}
            id="Password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-hover"
          />
          <label >Enter a password</label>
          <button onClick={() => setShowPassword(!showPassword)}>
            <img src={showPassword ? cross : eye} />
          </button>
        </div>

        <div className="label-float">
          <input
            type={showPasswordConfirm ? 'text' : 'password'}
            id="ConfirmPassword"
            placeholder=" "
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            className="signup-hover"
          />
          <label >Confirm the password</label>
          <button onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}>
            <img src={showPasswordConfirm ? cross : eye} />
          </button>
        </div>

        <button className="signup-btn" onClick={handleRegister}>
          Sign up
        </button>
        <div className="signup-p">
          <p>
            Do you already have an account? <Link to={"/login"}>Log in!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
