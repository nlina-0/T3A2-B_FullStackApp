import React, { useState } from 'react'
import SearchField from './SearchField'
import ClientCard from './ClientCard'

const Instructor = ({ instructors }) => {

  return (
    <>
    <div className="container is-max-tablet">
      <h2 className="label my-6 is-size-5 has-text-weight-medium">Instructors</h2>

      <div className="columns">
          <div className="column is-three-quarters">
            <SearchField search="Search Instructor" />
          </div>

          <div className="column is-one-quarter">
            <button className="button is-link is-rounded js-modal-trigger is-fullwidth" >Add Instructor</button>
          </div>
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