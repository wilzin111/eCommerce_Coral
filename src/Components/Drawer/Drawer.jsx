import { useContext, useEffect, useState } from 'react'
import './Drawer.css'
import { DataUserContext } from '../../Contexts/dataUser'
import { storage } from '../../FireBaseConnection'
import { getDownloadURL, ref } from 'firebase/storage'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Drawer = ({ isOpen = false, setDrawerOpen }) => {
  const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M9 4.5L16.5 12L9 19.5" stroke="#13101E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

  const { dataUser, isLog } = useContext(DataUserContext)
  const [urlImgUser, setUrlImgUser] = useState('');
  const nav = useNavigate()
  if (dataUser.uid) {
    const handleUploadImage = async (uid) => {
      await getDownloadURL(ref(storage, `images/users/${uid}`))
        .then((value) => {
          setUrlImgUser(value);
        })
    };
    if (!urlImgUser) {
      handleUploadImage(dataUser.uid);
    }
  }

  const [animation, setAnimation] = useState(true)

  if (isOpen) {
    return (
      <div className='drawer-header' onClick={(e) => {
        if (e.target.className === 'drawer-header') {
          setAnimation(false);
          setTimeout(() => {
            setDrawerOpen(false)
            setAnimation(true);
          }, 300);
        }
      }}>

        <div className={animation ? 'drawer-container-user animation-header-modal' : 'drawer-container-user animation-close-header-modal'}>
          <div className='user-drawer'>
            <div className='drawer-img-user'>
              <img src={urlImgUser ? urlImgUser : './imgUserNone.jpg'} alt="" />
            </div>
            <p>Hello {dataUser.firstName}</p>
            <button className='drawer-btn-arrow'>{isLog ? <><Link to={'/profile'}>{arrow}</Link></> : <></>}</button>
          </div>

          <hr />

          <div className='drawer-top-categoris'>
            <p>Top categories</p>
            <Link to={"products/Skincare"}>
              <div className="text-drawer">
                <p>Skincare</p>
                <button className='drawer-btn-arrow'>{arrow}</button>
              </div>
            </Link>

            <Link to={'products/Apparels'}>
              <div className="text-drawer">
                <p>Apparels</p>
                <button className='drawer-btn-arrow'>{arrow}</button>
              </div>
            </Link>

            <Link to={"/products/Jewellery"}>
              <div className="text-drawer">
                <p>Jwellery</p>
                <button className='drawer-btn-arrow'>{arrow}</button>
              </div>
            </Link>

            <Link to={"/products/Handbags"}>
              <div className="text-drawer">
                <p>Handbags</p>
                <button className='drawer-btn-arrow'>{arrow}</button>
              </div>
            </Link>

            <Link to={'/products/Eyewear'}>
              <div className="text-drawer">
                <p>EyeWare</p>
                <button className='drawer-btn-arrow'>{arrow}</button>
              </div>
            </Link>

            <Link to={'/products/Personal Care'}>
              <div className="text-drawer">
                <p>Fragrance</p>
                <button className='drawer-btn-arrow'>{arrow}</button>
              </div>
            </Link>

            <Link to={"/products/Watches"}>
              <div className="text-drawer">
                <p>Watches</p>
                <button className='drawer-btn-arrow'>{arrow}</button>
              </div>
            </Link>

            <Link to={'/about'}>
              <div className="text-drawer">
                <p>About</p>
                <button className='drawer-btn-arrow'>{arrow}</button>
              </div>
            </Link>
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
      </div>
    )
  }
}

export default Drawer