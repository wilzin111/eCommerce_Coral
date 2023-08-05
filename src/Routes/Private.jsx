import { useContext, useState } from "react";
import { DataUserContext } from "../Contexts/dataUser";
import { Navigate } from "react-router-dom";

export default function Private({ children }) {
    const { isLog } = useContext(DataUserContext)
    if (!isLog) {
        return (
            <>
                <Navigate to={'/'} />
            </>

        )
    }
    return children
}