import { useContext, useState } from "react";
import "./Drawer.css";
import { DataUserContext } from "../../Contexts/dataUser";
import { storage } from "../../FireBaseConnection";
import { getDownloadURL, ref } from "firebase/storage";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Drawer = ({ isOpen = false, setDrawerOpen }) => {
  const arrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 4.5L16.5 12L9 19.5"
        stroke="#13101E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

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

  if (isOpen) {
    return (
      <div className='drawer-header'>

        <div className='drawer-container-user'>
          <div className='user-drawer'>
            <div className='drawer-img-user'>
              <img src={urlImgUser ? urlImgUser : './imgUserNone.jpg'} alt="" />
            </div>
            <p>Hello {dataUser.firstName}</p>
            <button className='drawer-btn-arrow'>{isLog ? <><Link to={'/profile'}>{arrow}</Link></> : <></>}</button>
          </div>

          <hr />

          <div className="drawer-top-categoris">
            <p>Top categories</p>
            <Link to={"products/Skincare"} className="text-drawer">
              <p>Skincare</p>
              <button className="drawer-btn-arrow">{arrow}</button>
            </Link>

            <Link to={"products/Apparels"} className="text-drawer">
              <p>Apparels</p>
              <button className="drawer-btn-arrow">{arrow}</button>
            </Link>

            <Link to={"/products/Jewellery"} className="text-drawer">
              <p>Jewellery</p>
              <button className="drawer-btn-arrow">{arrow}</button>
            </Link>

            <Link to={"/products/Handbags"} className="text-drawer">
              <p>Handbags</p>
              <button className="drawer-btn-arrow">{arrow}</button>
            </Link>

            <Link to={"/products/Eyewear"} className="text-drawer">
              <p>Eyewear</p>
              <button className="drawer-btn-arrow">{arrow}</button>
            </Link>

            <Link to={"/products/Personal Care"} className="text-drawer">
              <p>Fragrance</p>
              <button className="drawer-btn-arrow">{arrow}</button>
            </Link>

            <Link to={"/products/Watches"} className="text-drawer">
              <p>Watches</p>
              <button className="drawer-btn-arrow">{arrow}</button>
            </Link>

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
              <button className="drawer-btn-arrow">{arrow}</button>
            </div>

            <div className="text2-drawer">
              <p>Feedback & Suggestions </p>
              <button className="drawer-btn-arrow">{arrow}</button>
            </div>

            <div className="text2-drawer">
              <p>Visit Websites </p>
              <button className='drawer-btn-arrow'>{arrow}</button>
            </div>
          </div>
        </div>
        <button onClick={() => { setDrawerOpen(false) }} className='drawer-btn' />
      </div>
    );
  }
};

export default Drawer;


