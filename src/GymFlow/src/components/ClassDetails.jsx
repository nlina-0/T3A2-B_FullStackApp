import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ClassDetails = ({ currentClass }) => {

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({ ...currentClass })
  
  
  // const [selectedInstructor, setSelectedInstructor] = useState({})
  // console.log("First 1: ", selectedInstructor)
 

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
  }

    // Instructor handler
    // const handleInstructorChange = (e) => {
    //   const selectedFullName = e.target.value;
    //   const instructor = instructors.find(
    //     (i) => `${i.firstName} ${i.lastName}` === selectedFullName
    //   )
    //   setSelectedInstructor(instructor || {})
    // }


  return (
    <>
    <div>
      {!isEditing ? (
      <section className="section is-medium" id="class-detail">
        <div className="container is-max-tablet">
          <h1>{currentClass.name}</h1>
          <p>{`${currentClass.instructor.firstName} ${currentClass.instructor.lastName}`}</p>
          <p>{currentClass.classType.name}</p>
          <p>When: {currentClass.time}</p>
          <p>Time: {currentClass.duration} min</p>
          <p>Class capacity: {currentClass.capacity}</p>
          <button className="button is-link" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="button is-link">Add Customer to Booking</button>
        </div>
      </section>
      ) : (
        
        ""
      
      )
    }
    </div>
    </>
  )
}

export default ClassDetails