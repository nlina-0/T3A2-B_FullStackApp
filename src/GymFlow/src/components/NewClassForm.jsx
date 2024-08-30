import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InstructorSelector from './InstructorSelector'
import ClassTypeSelector from './ClassTypeSelector'

// New class form that goes into modal

const NewClassForm = ({ addClass, instructors, classTypes }) => {

    const nav = useNavigate()
    
    const [name, setName] = useState("")
    const [time, setTime] = useState("")
    const [duration, setDuration] = useState("")
    const [capacity, setCapacity] = useState("")

    // Recieves selected instructor from instructor child component
    const [selectInstructor, setSelectedInstructor] = useState({})
    const handleSelectInstructor = (instructor) => {
        setSelectedInstructor(instructor)
    }

    // Recieves selected class type from class type child component
    const [selectClassType, setSelectedClassType] = useState({})
    const handleSelectClassType = (classType) => {
        setSelectedClassType(classType)
    }
    
    // Form Submit handler
    const submitHandler = async e => {
        e.preventDefault()
        const id = await addClass(name, time, selectInstructor, selectClassType, duration, capacity)
        nav(`/classes/${id}`)
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

                    <footer className="card-footer" id="class-form-button">
                        <button className="button card-footer-item is-link">Submit</button>
                        {/* <button className="card-footer-item">Cancel</button> */}
                    </footer>

                </div>
            </form>
        </div>
    </div>
  )
}

export default NewClassForm