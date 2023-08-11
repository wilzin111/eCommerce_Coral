import { Link } from 'react-router-dom'
import './Login.css'
import eye from "./../../Assets/Icons/eye.svg";
import cross from "./../../Assets/Icons/cross.svg";
import { auth } from '../../FireBaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { error, success, warn } from '../../Hooks/Toastify/Toastify'

const login = () => {
    const navigatL = useNavigate()
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    async function handleLogin() {
        await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then((value) => {
                success("User logged in successfully")
                navigatL("/")
            })

            .catch((e) => {

                if (e.code === 'auth/wrong-password') {
                    error('Incorrect password')
                } else {
                    warn('User not found')
                }

            })
    }

    return (
        <div className='login-container'>
            <div className="login-container-input">
                <div className="label-float">
                    <input type="text"
                        placeholder=" "
                        onChange={(e) => setLoginEmail(e.target.value)}
                        id='email'
                    />
                    <label for='email'>Your Email</label>
                </div>

                <div className="label-float">
                    <input type={showPassword ? 'text' : 'password'}
                        placeholder=" "
                        onChange={(e) => setLoginPassword(e.target.value)}
                        id='password'
                    />
                    
                    <label for='password'>Enter a password</label>
                    <button onClick={()=> setShowPassword(!showPassword)}>
                        <img src={showPassword ? cross : eye}/>
                    </button>
                    
                </div>


                <button className='login-btn' onClick={handleLogin}>Log in</button>

                <div className='login-p'>
                    <p>Don't have an account? <Link to={"/signup"}>Sign up!</Link></p>
                </div>

            </div>

        </div>
    )
}

export default login