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
    if (userCreated == true) {
        return (
            <div className="notification is-success is-light">User successfully created</div>
        )
    }
}

function UserExistsAlert({userExists}) {
    if (userExists == true) {
        return (
            <div className="notification is-danger is-light">User with this email already exists</div>
        )
    }
    return (null)
}


function UnauthorizedAlert({userUnauthorized}) {
    if (userUnauthorized === true) {
        return (
            <div className="notification is-danger is-light">Unauthorized. You must be a master user to perform this action.</div>
        )
    }
    console.log(userUnauthorized)
    return (null)
}

function InvalidPasswordAlert({passwordValidated}) {
    if (passwordValidated === false) {
        return (
            <div className="notification is-danger is-light">Invalid password</div>
        )
    }
    return (null)
}

function UserNotFoundAlert({userNotFound}) {
    if (userNotFound === true) {
        return (
            <div className="notification is-danger is-light">User not found</div>
            // console.log(passwordValidated)
        )
    }
    // console.log(passwordValidated)
    return (null)
}

// TODO: user deleted successfully
function UserDeletedAlert({userDeleted}) {
    if (userDeleted === true) {
        return (
            <div className="notification is-success is-light">User successfully deleted</div>
        )
    }
    return (null)
}

export { PasswordAlert, UserCreatedAlert, UserExistsAlert, UnauthorizedAlert, InvalidPasswordAlert, UserNotFoundAlert, UserDeletedAlert }