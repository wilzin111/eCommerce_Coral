import { Link } from 'react-router-dom'
import './Login.css'

const login = () => {
    return (
        <div className='login-container'>
            <div className="login-container-input">
                <input type="text" placeholder="Your Email"/>
                <input type="password" placeholder="Enter a password"/>
                <button className='login-btn'>Log in</button>
                <div className='login-p'>
                  <p>Don't have an account? <Link to={"/signup"}>Sign up!</Link></p>  
                </div>
                
            </div>

        </div>
    )
}

export default login