import { Link } from "react-router-dom"


const Signup = () => {
  return (
    <div className="signup-container">
        <div className="signup-container-input">
            <input type="text" placeholder="Your Name"/>
            <input type="text" placeholder="Your Last Name"/>
            <input type="text" placeholder="Your Email"/>
            <input type="date" placeholder="Your birthday"/>
            <input type="password" placeholder="Enter a password"/>
            <input type="password" placeholder="Confirm the password"/>
            <button>Sign up</button>
            <p>Do you already have an account? </p><Link to={"/"}><strong>Log in!</strong></Link>
        </div>
        <div className="signup-container-img">

        </div>
    </div>
  )
}

export default Signup