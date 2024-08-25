import React, { useState } from 'react'
import SearchField from './SearchField'
import CustomerCard from './CustomerCard'


const Customers = () => {

  const [customers, setCustomers] = useState(
    [
      {   
          id: 1,
          firstName: "Dwight",
          lastName: "Schrute",
          age: 35,
          email: "dwight.schrute@email.com",
          phone: "0412123123"
      },
      {   
          id: 2,
          firstName: "Bob",
          lastName: "Jones",
          age: 54,
          email: "bob.jones@email.com",
          phone: "0412123124"
      }, 
      {
          id: 3,
          firstName: "Samantha",
          lastName: "Brown",
          age: 23,
          email: "samantha.brown@email.com",
          phone: "0412123125"
      }
    ]
  )

  return (
    <>
    <div className="container is-max-tablet">
      <h2 className="label my-6 is-size-5 has-text-weight-medium">Customers</h2>
      <div className="my-6">
      <SearchField search="Search Customers"/>
      </div>
    </div>

    <div className="is-flex is-justify-content-center is-align-items-center">
      <button className="button is-normal is-rounded is-link my-6">Create New Customer</button>
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
          customers.map((c) => (
            <CustomerCard
              key="" 
              id={c.id}
              name={`${c.firstName} ${c.lastName}`}
              age={c.age}
              contact={c.email}
            />
          ))
        }
      
      </div>

    </div>
    
    
    </>
  )
}

export default Customers