import { useEffect } from "react"
import "./LogoutPage.css"

import { Navigate } from "react-router-dom"
import { useUserContext } from "../../context/userContext"

export function LogoutPage(){

    const {logout} = useUserContext()

    useEffect(() => {
        logout()
    }, [])

    return (
        <Navigate to="/"></Navigate>
    )
}