import { Link } from 'react-router-dom'
import './Login.css'

import { auth } from '../../FireBaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const login = () => {
    const navigatL = useNavigate()
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    async function handleLogin() {
        await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then((value) => {
                console.log("User logged in successfully")
                navigatL("/home")
                localStorage.setItem('userLogado', JSON.stringify(value.user.uid))
            })

            .catch(() => {
                console.log('User not found')
            })
    }

    return (
        <div className='login-container'>
            <div className="login-container-input">
                <input type="text"
                    placeholder="Your Email"
                    onChange={(e) => setLoginEmail(e.target.value)}
                />

                <input type="password"
                    placeholder="Enter a password"
                    onChange={(e) => setLoginPassword(e.target.value)}
                />

                <button className='login-btn' onClick={handleLogin}>Log in</button>

                <div className='login-p'>
                    <p>Don't have an account? <Link to={"/signup"}>Sign up!</Link></p>
                </div>

            </div>

        </div>
    )
}

export default login