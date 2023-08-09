import React, {useContext} from "react";
import { useWishlist } from "../../Contexts/wishlistContext";
import Arrow from "../../Assets/Wishlist/arrow.svg";
import { DataUserContext } from "../../Contexts/dataUser";

export default function Wishlist() {
  const { wishlist } = useWishlist();
  const { dataUser } = useContext(DataUserContext);

  const userWishlist = wishlist[dataUser.uid] || [];
  const isEmpty = userWishlist.length === 0;

  return (
    <div className="wrapper-wishlist">
      <button className="my-wishlist">
        <img src={Arrow} alt="Back to Wishlist" className="arrow-wishlist" />
        <h2 className="h2-wishlist">My Wishlist</h2>
      </button>
      {isEmpty ? (
        <section className="container-wishlist" id="container-wishlist">
        </section>
      ) : (
        <section className="products-wishlist" id="products-wishlist">
          {userWishlist.map((product) => (
            <div key={product.id} className="wishlist-product">
              <div className="wishlist-product-img">
                <img src={product.url} alt={product.name} />
              </div>
              <div className="wishlist-product-details">
                <h3 className="wishlist-product-name">{product.name}</h3>
                <p className="wishlist-product-subname">{product.subname}</p>
                <span className="wishlist-product-price">${product.price}</span>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
