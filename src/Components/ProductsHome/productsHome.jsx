import "./productsHome.css";
import heart from "../../Assets/Icons/wishlist.svg";
import { Link } from "react-router-dom";

export const ProductsHome = ({ produto }) => {
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

        <Link to={"/wishlist"}>
          <img src={heart} />
        </Link>
      </div>
    </div>
  );
};
