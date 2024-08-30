import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import NewClassForm from './NewClassForm'

const ClassDetails = ({ currentClass, fetchClasses, addClass, classes, instructors, classTypes }) => {

    // To activate and deactivate modal 
    const [isActive, setIsActive] = useState(false)
    const toggleModal = () => {
      setIsActive(!isActive)
    }

  const nav = useNavigate()
  const token = localStorage.getItem("site")
      
  // Delete class from class details
  const deleteClass = async (class_id) => {
    const res = await fetch(`http://localhost:3000/classes/${class_id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    nav('/classes')
    return 
  }

  // Delete Class
  const handleDelete = async (class_id) => {
    await deleteClass(class_id)
    fetchClasses()
  }

  console.log(currentClass)

  const [formData, setFormData] = useState({
    name: currentClass.name,
    time: currentClass.time,
    duration: currentClass.duration,
    capacity: currentClass.capacity
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  // // Recieves selected instructor from instructor child component
  const [selectInstructor, setSelectedInstructor] = useState({})
  const handleSelectInstructor = (instructor) => {
      setSelectedInstructor(instructor)
  }

  // // Recieves selected class type from class type child component
  const [selectClassType, setSelectedClassType] = useState({})
  const handleSelectClassType = (classType) => {
      setSelectedClassType(classType)
  }

  const { name, time, duration, capacity } = formData
  
  // Form Submit handler
  const submitHandler = async (e) => {
      e.preventDefault()
      const id = await addClass(name, time, selectInstructor, selectClassType, duration, capacity)
      nav(`/classes/${id}`)
  }




  return (
    <>
    <div>

      <section className="section is-medium" id="class-detail">
        <div className="container is-max-tablet">
          <h1>{currentClass.name}</h1>
          <p>{`${currentClass.instructor.firstName} ${currentClass.instructor.lastName}`}</p>
          <p>{currentClass.classType.name}</p>
          <p>When: {currentClass.time}</p>
          <p>Time: {currentClass.duration} min</p>
          <p>Class capacity: {currentClass.capacity}</p>
          
          <div id="buttons-class-detail-form">
          <button className="button is-link buttons-class-detail-form" onClick={toggleModal}>Edit</button>
          <button className="button is-danger buttons-class-detail-form" onClick={() => handleDelete(currentClass._id)}>Delete</button>
          <button className="button is-link buttons-class-detail-form">Add Customer to Booking</button>
          </div>
        </div>
      </section>
  
      <div className={`modal ${isActive ? 'is-active' : ""}`}>
            <div className="modal-background">
              <div className="modal-content">
                  <NewClassForm 
                    formTitle={currentClass.name}
                    handleChange={handleChange}
                    formData={formData}
                    instructors={instructors}
                    classTypes={classTypes}
                    submitHandler={submitHandler}
                    handleSelectClassType={handleSelectClassType}
                    handleSelectInstructor={handleSelectInstructor}
                  />
              </div>
              <button className="modal-close is-large" aria-label="close" onClick={toggleModal}></button>
            </div>
        </div>
    
    </div>
    </>
  )
}

export default ClassDetails