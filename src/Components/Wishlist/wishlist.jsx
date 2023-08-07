import "./wishlist.css";
import Arrow from "../../Assets/Wishlist/arrow.svg";
import noFavs from "../../Assets/Wishlist/noFavs.png";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const [isEmpty, setIsEmpty] = useState(false);

  return (
    <>
      <div className="wrapper-wishlist">
        <Link to={"/home"} className="my-wishlist">
          <img src={Arrow} className="arrow-wishlist" />
          <h2 className="h2-wishlist">My Wishlist</h2>
        </Link>

        {isEmpty ? (
          <section className="container-wishlist" id="container-wishlist">
            <div className="img-wishlist">
              <img src={noFavs} alt="empty wishlist" />
            </div>

            <div className="text-wishlist">
              <h1 className="h1-wishlist">Well...</h1>
              <div className="p-wishlist">
                <p>
                  It seems you have not added any products to your wishlist.
                </p>
              </div>
            </div>

            <div className="btn-div-wishlist">
              <Link to={"/home"} className="start-shopping">
                Start Shopping
              </Link>
            </div>
          </section>
        ) : (
          <section
            className="products-wishlist"
            id="products-wishlist"
          ></section>
        )}
      </div>
    </>
  );
}
