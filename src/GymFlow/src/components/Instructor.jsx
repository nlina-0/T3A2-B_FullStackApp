import React, { useState } from 'react'
import SearchField from './SearchField'
import ClientCard from './ClientCard'

const Instructor = () => {

  const [instructor, setInstructor] = useState(
    [
      {   
          id: 1,
          firstName: "Ran",
          lastName: "Jose",
          age: 35,
          email: "ran.yoga@email.com",
          phone: "0414980245"
      },
      {   
          id: 2,
          firstName: "Yule",
          lastName: "Yeuwl",
          age: 39,
          email: "yule.pilates@email.com",
          phone: "0412123124"
      }, 
      {
          id: 3,
          firstName: "Ned",
          lastName: "Fred",
          age: 31,
          email: "fred.boxing@email.com",
          phone: "0412123125"
      }
    ]
  )

  return (
    <>
    <div className="container is-max-tablet">
      <h2 className="label my-6 is-size-5 has-text-weight-medium has-text-centered">Instructors</h2>

      <div className="is-flex is-justify-content-center is-align-items-center">
            <button className="button is-normal is-rounded is-link my-6">Register New Instructor</button>
      </div>

      <div className="my-6">
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
          instructor.map((i) => (
            <ClientCard
              clientType="instructor"
              key={i.id}
              id={i.id}
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