import "./productDetail.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import star from "../../Assets/Icons/star.svg";
import grayStar from "../../Assets/Icons/star-gray.svg";
import pointer from "../../Assets/Icons/chevron-right-small.svg";
import pointerLeft from "../../Assets/Icons/chevron-left.svg";
import pointerRight from "../../Assets/Icons/chevron-right.svg";
import smallPlus from "../../Assets/Icons/small-plus.svg";
import smallMinus from "../../Assets/Icons/small-minus.svg";
import bag from "../../Assets/Icons/outline.svg";
import heart from "../../Assets/Icons/wishlist.svg";
import { productContext } from "../../Contexts/productsContext";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductNav from "../../Components/ProductDetailNav/productDetailNav";
import { DataUserContext } from "../../Contexts/dataUser";
import { WishlistContext, useWishlist } from "../../Contexts/wishlistContext";
import heartFill from "../../Assets/Icons/wishlist-fill.svg";


const ProductDetail = () => {
  const { produtos } = useContext(productContext);
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
  const { id } = useParams();
  const [produto, setProduto] = useState("");
  const [image, setImage] = useState("");

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const { dataUser } = useContext(DataUserContext);

  const isProductInWishlist = wishlist[dataUser.uid]?.some((p) => p.id === produto.id);

  const newPrice = produto.price - produto.price * (produto.discount / 100);
  const roundedPrice = newPrice.toFixed(2);

  const [pdQuantity, setPdQuantity] = useState(1);

  function productQuantity(e) {
    if (e.deltaY < 0) {
      setPdQuantity(pdQuantity + 1);
    } else {
      if (pdQuantity > 1) {
        setPdQuantity(pdQuantity - 1);
      }
    }
  }

  useEffect(() => {
    if (produtos) {
      produtos.forEach((doc) => {
        console.log(id);
        if (doc.id == id) {
          setProduto(doc);
          setImage(doc.url);
        }
      });
    }
  }, [produtos]);
  console.log(produto);

  const handleAddToWishlist = () => {
    const userId = dataUser.uid;

    if (isProductInWishlist) {
      removeFromWishlist(userId, produto.id);
    } else {
      addToWishlist(userId, produto);
    }
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div className="component-hide-pd">
        <Header />
      </div>

      <div className="pd-topbar-mobile">
        <Link to={"/"}>
          <img src={pointerLeft} />
        </Link>
      </div>

      <div className="product-detail-breadcrumb">
        <Link to={"/"} className="pd-breadcrumb-link">
          Home
        </Link>
        <img src={pointer} />
        <Link className="pd-breadcrumb-link">{produto.category}</Link>
        <img src={pointer} />
        <span>{produto.name}</span>
      </div>

      <div className="product-detail-container">
        <>
          <div className="product-detail-images">
            <div>
              <img src={image} className="pd-image-big" />
            </div>

            <div className="pd-images-container">
              <img src={pointerLeft} className="pd-img-pointer" />
              <div className="pd-image-small-content">
                <img src={image} className="pd-image-small" />
                <img src={image} className="pd-image-small" />
                <img src={image} className="pd-image-small" />
                <img src={image} className="pd-image-small" />
                <img src={image} className="pd-image-small" />
              </div>
              <img src={pointerRight} className="pd-img-pointer" />
            </div>
          </div>

          <div className="product-detail-content">
            <div className="product-detail-name">
              <span className="pdn-title">{produto.name}</span>
              <span className="pdn-description">{produto.subname}</span>
            </div>

            <div className="product-star-container">
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={star} />
              <img src={grayStar} />
              <span>(250) ratings</span>
            </div>

            <div className="product-detail-price">
              <span className="product-new-price">${roundedPrice}</span>
              <span className="product-old-price">${produto.price}</span>
              <span className="product-discount">{produto.discount}%OFF</span>
            </div>

            <div className="product-detail-division"></div>

            <div className="pin-code-check-content">
              <div className="pin-code-check">
                <h3>Delivery Details</h3>
                <p>Check estimated delivery date/pickup option.</p>
              </div>

              <div className="pd-input-content">
                <input type="text" placeholder="Apply Valid Pincode"></input>
                <button>CHECK</button>
              </div>
            </div>

            <div className="pd-quantity">
              <h3>Quantity: </h3>
              <div onWheel={productQuantity} className="bag_quantity">
                <button
                  onClick={() =>
                    pdQuantity > 1
                      ? setPdQuantity(pdQuantity - 1)
                      : setPdQuantity(pdQuantity)
                  }
                  className="button_icon button_hover"
                >
                  <img src={smallMinus} className="icon"></img>
                </button>
                <span>{pdQuantity}</span>
                <button
                  onClick={() => setPdQuantity(pdQuantity + 1)}
                  className="button_icon button_hover"
                >
                  <img src={smallPlus} className="icon"></img>
                </button>
              </div>
            </div>

            <div className="average-content">
              <div className="average-star">
                4.5 <img src={star} />
              </div>
              <div className="average-rating">
                <p>Average Rating</p>
                <span>43 ratings & 23 reviews</span>
              </div>
            </div>

            <div className="pd-offers">
              <div className="offers-card">
                <div className="offers-card-text">
                  <h4>Get up to 30% Off on order value above $100</h4>
                  <p>Terms & Conditions</p>
                </div>

                <div className="offers-card-code">
                  <p>Use Code</p>
                  <span>ORDER100</span>
                </div>
              </div>
              <div className="offers-card">
                <div className="offers-card-text">
                  <h4>Get up to 30% Off on order value above $100</h4>
                  <p>Terms & Conditions</p>
                </div>

                <div className="offers-card-code">
                  <p>Use Code</p>
                  <span>ORDER100</span>
                </div>
              </div>
            </div>

            <div className="pin-code-mobile">
              <h3>Delivery Details</h3>
              <p>Check estimated delivery date/pickup option.</p>
            </div>

            <div className="pd-input-content-mobile">
              <input type="text" placeholder="Apply Valid Pincode"></input>
              <button>CHECK</button>
            </div>

            <div className="pd-buttons">
              <Link className="pd-add-to-bag">
                <img src={bag} />
                <span>Add to Bag</span>
              </Link>
                <button
                  onClick={handleAddToWishlist}
                  className={`pd-add-wishlist ${isProductInWishlist ? "clicked" : ""}`}
                >
                  <img src={isProductInWishlist ? heartFill : heart} />
                  <span>Add to Wishlist</span>
                </button>
            </div>
          </div>
        </>
      </div>

      <ProductNav />

      <div className="component-hide-pd">
        <Footer />
      </div>
    </>
  );
};

export default ProductDetail;
