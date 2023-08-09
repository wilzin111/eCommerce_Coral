import Header from "../../Components/Header/Header";
import ProductsFilter from "../../Components/ProductsFilter/ProductsFilter";
import BlackFridayImage from "../../Assets/ProductsPage/BlackFridayImg.png";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

export default function JewelleryPage() {
  return (
    <div>
      <Header />
      <div className="products_blImageContainer">
        <img src={BlackFridayImage} className="products_blackfriday" />
      </div>
      <div className="products-filter">
        <div>
          <Link to={"/"} className="homeLinkCss">
            Home
          </Link>
          <span>&gt;</span>
          <Link to={"/products/jewellery"} className="categoriesPageLink">
            Jewellery
          </Link>
        </div>
        <h2>Jewellery</h2>
        <ProductsFilter />
      </div>
      <Footer />
    </div>
  );
}
