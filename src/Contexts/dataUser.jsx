import { doc, getDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../FireBaseConnection";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const DataUserContext = createContext({});
function DataUserProvider({ children }) {
  const [dataUser, setDataUser] = useState("");
  const [isLog, setIsLog] = useState(false)

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
        setIsLog(true)
      }
    });
  }, []);

  async function logout() {
    await signOut(auth)
    setDataUser('')
    setIsLog(false)
  }

  return (
    <DataUserContext.Provider value={{ dataUser, logout, isLog }}>
      {children}
    </DataUserContext.Provider>
  );
}

export default DataUserProvider;
