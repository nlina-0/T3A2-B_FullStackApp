import React from 'react'
import NavBar from './NavBar'
import SearchField from './SearchField'


const Customers = () => {
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

      <div className="card">
        <footer className="card-footer">
          <p className="card-footer-item is-justify-content-flex-start">Jess Connor</p>
          <p className="card-footer-item is-justify-content-flex-start">29</p>
          <p className="card-footer-item is-justify-content-flex-start">jess@mail.com</p>
        </footer>
      </div>
      
    </div>
    
    
    </>
  )
}

export default Customers