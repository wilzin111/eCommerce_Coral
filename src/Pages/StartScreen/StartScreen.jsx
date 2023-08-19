import './StartScreen.css'
import { Link, useNavigate } from 'react-router-dom'

const StartScreen = () => {

    return (
        <div className="StartScreen-background">
            <div className='StartScreen-container'>
            <div className='StartScreen-container-center'>
                <div className="container-h1">
                    <h1>The shopping destination you need</h1>
                </div>

                <div className='StartScreen-container-GetStarted'>
                    <p><Link to={'/signup'}>Get Started</Link></p>
                </div>

                <div className="StartScreen-container-IHaveAccount">
                    <p><Link to={'/login'}>I already have an account</Link></p>
                </div>

            </div>
        </div>
        </div>
        
    )
}

export default StartScreen