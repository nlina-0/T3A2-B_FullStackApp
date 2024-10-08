import React, { useState } from 'react'

const NewClass = ({ addClass, instructors }) => {

  // Instructor and class type need ID

  const classTypes = [
    {
        name: "Yoga"
    },
    {
        name: "Cycling"
    },
    {
        name: "Zumba"
    },
    {
        name: "Kickboxing"
    },
    {
        name: "Body pump"
    },
    {
        name: "Pilates"
    }
]

  const [selectedInstructor, setSelectedInstructor] = useState({})
  const [selectedClassType, setSelectedClassType] = useState({})
  const [name, setName] = useState("")
  const [time, setTime] = useState("")
  const [duration, setDuration] = useState("")
  const [capacity, setCapacity] = useState("")

  // Form Submit handler
  const submitHandler = e => {
    e.preventDefault()
    addClass(name, selectedClassType, selectedInstructor, time, duration, capacity)
  }

  // Instructor handler
  const handleInstructorChange = (e) => {
    const selectedFullName = e.target.value;
    const instructor = instructors.find(
      (i) => `${i.firstName} ${i.lastName}` === selectedFullName
    )
    setSelectedInstructor(instructor || {})
  }

  // Class Type handler
  // API needs class type ID
  const handleClassSelect = (e) => {
    const selectedClassName = e.target.value
    const selectClassType = classTypes.find(c => c.name == selectedClassName)
    setSelectedClassType(selectClassType || {}) 
  }


  return (
    <>
      <div className="columns is-centered" >
        <div className="container card column is-two-thirds" id="user-login">
            <h2 className="label mt-6 mb-6 is-size-5 has-text-weight-medium">New Class</h2>
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

                    <label className="label mt-5">Class Type</label>
                    <div className="control">
                        <div className="select is-link is-rounded">
                          <select value={selectedClassType.name || ""} onChange={handleClassSelect}>

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
                    </div>

                    <label className="label mt-5">Instructor</label>
                    <div className="control">

                        <div className="select is-link is-rounded">
                          <select value={selectedInstructor ? `${selectedInstructor.firstName} ${selectedInstructor.lastName}` : ""} onChange={handleInstructorChange}>

                            <option value="">Select Instructor...</option>
                            
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
                    </div>

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
                    
                    <div className="control mt-6">
                        <button className="button is-link is-fullwidth">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default NewClass