import "./Footer.css";
import Pointer from "../../Assets/footer/pointer.svg";
import Line from "../../Assets/footer/line.png";

export default function Footer() {
  return (
    <>
      <div className="more-about">
        <p className="ma-text">More about CORA’L</p>{" "}
        <img src={Pointer} className="pointer" />
      </div>

      <div className="container-footer">
        <div className="footer-category">
          <p>Shop by Category</p>
          <a>Skincare</a>
          <a>Personal Care</a>
          <a>Handbags</a>
          <a>Apparels</a>
          <a>Watches</a>
          <a>Eye Wear</a>
          <a>Jewellery</a>
        </div>

        <div className="footer-policy">
          <p>Policy</p>
          <div className="policy-options">
            <a>
              Return <span className="policy-span">Policy</span>
            </a>
            <span>|</span>
            <a>Terms of use</a>
            <span>|</span>
            <a>Sitemap</a>
            <span>|</span>
            <a>Security</a>
            <span>|</span>
          </div>
          <div className="policy-options2">
            <a>Privacy</a>
            <span>|</span>
            <a>EPR Compliance</a>
          </div>
        </div>

        <div className="footer-about">
          <p>About</p>
          <div className="about-options">
            <a>Contact Us</a>
            <span>|</span>
            <a>About Us</a>
            <span>|</span>
            <a>Carees</a>
            <span>|</span>
            <a>Press</a>
          </div>
        </div>

        <div>
          <img src={Line} className="line" />
        </div>
      </div>
    </>
  );
}
