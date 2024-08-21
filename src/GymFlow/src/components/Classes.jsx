import React, {useState} from 'react'
import NavBar from './NavBar'
import ClassCard from './ClassCard'
import PageHeading from './PageHeading'

const Classes = () => {
  return (
    <>
      <NavBar />
      <div class="container is-max-tablet">
        {/* <PageHeading /> */}
        <label class="label">Classes</label>
        <input 
          class="input is-rounded" 
          type="text" 
          placeholder="Search" 
        />
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