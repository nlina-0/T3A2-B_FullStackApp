import React, { useState } from 'react'

const InstructorSelector = ({ instructors, onSelectedInstructor }) => {
    // Gets list of instructors from App.jsx
    // Maps it out into a select drop down
    // Stores selection into selectedInstructor

    const [selectedInstructor, setSelectedInstructor] = useState({})

    const handleInstructorChange = (e) => {
        const selectedFullName = e.target.value;
        const instructor = instructors.find(
          (i) => `${i.firstName} ${i.lastName}` === selectedFullName
        )
        setSelectedInstructor(instructor || {})
        onSelectedInstructor(instructor || {})
      }


    // TODO: Add selectedInstructor into addClass to create new class

  return (
    <div>
    <label className="label mt-5">Instructor</label>
        <div className="control">
            <div className="select is-link is-rounded is-fullwidth">
                <select value={selectedInstructor ? `${selectedInstructor.firstName} ${selectedInstructor.lastName}` : ""} onChange={handleInstructorChange}>

                    <option value="">Select Instructor...</option>
                    
                    {
                        instructors.map((i) => {
                            return (
                            <option key={i._id} value={`${i.firstName} ${i.lastName}`}>
                                {`${i.firstName} ${i.lastName}`}
                            </option>
                            )
                        })
                    }
                    
                </select>
            </div>
        </div> 
    </div>
  )
}

export default InstructorSelector