import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ClassDetails = ({ currentClass, instructors }) => {

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
          {/* <p>{currentClass.instructor}</p> */}
          <p>When: {currentClass.time}</p>
          <p>Time: {currentClass.duration} min</p>
          <p>Class capacity: {currentClass.capacity}</p>
          <button className="button is-link" onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      </section>
      ) : (
        
<div className="columns is-centered" >
        <div className="container card column is-two-thirds" id="user-login">
          <h2 className="label mt-6 mb-6 is-size-5 has-text-weight-medium">{formData.name}</h2>
            <form>
                <div className="field">
                <label className="label mt-5">Name</label>
                    <div className="control">
                        <input 
                          className="input is-rounded has-text-link" 
                          type="" 
                          // name="name"
                          placeholder="hot yoga, reformer pilates... " 
                          value={formData.name} 
                          onChange={handleChange}
                        />
                    </div>

                      {/* <label className="label mt-5">Class Type</label>
                      <div className="control">
                          <div className="select is-link is-rounded">
                            <select value={formData.classType || ""} onChange="">

                              <option value="">Select Class Type...</option>
                              
                              {
                                classTypes.map((c) => {
                                  return (
                                    <option key={c.name} value={c.name}>
                                      {c.name}
                                    </option>
                                    )
                                })
                              }
                              
                            </select>
                          </div>
                      </div> */}

                      {/* <label className="label mt-5">Instructor</label>
                      <div className="control">

                          <div className="select is-link is-rounded">
                            <select value={selectedInstructor ? `${selectedInstructor.firstName} ${selectedInstructor.lastName}` : ""} onChange={handleInstructorChange}>

                              <option value="">{`${formData.instructor.firstName} ${formData.instructor.lastName}`}</option>
                              
                              {
                                instructors.map((i) => {
                                  return (
                                    <option key={i.id} value={`${i.firstName} ${i.lastName}`}>
                                      {`${i.firstName} ${i.lastName}`}
                                    </option>
                                    )
                                })
                              }
                              
                            </select>
                          </div>
                      </div> */}

                      <label className="label mt-5">Date</label>
                      <div className="control">
                          <input 
                            className="input is-rounded has-text-link" 
                            type="date" 
                            // name="Date"
                            placeholder="" 
                            value={formData.time}
                            onChange={handleChange}
                          />
                      </div>
                      <label className="label mt-5">Duration</label>
                      <div className="control">
                          <input 
                            className="input is-rounded has-text-link" 
                            type="" 
                            // name="Duration"
                            placeholder="min." 
                            value={formData.duration}
                            onChange={handleChange}
                          />
                      </div>
                      <label className="label mt-5">Max capacity</label>
                      <div className="control">
                          <input 
                            className="input is-rounded has-text-link" 
                            type="number" 
                            placeholder="" 
                            value={formData.capacity}
                            onChange={handleChange}
                          />
                      </div>
                      
                      <div className="control mt-6">
                          <button className="button is-link is-fullwidth">Submit</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
      
      )
    }
    </div>
    </>
  )
}

export default ClassDetails