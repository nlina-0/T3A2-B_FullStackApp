import React, {useState} from 'react'
import NavBar from './NavBar'
import ClassCard from './ClassCard'

const Classes = () => {
  return (
    <>
      <NavBar />
      <div class="container is-max-tablet">
        <h1>Classes</h1>  
        <button class="button is-primary">Search</button>
      </div>
      
      
      {/* component - search functionality */}
      {/* component - list of classes made from reusable component */}
      
      {/* Going to be a link */}
      <ClassCard classType=''/>
      <ClassCard classType=''/>
    </>
  )
}

export default Classes