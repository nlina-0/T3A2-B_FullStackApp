import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const ClassDetails = ({ currentClass, fetchClasses }) => {

  const navigate = useNavigate()
  const token = localStorage.getItem("site")
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({ ...currentClass })
      
  // how to delete form?
  const deleteClass = async (class_id) => {
    const res = await fetch(`http://localhost:3000/classes/${class_id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    navigate('/classes')
    return 
  }

  const handleDelete = async (class_id) => {
    await deleteClass(class_id)
    fetchClasses()
  }

  // const [selectedInstructor, setSelectedInstructor] = useState({})
  // console.log("First 1: ", selectedInstructor)
 

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setFormData({...formData, [name]: value})
  // }

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
          <button className="button is-link" onClick={() => handleDelete(currentClass._id)}>Delete</button>
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