import { createContext, useState, useContext } from "react";
import { db } from "../FireBaseConnection";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export const WishlistContext = createContext();

export function useWishlist() {
  return useContext(WishlistContext);
}

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState({});
  function addToWishlist(userId, product) {
    setWishlist((prevWishlist) => ({
      ...prevWishlist,
      [userId]: [...(prevWishlist[userId] || []), product],
    }));

    const userWishlistRef = doc(db, "userWishlist", userId);
    getDoc(userWishlistRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          updateDoc(userWishlistRef, {
            products: [...snapshot.data().products, product],
          });
        } else {
          setDoc(userWishlistRef, { products: [product] });
        }
      })
      .catch((error) => {
        console.error("Error updating wishlist in Firestore:", error);
      });
  }

  function removeFromWishlist(userId, productId) {
    setWishlist((prevWishlist) => ({
      ...prevWishlist,
      [userId]: prevWishlist[userId].filter((product) => product.id !== productId),
    }));
  }

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist}}>
      {children}
    </WishlistContext.Provider>
  );
}
