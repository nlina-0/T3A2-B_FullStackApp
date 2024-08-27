import { useContext, createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    // const [email, setEmail] = useState(null)
    // const [password, setPassword] = useState(null)
    // const [user, setUser] = useState(null)
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

            // console.log("Response status:", response.status)

            const res = await response.json()

            // data is undefined
            // console.log("Response data:", res.data);

            if (res) {
                // setEmail(res.email)
                // setPassword(res.password)
                // setUser(res.data)
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
        // setEmail(null)
        // setPassword(null)
        // setUser(null)
        setToken("")
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