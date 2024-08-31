import React from 'react'
import { Link } from 'react-router-dom';

const UserCard = ({id, email, master, toggleDeleteModal, setUserToDeleteId}) => {
    return ( // TODO
        <>  
            <div className="card my-2">
                <footer className="card-footer">
                    <p className="card-footer-item is-justify-content-flex-start">{email}</p>
                    <p className="card-footer-item is-justify-content-flex-start">{master}</p>
                    <button onClick={toggleDeleteModal} className="button is-normal is-rounded is-link my-3">Delete</button>
                </footer>
            </div>
        </>
    )
}

export default UserCard