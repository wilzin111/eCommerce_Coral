import "./wishlist.css";
import Arrow from "../../Assets/Wishlist/arrow.svg";
import noFavs from "../../Assets/Wishlist/noFavs.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db, storage } from "../../FireBaseConnection";
import { getDownloadURL, ref } from "firebase/storage";
import { collection, getDocs, query } from "firebase/firestore";

export default function Wishlist() {
  const [isEmpty, setIsEmpty] = useState(false);
  const [url, setUrl] = useState("");
  var arr = [];

  const handleUploadImage = async (id) => {
    const storageRef = storage;
    const imagemRef = ref(storageRef, `images/products/${id}`);

    const downloadURL = await getDownloadURL(imagemRef);

    setUrl(downloadURL);
  };

  async function getProducts() {
    const q = query(collection(db, "products"));

    await getDocs(q).then((value) => {
      value.forEach((doc) => {
        let product = {
          name: doc.data().name,
          price: doc.data().price,
          discount: doc.data().discount,
          id: doc.data().id,
        };

        handleUploadImage(product.id);
        arr.push(product);
      });
    });
  }

  useEffect(() => {
    getProducts();
  }, [arr]);

  return (
    <>
      <div className="wrapper-wishlist">
        <button className="my-wishlist">
          <img src={Arrow} className="arrow-wishlist" />
          <h2 className="h2-wishlist">My Wishlist</h2>
        </button>

        {isEmpty ? (
          <section className="container-wishlist" id="container-wishlist">
            <div className="img-wishlist">
              <img src={noFavs} alt="empty wishlist" />
            </div>

            <div className="text-wishlist">
              <h1 className="h1-wishlist">Well...</h1>
              <div className="p-wishlist">
                <p>
                  It seems you have not added any products to your wishlist.
                </p>
              </div>
            </div>

            <div className="btn-div-wishlist">
              <button className="start-shopping">Start Shopping</button>
            </div>
          </section>
        ) : (
          <section className="products-wishlist" id="products-wishlist">
            <img src={url} />
          </section>
        )}
      </div>
    </>
  );
}
