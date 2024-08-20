import React, {useState} from 'react'
import NavBar from './NavBar'
import ClassDetails from './ClassDetails'

const Classes = () => {
  return (
    <>
      <NavBar />
      <h1>Classes</h1>
      {/* component - search functionality */}
      {/* component - list of classes made from reusable component */}
      <ClassDetails />
    </>
  )
}

export default Classes