import { useEffect, useState } from "react";
import "./productDetailNav.css";
import { Link } from "react-router-dom";
import chevron from "../../Assets/Icons/chevron-right.svg";
import arrow from "../../Assets/Icons/arrow.svg";

export default function ProductNav() {
  const [showDiv1, setShowDiv1] = useState(true);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);

  const [color1, setColor1] = useState(true);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", function () {
    setTimeout(() => {
      setWidth(window.innerWidth);
    }, 50);
  });

  useEffect(() => {
    if (width < 900) {
      setIsOpen(false);
    }
  }, [width]);

  const handleClick1 = () => {
    setShowDiv1(true);
    setShowDiv2(false);
    setShowDiv3(false);
    setColor1(true);
    setColor2(false);
    setColor3(false);
  };

  const handleClick2 = () => {
    setShowDiv1(false);
    setShowDiv2(true);
    setShowDiv3(false);
    setColor1(false);
    setColor2(true);
    setColor3(false);
  };

  const handleClick3 = () => {
    setShowDiv1(false);
    setShowDiv2(false);
    setShowDiv3(true);
    setColor1(false);
    setColor2(false);
    setColor3(true);
  };

  return (
    <>
      <div className="product-nav-container">
        <button
          onClick={handleClick1}
          className={color1 ? "button-clicked" : "button-unclicked"}
        >
          Product Description
        </button>
        <button
          onClick={handleClick2}
          className={color2 ? "button-clicked" : "button-unclicked"}
        >
          Related Products
        </button>
        <button
          onClick={handleClick3}
          className={color3 ? "button-clicked" : "button-unclicked"}
        >
          Ratings and Reviews
        </button>
      </div>

      {showDiv1 && (
        <div className="product-description" id="product-description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
            scelerisque laoreet tortor cras molestie tincidunt malesuada
            malesuada. Neque, mauris duis dui id morbi magna. Cras lacus,
            viverra auctor in turpis est quisque eget tristique.
          </p>

          <p>
            Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et
            pharetra platea pretium nec feugiat tincidunt quam leo tristique.
            Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut
            non eu mus volutpat.
          </p>

          <p>
            Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris,
            faucibus vulputate adipiscing elementum tristique dictumst augue
            pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna
            etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit
            felis imperdiet.
          </p>
        </div>
      )}

      {showDiv2 && (
        <div className="related-products" id="related-products">
          related
        </div>
      )}

      {showDiv3 && <div className="ratings-reviews">Ratings and reviews</div>}

      <div className="product-nav-mobile">
        <div className="separator-nav"></div>

        <button className="dropdown-nav" onClick={() => setIsOpen(!isOpen)}>
          <h3>Product Description</h3>
          <img
            src={chevron}
            style={{
              transform: isOpen ? "rotate(90deg)" : "rotateX(0)",
            }}
          />
        </button>

        {isOpen && (
          <p className="dropdown-nav-p">
            Experience comfortable and easy travelling like never before with
            this coach bag. It features a zip closure, removable straps and
            multiple organization compartments to keep your valuables safe.
            Crafted from premium material, it is durable and lasts long.
          </p>
        )}

        <div className="separator-nav"></div>

        <Link className="dropdown-nav">
          <h3>Ratings & Reviews</h3>
          <img src={chevron} />
        </Link>

        <div className="separator-nav"></div>

        <div className="invite-friends">
          <div className="invite-friends-text">
            <h4>Invite Friends & Earn</h4>
            <p>Get up to 100 reward points for every friend you invite</p>
            <button>
              <span>Invite Now</span> <img src={arrow} />
            </button>
          </div>
          <div className="orange-square"></div>
        </div>
      </div>
    </>
  );
}
