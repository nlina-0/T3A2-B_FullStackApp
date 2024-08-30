import React, { useState } from 'react'
import InstructorSelector from './InstructorSelector'
import ClassTypeSelector from './ClassTypeSelector'

// New class form that goes into modal

const NewClassForm = ({ formTitle, instructors, classTypes, submitHandler, handleSelectClassType, handleSelectInstructor, handleChange, formData, currentClass }) => {

  return (
    <div className="card" id="new-class-card">
        <header className="card-header">
            <p className="card-header-title">{formTitle}</p>
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
                          name="name"
                          placeholder="hot yoga, reformer pilates... " 
                          value={formData.name} 
                          onChange={handleChange}
                        />
                    </div>

                    <ClassTypeSelector classTypes={classTypes} onSelectedClassType={handleSelectClassType}/>
                    <InstructorSelector instructors={instructors} onSelectedInstructor={handleSelectInstructor} currentClass={currentClass}/>

                    <label className="label mt-5">Date</label>
                    <div className="control">
                        <input 
                          className="input is-rounded has-text-link" 
                          type="date" 
                          name="time"
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
                          name="duration"
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
                          name="capacity" 
                          placeholder="" 
                          value={formData.capacity}
                          onChange={handleChange}
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