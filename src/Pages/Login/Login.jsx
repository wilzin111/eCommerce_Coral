import { Link } from 'react-router-dom'
import './Login.css'

const login = () => {
    return (
        <div className='login-container'>
            <div className="login-container-input">
                <input type="text" placeholder="Your Email"/>
                <input type="password" placeholder="Enter a password"/>
                <button>Log in</button>
                <p>Don't have an account? </p><Link to={"/signup"}><strong>Sign up!</strong></Link>
            </div>

        </div>
    )
}

export default login