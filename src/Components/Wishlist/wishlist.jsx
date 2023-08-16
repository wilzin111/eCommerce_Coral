import React, { useEffect, useState, useContext } from "react";
import { useWishlist } from "../../Contexts/wishlistContext";
import Arrow from "../../Assets/Wishlist/arrow.svg";
import { DataUserContext } from "../../Contexts/dataUser";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../FireBaseConnection";
import "./wishlist.css";
import { Link } from "react-router-dom";
import noFavs from "../../Assets/Wishlist/noFavs.png";
import heartEmpty from "../../Assets/Icons/wishlist.svg";
import heartFill from "../../Assets/Icons/wishlist-fill.svg";
import bag from '../../Assets/Icons/bagWishlist.svg';

export default function Wishlist(prop) {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { dataUser } = useContext(DataUserContext);

  const [userWishlist, setUserWishlist] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    const userWishlistRef = doc(db, "userWishlist", dataUser.uid);
    getDoc(userWishlistRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUserWishlist(snapshot.data().products);
        } else {
          setUserWishlist([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching user wishlist from Firestore:", error);
      });
  }, [dataUser.uid]);

  useEffect(() => {
    setIsEmpty(userWishlist.length === 0);
  }, [userWishlist]);

  const handleRemoveFromWishlist = async (productId) => {
    const updatedWishlist = userWishlist.filter((product) => product.id !== productId);
    setUserWishlist(updatedWishlist);

    const userWishlistRef = doc(db, "userWishlist", dataUser.uid);
    await updateDoc(userWishlistRef, { products: updatedWishlist });

    removeFromWishlist(dataUser.uid, productId);
  };

  return (
    <>
      <div className={`wrapper-wishlist ${isEmpty ? "empty" : ""}`}>
        <div className="wishlist-close">
          <button onClick={() => { prop.component(-1) }}>
            <img src={Arrow} />
            <h2>My Wishlist</h2>
          </button>
        </div>
        {isEmpty ? (
          <section className="container-wishlist" id="container-wishlist">
            <div className="wishlist-container-text empty">
              <img src={noFavs} alt="empty wishlist" />
              <h1>Well...</h1>
              <p>It seems you have not added any products to your wishlist.</p>
            </div>
            <div className="btn-wishlist">
              <Link to="/">
                Start Shopping
              </Link>
            </div>
          </section>
        ) : (
          <section className="container-wishlist-true" id="products-wishlist">
            {userWishlist.map((product) => (
              <div key={product.id} className="wishlist-product">
                <div className="wishlist-product-img">
                  <Link
                    to={`/product-detail/${product.id}`}
                    key={product.id}
                    className="product-link">
                    <img src={product.url} alt={product.name} />
                  </Link>
                </div>
                <div className="wishlist-container-info">

                  <div className="wishlist-product-details">
                    <Link
                      to={`/product-detail/${product.id}`}
                      key={product.id}
                    >
                      <h3>{product.name}</h3>
                      <p>{product.subname}</p>
                      <span>${product.price}</span>
                    </Link>
                  </div>

                  <div className="wishlist-heart">
                    <button onClick={() => handleRemoveFromWishlist(product.id)}>
                      <img src={heartFill} alt="Remove from Wishlist" />
                    </button>
                  </div>

                </div>

                <div className="wishlist-btn-addBag">
                  <button>
                    <img src={bag} alt="" /><p>Add to bag</p>
                  </button>
                </div>

              </div>
            ))}
          </section>
        )}
      </div>
    </>
  );
}
