import { Link } from "react-router-dom";
import "./Drawer.css";

const Drawer = ({ isOpen, setDrawerOpen }) => {
  if (!isOpen) {
    return null;
  }

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

  return (
    <div className="drawer-header">
      <div className="drawer-container-user">
        <div className="user-drawer">
          <div className="drawer-img-user"></div>
          <p>Hello, Tina</p>
          <button className="drawer-btn-arrow">{arrow}</button>
        </div>

        <hr />

        <div className="drawer-top-categoris">
          <p>Top categories</p>
          <div className="text">
            <p>Skincare</p>
            <Link className="drawer-btn-arrow">{arrow}</Link>
          </div>

          <div className="text">
            <p>Apparels</p>
            <Link className="drawer-btn-arrow">{arrow}</Link>
          </div>

          <div className="text">
            <p>Jewellery</p>
            <Link className="drawer-btn-arrow">{arrow}</Link>
          </div>

          <div className="text">
            <p>Handbags</p>
            <Link className="drawer-btn-arrow">{arrow}</Link>
          </div>

          <div className="text">
            <p>EyeWare</p>
            <Link className="drawer-btn-arrow">{arrow}</Link>
          </div>

          <div className="text">
            <p>Fragrance</p>
            <Link className="drawer-btn-arrow">{arrow}</Link>
          </div>

          <div className="text">
            <p>Watches</p>
            <Link className="drawer-btn-arrow">{arrow}</Link>
          </div>

          <div className="text">
            <p>About</p>
            <Link to={"/about"} className="drawer-btn-arrow">
              {arrow}
            </Link>
          </div>
        </div>
        <hr />

        <div className="drawer-ContactUs">
          <p>Contact Us</p>

          <div className="text2">
            <p className="p-drawer">Help & Support </p>
            <Link className="drawer-btn-arrow">{arrow}</Link>
          </div>

          <div className="text2">
            <p className="p-drawer">Feedback & Suggestions </p>
            <Link className="drawer-btn-arrow">{arrow}</Link>
          </div>

          <div className="text2">
            <p className="p-drawer">Visit Websites </p>
            <Link className="drawer-btn-arrow">{arrow}</Link>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          setDrawerOpen(false);
        }}
        className="drawer-btn"
      />
    </div>
  );
};

export default Drawer;
