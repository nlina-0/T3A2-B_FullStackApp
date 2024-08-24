import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ClassCard from './ClassCard'
import PageHeading from './PageHeading'

const Classes = ({ classes }) => {

  return (
    <>
      <div className="container is-max-tablet">
        <h2 className="label my-6 is-size-5 has-text-weight-medium">Classes</h2>
        <input 
          className="input is-rounded" 
          type="text" 
          placeholder="Search by class or instructor" 
        />
      </div>
      
      <div className="container is-max-tablet">
        {
          classes.map((cl) => (
            <ClassCard 
              key={cl.id} // unique key prop
              id={cl.id}
              classType={cl.classType}  
              instructor={cl.instructor} 
              date={cl.date} 
              time={cl.time} 
              capacity={cl.capacity}
            />
          ))
        }
      </div>

    </>
  )
}

export default Classes