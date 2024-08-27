import { useContext, createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("site") || "")
    const navigate = useNavigate()
    
    const loginAction = async ({email, password}) => {
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })

            console.log("Response status:", response.status)

            const res = await response.json()

            if (res) {
                setToken(res.token)
                localStorage.setItem("site", res.token)
                navigate("/classes")
                return
            }
            throw new Error(res.message)
        } catch (err) {
            console.error(err)
        }
    }

    const logOut = () => {
        setToken(localStorage.clear())
        localStorage.removeItem("site")
        navigate("/login")
    }

    return (
    <AuthContext.Provider value={{token, loginAction, logOut}}>
        {children}
    </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => {
    return useContext(AuthContext)
}