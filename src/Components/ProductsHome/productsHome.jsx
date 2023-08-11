import React, { useState, useEffect, useContext } from "react";
import { useWishlist } from "../../Contexts/wishlistContext";
import "./productsHome.css";
import heartEmpty from "../../Assets/Icons/wishlist.svg";
import heartFill from "../../Assets/Icons/wishlist-fill.svg";
import { DataUserContext } from "../../Contexts/dataUser";
import { Link } from "react-router-dom";

export const ProductsHome = ({ produto }) => {
  const { wishlist, addToWishlist } = useWishlist();
  const { dataUser } = useContext(DataUserContext);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsClicked(wishlist[dataUser.uid]?.some((p) => p.id === produto.id));
  }, [dataUser.uid, produto.id, wishlist]);

  const handleAddToWishlist = () => {
    const userId = dataUser.uid;
    addToWishlist(userId, produto);
    setIsClicked(true);
  };

  const newPrice = produto.price - produto.price * (produto.discount / 100);
  const roundedPrice = newPrice.toFixed(2);

  return (
    <div className="product-img-home-content">
      <img src={produto.url} alt="Product image" className="product-img-home" />
      <div className="products-home-container">
        <Link
          to={`/product-detail/${produto.id}`}
          key={produto.id}
          className="product-link"
        >
          <div className="products-home-text">
            <span className="products-home-span">{produto.name}</span>
            <span className="products-description-home">{produto.subname}</span>
            <span className="products-home-span">${roundedPrice}</span>
          </div>
        </Link>
        <button
          onClick={handleAddToWishlist}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`heart-button ${isClicked ? "clicked" : ""}`}
        >
          <img
            src={isClicked || isHovered ? heartFill : heartEmpty}
            alt="Add to Wishlist"
            className={`${isHovered ? "heart-hover" : ""}`}
          />
        </button>
      </div>
    </div>
  );
};
