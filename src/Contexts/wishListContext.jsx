import { createContext, useState, useContext, useEffect } from "react";
import { db } from "../FireBaseConnection";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export const WishlistContext = createContext();

export function useWishlist() {
  return useContext(WishlistContext);
}

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState({});
  const [localStorageLoaded, setLocalStorageLoaded] = useState(false);

  useEffect(() => {
    if (!localStorageLoaded) {
      const storedWishlist = localStorage.getItem("wishlist");
      if (storedWishlist) {
        setWishlist(JSON.parse(storedWishlist));
      }
      setLocalStorageLoaded(true);
    }
  }, [localStorageLoaded]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  function addToWishlist(userId, product) {
    if (!wishlist[userId]?.some((p) => p.id === product.id)) {
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
  }

  function removeFromWishlist(userId, productId) {
    setWishlist((prevWishlist) => ({
      ...prevWishlist,
      [userId]: prevWishlist[userId]?.filter((product) => product.id !== productId) || [],
    }));
    
    const userWishlistRef = doc(db, "userWishlist", userId);
    updateDoc(userWishlistRef, {
      products: wishlist[userId]?.filter((product) => product.id !== productId) || [],
    }).catch((error) => {
      console.error("Error updating wishlist in Firestore:", error);
    });
  }

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}
