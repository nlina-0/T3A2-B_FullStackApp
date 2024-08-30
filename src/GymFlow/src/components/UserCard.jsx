import React from 'react'
import { Link } from 'react-router-dom';

const UserCard = ({email, master}) => {
    return ( // TODO
        <>  
            <div className="card my-2">
                <footer className="card-footer">
                    <p className="card-footer-item is-justify-content-flex-start">{email}</p>
                    <p className="card-footer-item is-justify-content-flex-start">{master}</p>
                </footer>
            </div>
        </>
    )
}

export default UserCard