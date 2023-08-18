import Navbar from "../../Components/Navbar/Navbar";
import Apparels from "../../Assets/Categories/apparels.png";
import Eyewear from "../../Assets/Categories/eyeware.png";
import Fragrance from "../../Assets/Categories/fragance.png";
import Handbags from "../../Assets/Categories/handbags.png";
import Skincare from "../../Assets/Categories/skincare.png";
import { Link, useParams } from "react-router-dom";
import "./categories.css";
import Footer from "../../Components/Footer/Footer";

export default function Categories() {
  const { id } = useParams();

  return (
    <>
      <div className="categories-container">
        <div className="categories-topbar">Categories</div>
        <div className="categories-img">
          <Link to={"/products/Skincare"}>
            <img src={Skincare} />
          </Link>

          <Link to={"/products/Personal Care"}>
            <img src={Fragrance} />
          </Link>

          <Link to={"/products/Handbags"}>
            <img src={Handbags} />
          </Link>

          <Link to={"/products/Eyewear"}>
            <img src={Eyewear} />
          </Link>

          <Link to={"/products/Apparels"}>
            <img src={Apparels} />
          </Link>
        </div>

        <Footer />
      </div>
      <Navbar page="Categories" />
    </>
  );
}
