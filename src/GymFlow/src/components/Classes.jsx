import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ClassCard from './ClassCard'
import PageHeading from './PageHeading'

const Classes = ({ classes }) => {

  return (
    <>
      <div class="container is-max-tablet">
        <label class="label">Classes</label>
        <input 
          class="input is-rounded" 
          type="text" 
          placeholder="Search by class or instructor" 
        />
      </div>
      
      <div class="container is-max-tablet">
        {
          classes.map((cl) => (
            <ClassCard 
              id={cl.id}
              classType={cl.classType}  
              instructor={cl.instructor} 
              date={cl.date} 
              time={cl.time} 
              space={cl.space}
            />
          ))
        }
      </div>

    </>
  )
}

export default Classes