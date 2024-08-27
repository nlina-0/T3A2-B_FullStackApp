import React, {useState} from 'react'
import { useAuth } from './AuthProvider'

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [error, setError] = useState('');
    // const [success, setSuccess] = useState(false)


    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     // put in try block
    //     const response = await fetch('http://localhost:3000/login', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ email, password }),
    //     });
    
    //     if (!response.ok) {
    //     throw new Error('Login failed');
    //     }
    
    //     const data = await response.json();
    //     // Store token in local storage for protected routes
    //     localStorage.setItem('token', data.token)

    // }

    const auth = useAuth()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.email !== "" && input. password !== "" ) {
            auth.loginAction(input)
            return
        }
        alert("please provide valid input")
    }

    const handleInput = (e) => {
        const { name, value } = e.target
        setInput((prev => ({
            ...prev,
            [name]: value,
        })))
    }

    

  return (
    <>
    <div className="columns is-centered" >
        <div className="container card column is-two-fifths" id="user-login">
       
        <h2 className="label mt-6 mb-6 is-size-5 has-text-weight-medium">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label mt-5">Email</label>
                    <div className="control">
                        <input 
                            className="input is-rounded has-text-link" 
                            type="email" 
                            placeholder="Email"
                            name="email" 
                            value={input.email} 
                            onChange={handleInput}
                        />
                    </div>
                    <label className="label mt-5">Password</label>
                    <div className="control">
                        <input 
                            className="input is-rounded has-text-link" 
                            type="password" 
                            placeholder="Password" 
                            name="password"
                            value={input.password} 
                            onChange={handleInput} 
                        />
                    </div>
                    <div className="control mt-6">
                        <button className="button is-link is-fullwidth">Submit</button>
                    </div>
                </div>
            </form>
        
        </div>
    </div>
    </>
  )
}

export default Login