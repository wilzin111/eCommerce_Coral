import Navbar from "../../Components/Navbar/Navbar";
import Apparels from "../../Assets/Categories/apparels.png";
import Eyewear from "../../Assets/Categories/eyeware.png";
import Fragrance from "../../Assets/Categories/fragance.png";
import Handbags from "../../Assets/Categories/handbags.png";
import Skincare from "../../Assets/Categories/skincare.png";
import { Link } from "react-router-dom";
import "./categories.css";
import Footer from "../../Components/Footer/Footer";

export default function Categories() {
  return (
    <>
      <div className="categories-container">
        <div className="categories-topbar">Categories</div>
        <div className="categories-img">
          <Link>
            <img src={Skincare} />
          </Link>

          <Link>
            <img src={Fragrance} />
          </Link>

          <Link>
            <img src={Handbags} />
          </Link>

          <Link>
            <img src={Eyewear} />
          </Link>

          <Link>
            <img src={Apparels} />
          </Link>
        </div>

        <Footer />
      </div>
      <Navbar page="Categories" />
    </>
  );
}
