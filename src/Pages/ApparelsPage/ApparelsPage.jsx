import "./ApparelsPage.css";
import Header from "../../Components/Header/Header";
import ProductsFilter from "../../Components/ProductsFilter/ProductsFilter";
import BlackFridayImage from "../../Assets/ProductsPage/BlackFridayImg.png";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import left from "../../Assets/Icons/chevron-left.svg";
import FilterMobile from "../../Components/FilterMobile/FilterMobile";
import SortBy from "../../Components/SortBy/SortBy";

export default function ApparelsPage() {
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
          <Link to={"/products/apparels"} className="categoriesPageLink">
            Apparels
          </Link>
        </div>
        <div className="category-title">
          <Link to={"/"}>
            <img src={left} />
          </Link>
          <h2 className="category-name">Apparels</h2>
        </div>
      </div>
      <ProductsFilter />

      <SortBy />

      <FilterMobile />
      <div className="header-category">
        <Footer />
      </div>
    </div>
  );
}
