import React from 'react'

function PasswordAlert({passwordCheck}) {
    if (passwordCheck === true || passwordCheck === '') {
        return (null)
    }
    
    return (
        <div className="notification is-danger is-light">Passwords don't match</div>
    )
}

function UserCreatedAlert({userCreated, userExists, email}) {
    if (userCreated == false) {
        return (null)
    } 
    if (userCreated == true && email == '' && userExists == false) {
        return (
            <div className="notification is-success is-light">User successfully created</div>
        )
    }
}

function UserExistsAlert({userExists, email}) {
    // if (userExists == false || email == false) {
    //     return (null)
    // }
    if (userExists == true && email == '') {
        return (
            <div className="notification is-danger is-light">User with this email already exists</div>
        )
    }
    return (null)
}

export { PasswordAlert, UserCreatedAlert, UserExistsAlert }