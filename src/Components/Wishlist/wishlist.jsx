import React, { useEffect, useState, useContext } from "react";
import { useWishlist } from "../../Contexts/wishlistContext";
import Arrow from "../../Assets/Wishlist/arrow.svg";
import { DataUserContext } from "../../Contexts/dataUser";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../FireBaseConnection";
import "./wishlist.css";
import { Link } from "react-router-dom";
import noFavs from "../../Assets/Wishlist/noFavs.png";

export default function Wishlist() {
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
        }
      })
      .catch((error) => {
        console.error("Error fetching user wishlist from Firestore:", error);
      });
  }, [dataUser.uid]);

  useEffect(() => {
    setIsEmpty(userWishlist.length === 0);
  }, [userWishlist]);

  const handleRemoveFromWishlist = async (productId, event) => {
    event.preventDefault();

    const updatedWishlist = userWishlist.filter((product) => product.id !== productId);
    setUserWishlist(updatedWishlist);

    const userWishlistRef = doc(db, "userWishlist", dataUser.uid);
    await updateDoc(userWishlistRef, { products: updatedWishlist });

    removeFromWishlist(dataUser.uid, productId);
  };

  return (
    <div className="wrapper-wishlist">
      <Link to='/' className="my-wishlist">
        <img src={Arrow} alt="Back to Wishlist" className="arrow-wishlist" />
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
              <p>It seems you have not added any products to your wishlist.</p>
            </div>
          </div>
          <div className="btn-div-wishlist">
            <Link to={"/"} className="start-shopping">
              Start Shopping
            </Link>
          </div>
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
                <button type="button" onClick={(event) => handleRemoveFromWishlist(product.id, event)}>Remove</button>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
