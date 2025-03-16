import "./ProfilePage.css"

import { useUserContext } from "../../context/userContext"
import { Navigate } from "react-router-dom"
import { useEffect } from "react"

export function ProfilePage(){

    const {user, isAuthenticated} = useUserContext()

    useEffect(() => {
        console.log(user)
        console.log(isAuthenticated())
    }, [])

    return (
        <div>
            {
                isAuthenticated()
                ? <div>
                    <h3>{user?.username}</h3>
                    <h3>{user?.email}</h3>
                </div>
                : <Navigate to="/login"/>
            }
        </div>
    )
}