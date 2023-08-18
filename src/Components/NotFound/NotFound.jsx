import React from 'react'
import NotFoundImg from '../../Assets/notFound/notFound.png'
import { Link } from 'react-router-dom'
import './NotFound.css'
import seta from "../../Assets/Wishlist/arrow.svg";

const NotFound = () => {
    return (
        <div className='container-NotFound'>

           

            <div className="container-img-NotFound">
                <img src={NotFoundImg} alt="NotFoundImg" />
            </div>

            <div className="container-text-NotFound">
                <h1>Whoops!</h1>
                <p>We coudn’t find what you’re looking for. Try something else.</p>
                <Link to={'/'}>
                    <button>
                        Back to home
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default NotFound