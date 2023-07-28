import { useState, createContext, useEffect } from "react";
import { db, auth } from "../FireBaseConnection";
import { collection, doc, getDocs, query, setDoc } from "@firebase/firestore";

export const productContext = createContext({});

export default function ProductProvider({ children }) {
  const [produtos, setProdutos] = useState("");
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

        //handleUploadImage(product.id);

        arr.push(product);
      });
      setProdutos(arr);
    });
  }

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <productContext.Provider value={{ produtos }}>
      {children}
    </productContext.Provider>
  );
}
