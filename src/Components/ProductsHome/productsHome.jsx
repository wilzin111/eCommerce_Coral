import React, { useContext } from "react";
import { useWishlist } from "../../Contexts/wishListContext";

import "./productsHome.css";
import heart from "../../Assets/Icons/wishlist.svg";

export const ProductsHome = ({ produto }) => {
  const { addToWishlist } = useWishlist();

  const handleAddToWishlist = () => {
    addToWishlist(produto); 
  };

  return (
    <div className="product-img-home-content">
      <img src={produto.url} alt="Product image" className="product-img-home" />
      <div className="products-home-container">
        <div className="products-home-text">
          <span className="products-home-span">{produto.name}</span>
          <span className="products-description-home">{produto.subname}</span>
          <span className="products-home-span">${produto.price}</span>
        </div>
        <img src={heart} onClick={handleAddToWishlist} />
      </div>
    </div>
  );
};
