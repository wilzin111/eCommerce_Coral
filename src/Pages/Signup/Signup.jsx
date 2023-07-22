import { Link } from "react-router-dom"
import './Signup.css'
import { useRef, useState } from "react"
import { db, auth } from "../../FireBaseConnection"
import { doc, setDoc } from "firebase/firestore"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigat = useNavigate()
  const inputRef = useRef(null)
  const [userImg, setUserImg] = useState('')
  const [userName, setUserName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userNiver, setUserNiver] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleImageClick = () => {
    inputRef.current.click();
  }

  const handleImageChange = (e) => {
    const imgReceived = e.target.files[0]
    setUserImg(imgReceived)
  }
  //letra maiuscula nome
  function capitalizeFirstName(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
  }
  //letra maiuscula sobrenome
  function capitalizeLastName(e) {
    let LastNameList = e.split(" ")

    for (let i = 0; i < LastNameList.length; i++) {
      let currentLastName = LastNameList[i]
      LastNameList[i] = currentLastName.charAt(0).toUpperCase() + currentLastName.slice(1)
    }
    return LastNameList.join(" ")
  }
  const capitalizedfirstName = capitalizeFirstName(userName)
  const capitalizedLastName = capitalizeLastName(userLastName)

  const regexPassword = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\-])(?=.*[A-Z]).{8,}$/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function handleRegister() {
    if (userName == '' ||
      userLastName == '' ||
      userEmail == '' ||
      userNiver == '' ||
      password == '' ||
      passwordConfirm == '') {
      console.log("Please fill in all fields");
      return;

    } else if (!regexEmail.test(userEmail)) {
      console.log("Please enter a valid email")
      return;

    } else if (!regexPassword.test(password)) {
      console.log("The password must contain one special character, one uppercase letter, and be at least 8 characters long.");
      return;

    } else if (password != passwordConfirm) {
      console.log("The passwords must be the same");
      return;

    } else {
      await createUserWithEmailAndPassword(auth, userEmail, password)
        .then(async (value) => {
          const uid = value.user.uid
          await setDoc(doc(db, 'users', uid), {
            firstName: capitalizedfirstName,
            lastName: capitalizedLastName,
            niver: userNiver,
            signupEmail: userEmail,
            signupPassword: password
          })
            .then(() => {
              console.log("Registration done successfully")
              navigat("/")
            })
            .catch(() => {
              console.log("Unable to register, please try again!")
            })
        })
        .catch(() => {
          console.log("Already existing email")
        })

    }
  }


  return (
    <div className="signup-container">
      <div className="signup-container-input">
        <div className="signup-img-width">
          <div className="signup-img-none" onClick={handleImageClick}>
            {userImg ? (
              <img src={URL.createObjectURL(userImg)} alt="img" id="imgNone" />
            ) : (
              <img src="./imgUserNone.jpg" alt="img" id="imgNone" />
            )}

            <input type="file" id="img" ref={inputRef} onChange={handleImageChange} />
          </div>
        </div>


        <input type="text" id="Name" placeholder="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <input type="text" id="LastName" placeholder="Your Last Name"
          value={userLastName}
          onChange={(e) => setUserLastName(e.target.value)}
        />

        <input type="text" id="Email" placeholder="Your Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <input type="date" id="Niver" placeholder="Your birthday"
          value={userNiver}
          onChange={(e) => setUserNiver(e.target.value)}
        />

        <input type="password" id="Password" placeholder="Enter a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="password" id="ConfirmPassword" placeholder="Confirm the password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />

        <button onClick={handleRegister}>Sign up</button>
        <p>Do you already have an account? </p><Link to={"/"}><strong>Log in!</strong></Link>
      </div>
    </div>
  )
}

export default Signup