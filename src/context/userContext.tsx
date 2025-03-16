import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { Response } from "../types/types"


interface IUser {
    id: number
    username: string
    email: string
    role: string
}

interface IUserContext {
    user: IUser | null
    login: (email: string, password: string) => void
    register: (username: string, email: string, password: string) => void
    isAuthenticated: () => boolean
	logout: () => void
}

const initialValue: IUserContext = {
    user: null,
    login: (email:string, password: string) => {},
    register: (username:string, email:string, password: string) => {},
    isAuthenticated: () => {return false},
	logout: () => {}
}

const userContext = createContext<IUserContext>(initialValue)

export function useUserContext(){
    return useContext(userContext)
}

interface IUserContextProviderProps{
    children?: ReactNode
}

export function UserContextProvider(props: IUserContextProviderProps){
    const { children } = props

    const [user, setUser] = useState<IUser | null>(null)

    async function getUser(token: string){
        try {
			const response = await fetch(
				"http://localhost:8000/api/user/me",
				{
					method: "GET",
					headers: {
                        "Authorization": `Bearer ${token}`
					}
				}
			);
			const result: Response<IUser> = await response.json();

			if (result.status == "error") {
				console.log(result.message);
			} else {
				setUser(result.data)
			}
		} catch {}
    }
    
    async function login(email: string, password: string){
        try {
			const response = await fetch(
				"http://localhost:8000/api/user/login",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email: email, password: password }),
				}
			);
			const result: Response<string> = await response.json();

			if (result.status == "error") {
				console.log(result.message);
			} else {
				localStorage.setItem("token", result.data);
				getUser(result.data);
			}
		} catch {}
    }

    async function register(username: string, email: string, password: string){
        try {
			const response = await fetch(
				"http://localhost:8000/api/user/registration",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ username: username, email: email, password: password }),
				}
			);
			const result: Response<string> = await response.json();

			if (result.status == "error") {
				console.log(result.message);
			} else {
				localStorage.setItem("token", result.data);
				getUser(result.data);
			}
		} catch {}
    }
    
    function isAuthenticated(){
		const userToken = localStorage.getItem("token")
        if (!userToken) return false
		return true
    }

	function logout(){
		localStorage.removeItem("token")
        setUser(null)
    }

    useEffect(() => {
        const userToken = localStorage.getItem("token")
        if (!userToken){
            return
        }
        getUser(userToken)
    }, [])

    return (
        <userContext.Provider value={{user: user, login: login, register:register, isAuthenticated:isAuthenticated, logout: logout}}>
            {children}
        </userContext.Provider>
    )

}