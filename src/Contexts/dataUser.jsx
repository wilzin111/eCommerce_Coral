import { doc, getDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../FireBaseConnection";
import { onAuthStateChanged } from "firebase/auth";

export const DataUserContext = createContext({})
function DataUserProvider({ children }) {

    const [dataUser, setDataUser] = useState('');

    async function getDataUser(e) {

        try {
            if (!dataUser) {
                await getDoc(doc(db, 'users',e))
                    .then((value) => {
                        setDataUser(value.data());
                    })
            }

        } catch (error) {
        }

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getDataUser(user.uid)
            }
        })
    })

    return (
        <DataUserContext.Provider value={{dataUser}}>
            {children}
        </DataUserContext.Provider>
    )
}

export default DataUserProvider;