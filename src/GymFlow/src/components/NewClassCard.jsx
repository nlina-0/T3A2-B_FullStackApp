import React, { useState } from 'react'
import InstructorSelector from './InstructorSelector'
import ClassTypeSelector from './ClassTypeSelector'


const NewClassCard = ({ addClass, instructors, classTypes }) => {

    const [name, setName] = useState("")
    const [time, setTime] = useState("")
    const [duration, setDuration] = useState("")
    const [capacity, setCapacity] = useState("")

    // Recieves selected instructor from instructor child component
    const [selectInstructor, setSelectedInstructor] = useState({})
    const handleSelectInstructor = (instructor) => {
        setSelectedInstructor(instructor)
    }
    console.log("Selected Instructor: ", selectInstructor)

    // TODO: Recieves selected class type from class type child component
    const [selectClassType, setSelectedClassType] = useState({})
    const handleSelectClassType = (classType) => {
        setSelectedClassType(classType)
    }
    console.log("Selected Class Type: ", selectClassType)
    
    // Form Submit handler
    const submitHandler = e => {
    e.preventDefault()
    addClass(name, time, selectInstructor, selectClassType, duration, capacity)
    }

  return (
    <div className="card" id="new-class-card">
        <header className="card-header">
            <p className="card-header-title">Add New Class</p>
            <button className="card-header-icon" aria-label="more options">
            <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
            </button>
        </header>
        <div className="card-content">

        <form onSubmit={submitHandler}>
                <div className="field">
                <label className="label mt-5">Name</label>
                    <div className="control">
                        <input 
                          className="input is-rounded has-text-link" 
                          type="" 
                          // name="name"
                          placeholder="hot yoga, reformer pilates... " 
                          value={name} 
                          onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <ClassTypeSelector classTypes={classTypes} onSelectedClassType={handleSelectClassType}/>
                    <InstructorSelector instructors={instructors} onSelectedInstructor={handleSelectInstructor}/>

                    <label className="label mt-5">Date</label>
                    <div className="control">
                        <input 
                          className="input is-rounded has-text-link" 
                          type="date" 
                          // name="Date"
                          placeholder="" 
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                        />
                    </div>
                    <label className="label mt-5">Duration</label>
                    <div className="control">
                        <input 
                          className="input is-rounded has-text-link" 
                          type="" 
                          // name="Duration"
                          placeholder="min." 
                          value={duration}
                          onChange={(e) => setDuration(e.target.value)}
                        />
                    </div>
                    <label className="label mt-5">Max capacity</label>
                    <div className="control">
                        <input 
                          className="input is-rounded has-text-link" 
                          type="number" 
                          placeholder="" 
                          value={capacity}
                          onChange={(e) => setCapacity(e.target.value)}
                        />
                    </div>

                    <footer className="card-footer">
                        <button className="button card-footer-item is-link">Submit</button>
                        <a href="#" className="card-footer-item">Delete</a>
                    </footer>
                    
                    {/* <div className="control mt-6">
                        <button className="button is-link is-fullwidth">Submit</button>
                    </div> */}

                </div>
            </form>

        </div>
        {/* <footer className="card-footer">
            <a href="#" className="card-footer-item">Save</a>
            <a href="#" className="card-footer-item">Delete</a>
        </footer> */}
    </div>
  )
}

export default NewClassCard