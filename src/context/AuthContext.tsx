'use client'
import { IUserSession } from "@/interfaces/Types"
import { createContext, useContext, useEffect, useState } from "react"

export interface AuthcontextProps {
    userData: IUserSession | null,
    setUserData: (userData: IUserSession | null) => void
}

export const Authcontext = createContext<AuthcontextProps>({
    userData: null,
    setUserData: () => {}
});

export interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthProvider:React.FC<AuthProviderProps> = ({children}) => {
    const [userData, setUserData] = useState<IUserSession | null>(null)

    useEffect(() => {
        if(userData) {
            localStorage.setItem("userSession", JSON.stringify({token: userData.token, user: userData.user}))
        }
    }, [userData])

    useEffect(() => {
        if(typeof window !== "undefined" && window.localStorage){
            const userData = JSON.parse(localStorage.getItem("userSession")!)
            setUserData(userData)
        }
    }, [])

    return (
        <Authcontext.Provider value={{userData, setUserData}}>{children}</Authcontext.Provider>
    )
}

export const useAuth = () => useContext(Authcontext);

