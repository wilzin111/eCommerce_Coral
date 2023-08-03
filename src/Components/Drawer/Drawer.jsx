import { useContext, useState } from 'react'
import './Drawer.css'
import { DataUserContext } from '../../Contexts/dataUser'
import { storage } from '../../FireBaseConnection'
import { getDownloadURL, ref } from 'firebase/storage'
import { Link } from 'react-router-dom'

const Drawer = ({ isOpen, setDrawerOpen }) => {

    const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 4.5L16.5 12L9 19.5" stroke="#13101E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

    const { dataUser } = useContext(DataUserContext)
    const [urlImgUser, setUrlImgUser] = useState('');

    const handleUploadImage = async () => {
        const imagemRefUser = ref(storage, `images/users/${dataUser.uid}`);
        const downloadURLUser = await getDownloadURL(imagemRefUser);
        setUrlImgUser(downloadURLUser);
    };  

    if(!urlImgUser){
        handleUploadImage();
    }

    if (isOpen) {
        return (

            <div className='drawer-header'>

                <div className='drawer-container-user'>
                    <div className='user-drawer'>
                        <div className='drawer-img-user'>
                        <img src={urlImgUser? urlImgUser: './imgUserNone.jpg'} alt="" />
                        </div>
                        <p>Hello, {dataUser.firstName}</p>
                        <button className='drawer-btn-arrow'>{arrow}</button>
                    </div>

                    <hr />

                    <div className='drawer-top-categoris'>
                        <p>Top categories</p>
                        <div className="text-drawer">
                            <p>Skincare</p>
                            <button className='drawer-btn-arrow'>{arrow}</button>
                        </div>

                        <div className="text-drawer">
                            <p>Apparels</p>
                            <button className='drawer-btn-arrow'>{arrow}</button>
                        </div>

                        <div className="text-drawer">
                            <p>Jwellery</p>
                            <button className='drawer-btn-arrow'>{arrow}</button>
                        </div>

                        <div className="text-drawer">
                            <p>Handbags</p>
                            <button className='drawer-btn-arrow'>{arrow}</button>
                        </div>

                        <div className="text-drawer">
                            <p>EyeWare</p>
                            <button className='drawer-btn-arrow'>{arrow}</button>
                        </div>

                        <div className="text-drawer">
                            <p>Fragrance</p>
                            <button className='drawer-btn-arrow'>{arrow}</button>
                        </div>

                        <div className="text-drawer">
                            <p>Watches</p>
                            <button className='drawer-btn-arrow'>{arrow}</button>
                        </div>

                        <div className="text-drawer">
                            <p>About</p>
                            <button className='drawer-btn-arrow'><Link to={'/about'}>{arrow}</Link></button>
                        </div>

                    </div>
                    <hr />
                    <div className='drawer-ContactUs'>
                        <p>Contact Us</p>

                        <div className="text2-drawer">
                            <p>Help & Support </p>
                            <button className='drawer-btn-arrow'>{arrow}</button>
                        </div>

                        <div className="text2-drawer">
                            <p>Feedback & Suggestions </p>
                            <button className='drawer-btn-arrow'>{arrow}</button>
                        </div>

                        <div className="text2-drawer">
                            <p>Visit Websites </p>
                            <button className='drawer-btn-arrow'>{arrow}</button>
                        </div>
                    </div>
                </div>

                <button onClick={() => { setDrawerOpen(false) }} className='drawer-btn' />

            </div>

        )
    }
}





export default Drawer