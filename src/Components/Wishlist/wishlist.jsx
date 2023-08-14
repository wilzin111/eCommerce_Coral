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

import { useState } from "react";
import { Link } from "react-router-dom";

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
        <button onClick={() => { prop.component(-1) }} className="my-wishlist">
          <img src={Arrow} className="arrow-wishlist" />
          <h2 className="h2-wishlist">My Wishlist</h2>
        </button>

        {isEmpty ? (
          <section className="container-wishlist" id="container-wishlist">
            <div className="img-wishlist empty">
              <img src={noFavs} alt="empty wishlist" />
            </div>
            <div className="text-wishlist empty">
              <h1 className="h1-wishlist">Well...</h1>
              <div className="p-wishlist empty">
                <p>It seems you have not added any products to your wishlist.</p>
              </div>
            </div>
            <div className="btn-div-wishlist">
              <Link to="/" className="start-shopping">
                Start Shopping
              </Link>
            </div>
          </section>
        ) : (
          <section className="products-wishlist" id="products-wishlist">
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
                <div className="wishlist-product-details">
                  <h3 className="wishlist-product-name">{product.name}</h3>
                  <button
                    onClick={() => handleRemoveFromWishlist(product.id)}
                    className="heart-button remove"
                  >
                    <img src={heartFill} alt="Remove from Wishlist" className="heart-hover" />
                  </button>
                  <Link
                    to={`/product-detail/${product.id}`}
                    key={product.id}
                    className="product-link"
                  >
                    <p className="wishlist-product-subname">{product.subname}</p>
                    <span className="wishlist-product-price">${product.price}</span>
                  </Link>
                  <div className="wishlist-btn-addBag">
                    <button>
                      <img src={bag} alt="" /><p>Add to bag</p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </>
  );
}
