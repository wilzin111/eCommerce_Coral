import "./ProductsPages.css";
import Header from "../../Components/Header/Header";
import ProductsFilter from "../../Components/ProductsFilter/ProductsFilter";
import BlackFridayImage from "../../Assets/ProductsPage/BlackFridayImg.png";
import { Link, useParams } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import left from "../../Assets/Icons/chevron-left.svg";
import FilterMobile from "../../Components/FilterMobile/FilterMobile";
import SortBy from "../../Components/SortBy/SortBy";
import { ProductsCategory } from "../../Components/ProductsCategory/ProductsCategory";
import { useContext } from "react";
import { productContext } from "../../Contexts/productsContext";
import arrow from "../../Assets/Icons/chevron-right-small.svg";

export default function ProductsPage() {
  const { id } = useParams();

  const { produtos } = useContext(productContext);

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
          <img src={arrow} />
          <Link to={`products/${id}`} className="categoriesPageLink">
            {id}
          </Link>
        </div>

        <div className="category-title">
          <Link to={"/"}>
            <img src={left} />
          </Link>
          <h2 className="category-name">{id}</h2>
        </div>
      </div>

      <div className="components-flex">
        <ProductsFilter />

        <div className="comp-flex-products">
          <SortBy />

          {produtos.length > 0 ? (
            <div className="products-category-container">
              {produtos.map((produto) => (
                <ProductsCategory produto={produto} key={produto.id} />
              ))}
            </div>
          ) : (
            <div> loading... </div>
          )}
        </div>
      </div>

      <FilterMobile />

      <div className="header-category">
        <Footer />
      </div>
    </div>
  );
}
