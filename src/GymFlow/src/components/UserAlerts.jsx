import React from 'react'

function PasswordAlert({passwordCheck}) {
    if (passwordCheck === true || passwordCheck === '') {
        return (null)
    }
    
    return (
        <div className="notification is-danger is-light">Passwords don't match</div>
    )
}

function UserCreatedAlert({userCreated}) {
    if (userCreated == false) {
        return (null)
    } 
    return (
        <div className="notification is-success is-light">User successfully created</div>
    )
}

export { PasswordAlert, UserCreatedAlert }