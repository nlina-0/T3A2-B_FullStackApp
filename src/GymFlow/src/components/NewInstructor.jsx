import React, { useState } from 'react'

const NewInstructor = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

  return (
    <>
      <div className="columns is-centered" >
        <div className="container card column" id="user-login">
        <div >
            <form >
                <h2 className="label mt-6 mb-6 is-size-5 has-text-weight-medium">New Instructor</h2>
                <div className="field">
                <label className="label mt-5">First Name</label>
                    <div className="control">
                        <input 
                          className="input is-rounded has-text-link" 
                          type="text" 
                          placeholder="First Name" 
                          value={firstName} 
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <label className="label mt-5">Last Name</label>
                    <div className="control">
                        <input 
                          className="input is-rounded has-text-link" 
                          type="text" 
                          placeholder="Last Name" 
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                    </div> 
                    <label className="label mt-5">Age</label>
                    <div className="control">
                        <input 
                          className="input is-rounded has-text-link" 
                          type="number" 
                          placeholder="Age" 
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
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
                    <label className="label mt-5">Phone</label>
                    <div className="control">
                        <input 
                          className="input is-rounded has-text-link" 
                          type="tel" 
                          placeholder="" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
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

export default NewInstructor