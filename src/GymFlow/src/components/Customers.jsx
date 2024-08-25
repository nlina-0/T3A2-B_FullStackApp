import React, { useState } from 'react'
import ClientCard from './ClientCard'


const Customers = () => {
  const [search, setSearch] = useState()

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
      <h2 className="label my-6 is-size-5 has-text-weight-medium has-text-centered">Customers</h2>
      <div className="my-6">
      {/* <SearchField search="Search Customers"/> */}
      </div>

    <div className="is-flex is-justify-content-center is-align-items-center">
      <button className="button is-normal is-rounded is-link my-6">Create New Customer</button>
    </div>
    
    <div className="field has-addons my-6">
        <div className="control is-expanded">
          <input 
            className="input is-rounded" 
            type="text" 
            placeholder="Search customer"
            onChange={(e) => setSearch(e.target.value)} 
          />
        </div>
        <div className="control">
          <button className="button is-link is-rounded">
            Search
          </button>
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