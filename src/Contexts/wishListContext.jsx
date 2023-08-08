import { createContext, useState, useContext } from "react";

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
  }

  function removeFromWishlist(userId, productId) {
    setWishlist((prevWishlist) => ({
      ...prevWishlist,
      [userId]: prevWishlist[userId].filter((product) => product.id !== productId),
    }));
  }

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}
