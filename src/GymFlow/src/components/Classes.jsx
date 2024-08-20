import React, {useState} from 'react'
import NavBar from './NavBar'
import ClassCard from './ClassCard'

const Classes = () => {
  return (
    <>
      <NavBar />
      <h1>Classes</h1>
      {/* component - search functionality */}
      {/* component - list of classes made from reusable component */}
      
      {/* Going to be a link */}
      <ClassCard classType=''/>
    </>
  )
}

export default Classes