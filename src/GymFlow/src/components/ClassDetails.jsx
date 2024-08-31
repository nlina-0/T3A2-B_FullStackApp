import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import NewClassForm from './NewClassForm'

const ClassDetails = ({ currentClass, fetchClasses, instructors, classTypes }) => {

  // To activate and deactivate modal 
  const [isActive, setIsActive] = useState(false)
  const toggleModal = () => {
    setIsActive(!isActive)
  }

  const nav = useNavigate()
  const token = localStorage.getItem("site")
      
  // current form of selected page
  const [currentFormData, setCurrentFormData] = useState({
    name: currentClass.name,
    time: currentClass.time,
    duration: currentClass.duration,
    capacity: currentClass.capacity
  })

  const currentInstructor = currentClass.instructor
  const [selectInstructor, setSelectedInstructor] = useState(currentInstructor)
  
  const currentClassType = currentClass.classType
  const [selectClassType, setSelectedClassType] = useState(currentClassType)

  const handleChange = (e) => {
    const { name, value } = e.target
    setCurrentFormData({
      ...currentFormData,
      [name]: value
    })
  }

  const handleSelectInstructor = (instructor) => setSelectedInstructor(instructor)
  const handleSelectClassType = (classType) => setSelectedClassType(classType)

  // Delete Class
  const handleDelete = async (class_id) => {
    await deleteClass(class_id)
    fetchClasses()
  }

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

  // Getting Id from curent class 
  const currentClassID = currentClass._id

  // Form Edit handler
  const handleEdit = async (e) => {
      e.preventDefault()
      await updateClass()
      toggleModal()
      fetchClasses()
      nav(`/classes/${currentClassID}`)
  }

  const updateClass = async () => {
    try {
      const res = await fetch(`http://localhost:3000/classes/${currentClassID}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...currentFormData,
        instructor: selectInstructor,
        classTypes: selectClassType
      })
    })
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    } 
    const data = await res.json()
    console.log('Class updated successfully: ', data)
    } catch (error) {
      console.log('Failed to update class: ', error)
    }
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
                    formData={currentFormData} //switch between two states?
                    instructors={instructors}
                    classTypes={classTypes}
                    submitHandler={handleEdit} 
                    handleSelectClassType={handleSelectClassType}
                    handleSelectInstructor={handleSelectInstructor}
                    currentClass={currentClass}
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