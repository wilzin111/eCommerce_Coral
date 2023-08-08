import { useWishlist } from "../../Contexts/wishListContext";

import Arrow from "../../Assets/Wishlist/arrow.svg";
import noFavs from "../../Assets/Wishlist/noFavs.png";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { wishlist } = useWishlist();

  const isEmpty = Object.keys(wishlist).length === 0;

  return (
    <>
      <div className="wrapper-wishlist">
        <button className="my-wishlist">
          <img src={Arrow} className="arrow-wishlist" />
          <h2 className="h2-wishlist">My Wishlist</h2>
        </button>
        {isEmpty ? (
          <section className="container-wishlist" id="container-wishlist">
          </section>
        ) : (
          <section className="products-wishlist" id="products-wishlist">
            {Object.keys(wishlist).map((userId) =>
              wishlist[userId].map((product) => (
                <div key={product.id} className="wishlist-product">
                  <div className="wishlist-product-img">
                    <img src={product.url} alt={product.name} />
                  </div>
                  <div className="wishlist-product-details">
                    <h3 className="wishlist-product-name">{product.name}</h3>
                    <p className="wishlist-product-subname">
                      {product.subname}
                    </p>
                    <span className="wishlist-product-price">
                      ${product.price}
                    </span>
                  </div>
                </div>
              ))
            )}
          </section>
        )}
      </div>
    </>
  );
}
