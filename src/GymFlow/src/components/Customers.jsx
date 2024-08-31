import React, { useState } from 'react'
import ClientCard from './ClientCard'
import SearchField from './SearchField'


const Customers = () => {
  const [search, setSearch] = useState()

  // TODO: lift this to parent so it can use the same useEffect as classes
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

      <div className="columns">
          <div className="column is-three-quarters">
            <SearchField search="Search Customer" />
          </div>

          <div className="column is-one-quarter">
            <button className="button is-link is-rounded js-modal-trigger is-fullwidth" >Add Customer</button>
          </div>
      </div>
    
      <div className="card customer-label">
        <footer className="card-footer mt-6">
          <p className="card-footer-item is-justify-content-flex-start">Name</p>
          <p className="card-footer-item is-justify-content-flex-start">Age</p>
          <p className="card-footer-item is-justify-content-flex-start">Contact</p>
        </footer>
      </div>

      <div>
        {
          // .filter((c) => {
          //   return search.toLowerCase() === "" 
          //   ? c
          //   : c.firstName.toLowerCase().includes(search)
          // })
          customers
          .map((c) => (
            <ClientCard
              clientType="customer"
              key={c.id}
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