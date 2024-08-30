import React, { useState } from 'react'
import ClientCard from './ClientCard'
import UserCard from './UserCard'
import NewUserForm from './NewUserForm'
import DeleteUserForm from './DeleteUserForm'


const Users = ({users, addUser, userExists, deleteUser, passwordValidated}) => {
    const [search, setSearch] = useState()
    const [isRegisterActive, setIsRegisterActive] = useState(false)
    const [isDeleteActive, setIsDeleteActive] = useState(false)
    const [userToDeleteId, setUserToDeleteId] = useState('')


    const toggleRegisterModal = () => {
        setIsRegisterActive(!isRegisterActive)
    }

    const toggleDeleteModal = (selectedUserId) => {
        setUserToDeleteId(selectedUserId);
        setIsDeleteActive(!isDeleteActive);        
    }

    return (
        <>
            <div className="container is-max-tablet">
                <h2 className="label my-6 is-size-5 has-text-weight-medium has-text-centered">Users</h2>
                <div className="is-flex is-justify-content-center is-align-items-center">
                    <button onClick={toggleRegisterModal} className="button is-normal is-rounded is-link my-6">Register new User</button>
                </div>
                <div className={`modal ${isRegisterActive ? 'is-active' : ""}`}>
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        <NewUserForm addUser={addUser} userExists={userExists}/>
                    </div>
                    <button className="modal-close is-large" aria-label="close" onClick={toggleRegisterModal}></button>
                </div>
                {/* TBC */}
                <div className={`modal ${isDeleteActive ? 'is-active' : ""}`}>
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        <DeleteUserForm deleteUser={deleteUser} passwordValidated={passwordValidated} userToDeleteId={userToDeleteId} />
                    </div>
                    <button className="modal-close is-large" aria-label="close" onClick={toggleDeleteModal}></button>
                </div>
            
                <div className="field has-addons my-6">
                    <div className="control is-expanded">
                        <input 
                            className="input is-rounded" 
                            type="text" 
                            placeholder="Search user"
                            onChange={(e) => setSearch(e.target.value)} 
                        />
                    </div>
                    <div className="control">
                        <button className="button is-link is-rounded">Search</button>
                    </div>
                </div>
                
                <div className="card customer-label">
                    <footer className="card-footer mt-6">
                        <p className="card-footer-item is-justify-content-flex-start">Email</p>
                        <p className="card-footer-item is-justify-content-flex-start">Master</p>
                    </footer>
                </div>
                <div>
                    {users.map((u) => (
                        <UserCard
                            key={u._id}
                            id={u._id}
                            email={u.email}
                            master={u.master}
                            toggleDeleteModal={toggleDeleteModal}
                            setUserToDeleteId={setUserToDeleteId}
                            // master={u.master.toString()}
                        />
                        
                    ))}
                </div>
            </div>
        </>
  )
}

export default Users