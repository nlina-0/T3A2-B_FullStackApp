import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ClassCard from './ClassCard'
import SearchField from './SearchField'
import NewClassForm from './NewClassForm'

// Provides a search bar for classes, displays list of classes and a button to create a class.

const Classes = ({ addClass, classes, instructors, classTypes }) => {
  // To activate and deactivate modal 
  const [isActive, setIsActive] = useState(false)
  const toggleModal = () => {
    setIsActive(!isActive)
  }

  const nav = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    time: '',
    duration: '',
    capacity: ''
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
      <div className="container is-max-tablet">
       
        <h2 className="label my-6 is-size-5 has-text-weight-medium">Classes</h2> 
        
        <div className="columns">
          <div className="column is-three-quarters">
            <SearchField search="Search by class type or instructor" />
          </div>

          <div className="column is-one-quarter">
            <button className="button is-link is-rounded js-modal-trigger is-fullwidth" onClick={toggleModal}>Add Class</button>
          </div>
        </div>

        <div className={`modal ${isActive ? 'is-active' : ""}`}>
            <div className="modal-background">
              <div className="modal-content">
                  <NewClassForm 
                    formTitle="New Class"
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

        {
          classes.map((cl) => (
            <ClassCard 
              key={cl._id} // unique key prop
              id={cl._id}
              name={cl.name}
              classType={cl.classType.name}
              instructor={`${cl.instructor.firstName} ${cl.instructor.lastName}`}
              time={cl.time}
              duration={cl.duration} 
              capacity={cl.capacity}
            />,
          ))
        }
      </div>
    </>
  )
}

export default Classes