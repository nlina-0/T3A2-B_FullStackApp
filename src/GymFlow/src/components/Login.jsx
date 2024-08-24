import React, {useState} from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
    }

    const validate = () => {
        // TODO: Add form validation
    }
    

  return (
    <>
    <div className="columns is-centered" >
        <div className="card" id="user-login">
        <div >
        <h2 className="label mt-6 mb-6 is-size-5 has-text-weight-medium">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label mt-5">Email</label>
                    <div className="control">
                        <input 
                            className="input is-rounded has-text-link" 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <label className="label mt-5">Password</label>
                    <div className="control">
                        <input 
                            className="input is-rounded has-text-link" 
                            type="password" 
                            placeholder="Password" 
                            value={pass} 
                            onChange={(e) => setPass(e.target.value)} 
                        />
                    </div>
                    <div className="control mt-6">
                        <button className="button is-link is-fullwidth">Submit</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    </div>
    </>
  )
}

export default Login