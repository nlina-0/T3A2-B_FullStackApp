import React, { useState } from 'react'
import ClassCard from './ClassCard'
import SearchField from './SearchField'
import NewClassCard from './NewClassCard'

const Classes = ({ addClass, classes, instructors, classTypes }) => {
  // To activate and deactivate modal 
  const [isActive, setIsActive] = useState(false)
  const toggleModal = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <div className="container is-max-tablet">
       
        <h2 className="label my-6 is-size-5 has-text-weight-medium">Classes</h2> 
        
        <div className="columns">
          <div className="column is-three-fifths">
            <SearchField search="Search by class type or instructor" />
          </div>

          <div className="column">
            <button className="button is-link is-rounded js-modal-trigger" onClick={toggleModal}>New Class</button>
          </div>
        </div>

        <div className={`modal ${isActive ? 'is-active' : ""}`}>
              <div className="modal-background"></div>
              <div className="modal-content">
                  <NewClassCard addClass={addClass} instructors={instructors} classTypes={classTypes}/>
              </div>
              <button className="modal-close is-large" aria-label="close" onClick={toggleModal}></button>
          </div>

        {
          classes.map((cl) => (
            <ClassCard 
              key={cl._id} // unique key prop
              id={cl._id}
              name={cl.name}
              classType={cl.classType.name}
              instructor={cl.instructor.firstName + " " + cl.instructor.lastName} 
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