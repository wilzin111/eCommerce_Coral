import { doc, getDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../FireBaseConnection";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const DataUserContext = createContext({});
function DataUserProvider({ children }) {
  const [dataUser, setDataUser] = useState("");

  async function getDataUser(e) {
    try {
      if (!dataUser) {
        await getDoc(doc(db, "users", e)).then((value) => {
          setDataUser(value.data());
        });
      }
    } catch (error) { }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getDataUser(user.uid);
      }
    });
  }, []);
  
  async function logout() {
    await signOut(auth)
    setDataUser(null)
  }

  return (
    <DataUserContext.Provider value={{ dataUser, logout }}>
      {children}
    </DataUserContext.Provider>
  );
}

export default DataUserProvider;
