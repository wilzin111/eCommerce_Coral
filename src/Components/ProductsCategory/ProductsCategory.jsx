import "./ProductsCategory.css";
import heart from "../../Assets/Icons/wishlist.svg";
import star from "../../Assets/Icons/star.svg";
import grayStar from "../../Assets/Icons/star-gray.svg";
import { Link } from "react-router-dom";

export const ProductsCategory = ({ produto }) => {
  const newPrice = produto.price - produto.price * (produto.discount / 100);
  const roundedPrice = newPrice.toFixed(2);

  return (
    <div className="pd-card-category">
      <img
        src={produto.url}
        alt="Product image"
        className="product-img-category"
      />
      <div className="products-category-container">
        <Link
          className="product-category-link"
          to={`/product-detail/${produto.id}`}
          key={produto.id}
        >
          <div className="products-category-text">
            <div className="heart-name">
              <div className="pd-ct-name">
                <span className="products-category-span">{produto.name}</span>
                <span className="products-description-category">
                  {produto.subname}
                </span>
              </div>
              <img src={heart} className="category-heart" />
            </div>

            <div className="products-ct-review">
              <div>
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={grayStar} />
              </div>

              <span>43 ratings</span>
            </div>

            <div className="product-category-price">
              <span className="new-price">${roundedPrice}</span>
              <span className="old-price">${produto.price}</span>
              <span className="discount-category">{produto.discount}%OFF</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
