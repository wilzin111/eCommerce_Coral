import "./wishlist.css";
import Arrow from "../../Assets/Wishlist/arrow.svg";
import noFavs from "../../Assets/Wishlist/noFavs.png";

export default function Wishlist() {
  return (
    <>
      <div className="wrapper-wishlist">
        <div className="topbar-wishlist"></div>

        <button className="my-wishlist">
          <img src={Arrow} className="arrow-wishlist" />
          <h2 className="h2-wishlist">My Wishlist</h2>
        </button>

        <div className="container-wishlist">
          <div className="img-wishlist">
            <img src={noFavs} />
          </div>

          <div className="text-wishlist">
            <h1 className="h1-wishlist">Well...</h1>
            <div className="p-wishlist">
              <p>It seems you have not added any products to your wishlist.</p>
            </div>
          </div>
        </div>

        <div className="btn-div-wishlist">
          <button className="start-shopping">Start Shopping</button>
        </div>
      </div>
    </>
  );
}
