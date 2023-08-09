import React from "react";
import { useWishlist } from "../../Contexts/wishlistContext";
import "./productsHome.css";
import heartEmpty from "../../Assets/Icons/wishlist.svg";
import heartFill from "../../Assets/Icons/wishlist-fill.svg";
import { useContext } from "react";
import { DataUserContext } from "../../Contexts/dataUser";

export const ProductsHome = ({ produto }) => {
  const { addToWishlist } = useWishlist();
  const { dataUser } = useContext(DataUserContext);

  const handleAddToWishlist = () => {
    const userId = dataUser.uid;
    addToWishlist(userId, produto);
  };

  const newPrice = produto.price - produto.price * (produto.discount / 100);
  const roundedPrice = newPrice.toFixed(2);

  return (
    <div className="product-img-home-content">
      <img src={produto.url} alt="Product image" className="product-img-home" />
      <div className="products-home-container">
        <div className="products-home-text">
          <span className="products-home-span">{produto.name}</span>
          <span className="products-description-home">{produto.subname}</span>
          <span className="products-home-span">${roundedPrice}</span>
        </div>
        <img src={heartEmpty} alt="Add to Wishlist" onClick={handleAddToWishlist}/>
      </div>
    </div>
  );
};
