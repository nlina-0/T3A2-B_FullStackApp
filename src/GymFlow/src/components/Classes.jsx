import React, { useState } from 'react'
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

  // console.log("Classes in Classes page: ", classes)

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
                  <NewClassForm addClass={addClass} instructors={instructors} classTypes={classTypes}/>
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
              // classType={cl.classType.name}
              instructor={cl.instructor.firstName}
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