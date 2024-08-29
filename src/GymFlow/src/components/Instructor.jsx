import React, { useState } from 'react'
import SearchField from './SearchField'
import ClientCard from './ClientCard'

const Instructor = ({ instructors }) => {

  return (
    <>
    <div className="container is-max-tablet">
      <h2 className="label my-6 is-size-5 has-text-weight-medium has-text-centered">Instructors</h2>

      <div className="is-flex is-justify-content-center is-align-items-center">
            <button className="button is-normal is-rounded is-link my-6">Register New Instructor</button>
      </div>

      <div className="mt-6 ">
      <SearchField search="Search Instructor"/>
      </div>
    </div>

    

    <div className="container is-max-tablet">
    
      <div className="card customer-label">
        <footer className="card-footer mt-6">
          <p className="card-footer-item is-justify-content-flex-start">Name</p>
          <p className="card-footer-item is-justify-content-flex-start">Age</p>
          <p className="card-footer-item is-justify-content-flex-start">Contact</p>
        </footer>
      </div>

      <div>
        {
          instructors.map((i) => (
            <ClientCard
              clientType="instructor"
              key={i._id}
              id={i._id}
              name={`${i.firstName} ${i.lastName}`}
              age={i.age}
              contact={i.email}
            />
          ))
        }
      
      </div>

    </div>
    
    
    </>
  )
}

export default Instructor