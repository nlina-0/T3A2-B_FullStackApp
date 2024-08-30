import React, { useState } from 'react'
import { PasswordAlert } from './UserAlerts'

function DeleteUserForm({deleteUser, passwordValidated}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')

    const passwordCheckHandler = (e, passwordToCompare, setProperty) => { // params: typed pw, comparison pw, hook
        setProperty(e)
        if (e === '' && passwordToCompare === '') {
            setPasswordCheck('')
        } else {
            setPasswordCheck(e === passwordToCompare)
        }
        console.log(passwordCheck)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        
        if (passwordCheck == true) {
            let res = deleteUser(email, password) // TODO

            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setPasswordCheck('')
            console.log(passwordValidated) // TODO
        } else {
            console.log('Passwords not matching')
        }
    }

    return (
        <div className="card" id="new-class-card">
        <header className="card-header">
            <p className="card-header-title">Delete Existing User</p>
            <button className="card-header-icon" aria-label="more options">
            <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
            </button>
        </header>
        <div className="card-content">
            <form onSubmit={submitHandler}>
                <div className="field">
                    <label className="label mt-5">Email</label>
                    <div className="control">
                        <input 
                            className="input is-rounded has-text-link" 
                            type="text" 
                            placeholder="Email"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <label className="label mt-5">Password</label>
                    <div className="control">
                        <input 
                        className="input is-rounded has-text-link" 
                        type="text" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => passwordCheckHandler(e.target.value, confirmPassword, setPassword)}
                        />
                    </div>
                    <label className="label mt-5">Confirm password</label>
                    <div className="control">
                        <input 
                        className="input is-rounded has-text-link" 
                        type="text" 
                        placeholder="Confirm password" 
                        value={confirmPassword}
                        onChange={(e) => passwordCheckHandler(e.target.value, password, setConfirmPassword)}
                        />
                    </div>
                    <br/>
                    <div className="control">
                        <PasswordAlert passwordCheck={passwordCheck} />
                        {/* TODO: user feedback */}
                    </div>
                    <br/>
                    <div className="control mt-6">
                        <button className="button is-link is-fullwidth">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}

export default DeleteUserForm