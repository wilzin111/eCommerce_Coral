import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../FireBaseConnection";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export const BagContext = createContext();

export function useBag() {
  return useContext(BagContext);
}

export function BagProvider({ children }) {
  const [bags, setBags] = useState({});
  const [currentUser, setCurrentUser] = useState(null);

  async function loadBagData(userId) {
    try {
      const userBagRef = doc(db, "userBags", userId);
      const userBagSnapshot = await getDoc(userBagRef);

      if (userBagSnapshot.exists()) {
        setBags((prevBags) => ({
          ...prevBags,
          [userId]: userBagSnapshot.data().products,
        }));
      }
    } catch (error) {
      console.error("Error loading bag data:", error);
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);

        if (!bags[user.uid]) {
          loadBagData(user.uid);
        }
      } else {
        setCurrentUser(null);
      }
    });
  }, [bags]);

  async function addToBag(product) {
    if (currentUser) {
      const userId = currentUser.uid;

      const updatedBag = [...(bags[userId] || []), product];
      setBags((prevBags) => ({
        ...prevBags,
        [userId]: updatedBag,
      }));

      const userBagRef = doc(db, "userBags", userId);
      await setDoc(userBagRef, { products: updatedBag });
    }
  }

  async function removeFromBag(productId) {
    if (currentUser) {
      const userId = currentUser.uid;

      const updatedBag = bags[userId]?.filter((product) => product.id !== productId) || [];
      setBags((prevBags) => ({
        ...prevBags,
        [userId]: updatedBag,
      }));

      const userBagRef = doc(db, "userBags", userId);
      await setDoc(userBagRef, { products: updatedBag });
    }
  }

  return (
    <BagContext.Provider value={{ bags, addToBag, removeFromBag }}>
      {children}
    </BagContext.Provider>
  );
}
