import "./Footer.css";
import { useEffect, useState } from "react";
import Pointer from "../../Assets/footer/pointer.svg";
import Line from "../../Assets/footer/line.png";
import Facebook from "../../Assets/footer/facebook.png";
import Instagram from "../../Assets/footer/insta.png";
import Twitter from "../../Assets/footer/twitter.png";
import YouTube from "../../Assets/footer/youtube.png";
import Location from "../../Assets/footer/location.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", function () {
    setTimeout(() => {
      setWidth(window.innerWidth);
    }, 50);
  });

  useEffect(() => {
    if (width > 900) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [width]);

  return (
    <>
      <div
        className="more-about"
        style={isOpen ? { marginBottom: 0 } : { marginBottom: 80 + "px" }}
      >
        <button className="ma-content" onClick={() => setIsOpen(!isOpen)}>
          <p className="ma-text">More about CORA’L</p>
          <img
            src={Pointer}
            className="pointer"
            style={{
              transform: isOpen ? "rotateX(180deg)" : "rotateX(0)",
            }}
          />
        </button>

        {isOpen && (
          <section
            className="container-footer"
            style={
              isOpen && width <= 900
                ? { marginBottom: 58 + "px" }
                : { marginBottom: 0 + "px" }
            }
          >
            <div className="footer-flex">
              <div className="footer-category">
                <p className="p-footer">Shop by Category</p>
                <a className="a-footer">Skincare</a>
                <a className="a-footer">Personal Care</a>
                <a className="a-footer">Handbags</a>
                <a className="a-footer">Apparels</a>
                <a className="a-footer">Watches</a>
                <a className="a-footer">Eye Wear</a>
                <a className="a-footer">Jewellery</a>
              </div>

              <div className="footer-policy">
                <p className="p-footer">Policy</p>
                <div className="policy-options">
                  <a className="a-footer">
                    Return <span className="policy-span">Policy</span>
                  </a>
                  <span className="span-footer">|</span>
                  <a className="a-footer">Terms of use</a>
                  <span className="span-footer">|</span>
                  <a className="a-footer">Sitemap</a>
                  <span className="span-footer">|</span>
                  <a className="a-footer">Security</a>
                  <span className="span-footer">|</span>
                </div>
                <div className="policy-options2">
                  <a className="a-footer">Privacy</a>
                  <span className="span-footer">|</span>
                  <a className="a-footer">EPR Compliance</a>
                </div>
              </div>
              <div className="footer-about">
                <p className="p-footer">About</p>
                <div className="about-options">
                  <a className="a-footer">Contact Us</a>
                  <span className="span-footer">|</span>
                  <Link to={'/about'} className="a-footer">About Us</Link>
                  <span className="span-footer">|</span>
                  <a className="a-footer">Carees</a>
                  <span className="span-footer">|</span>
                  <a className="a-footer">Press</a>
                </div>
              </div>
            </div>

            <div>
              <img src={Line} className="line" />
            </div>

            <div className="container-social">
              <div className="logos">
                <div>
                  <img src={Facebook} alt="Facebook logo" />
                </div>
                <div>
                  <img src={Instagram} alt="Instagram logo" />
                </div>
                <div>
                  <img src={Twitter} alt="Twitter logo" />
                </div>
                <div>
                  <img src={YouTube} alt="YouTube logo" />
                </div>
              </div>

              <div className="location">
                <div>
                  <img src={Location} />
                </div>
                <p className="p-footer-location">United States</p>
              </div>

              <div className="rights-div">
                <h3 className="h3-footer">
                  © 2021 | Cora Leviene All Rights Reserved
                </h3>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
