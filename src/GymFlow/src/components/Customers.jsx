import React from 'react'
import NavBar from './NavBar'
import SearchField from './SearchField'

const Customers = () => {
  return (
    <>
    <div className="container is-max-tablet">
      <h2 className="label my-6 is-size-5 has-text-weight-medium">Customers</h2>
      <SearchField search="Search Customers"/>
    </div>
      {/* List of customers */}
    </>
  )
}

export default Customers