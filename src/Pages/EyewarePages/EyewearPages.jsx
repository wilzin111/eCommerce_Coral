import "./EyewearPages.css";
import Header from "../../Components/Header/Header";
import ProductsFilter from "../../Components/ProductsFilter/ProductsFilter";
import BlackFridayImage from "../../Assets/ProductsPage/BlackFridayImg.png";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import left from "../../Assets/Icons/chevron-left.svg";

export default function EyewearPage() {
  return (
    <div>
      <div className="header-category">
        <Header />
      </div>

      <div className="products_blImageContainer">
        <img src={BlackFridayImage} className="products_blackfriday" />
      </div>
      <div className="products-filter">
        <div className="breadcrumb-page-category">
          <Link to={"/"} className="homeLinkCss">
            Home
          </Link>
          <span>&gt;</span>
          <Link to={"/products/sunglasses"} className="categoriesPageLink">
            Eyewear
          </Link>
        </div>
        <div className="category-title">
          <Link to={"/"}>
            <img src={left} />
          </Link>
          <h2 className="category-name">Eyewear</h2>
        </div>
      </div>
      <ProductsFilter />
      <Footer />
    </div>
  );
}