import { useState, createContext, useMemo } from "react";
import { db, storage } from "../FireBaseConnection";
import { collection, getDocs, query } from "@firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";

export const productContext = createContext({});

export default function ProductProvider({ children }) {
  const [produtos, setProdutos] = useState("");
  var arr = [];

  async function getProducts() {
    const q = query(collection(db, "products"));

    try {
      const snapProducts = await getDocs(q);
      snapProducts.forEach((doc) => {
        let product = {
          name: doc.data().name,
          price: doc.data().price,
          discount: doc.data().discount,
          brand: doc.data().brand,
          category: doc.data().category,
          colour: doc.data().colour,
          quantity: doc.data().quantity,
          subname: doc.data().subname,
          id: doc.data().id,
        };

        arr.push(product);
      });

      await Promise.all(
        arr.map(async (doc) => {
          const storageRef = storage;
          const imageRef = ref(storageRef, `images/products/${doc.id}`);
          try {
            const downloadURL = await getDownloadURL(imageRef);
            doc.url = downloadURL;
          } catch (error) {
            console.error("Error obtaining image URL:", error);
          }
        })
      );

      setProdutos(arr);
    } catch (error) {
      console.error("erro", error);
    }
  }

  const memoGetProducts = useMemo(() => {
    getProducts();
  }, []);

  return (
    <productContext.Provider value={{ produtos }}>
      {children}
    </productContext.Provider>
  );
}
