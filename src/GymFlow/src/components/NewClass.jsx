import React, { useState } from 'react'

const NewClass = ({ addClass }) => {

  const [classType, setClassType] = useState("")
  // add useState for rest of options...
  const [instructor, setInstructor] = useState("")
  const [date, setDate] = useState("")
  const [duration, setDuration] = useState("")
  const [capacity, setCapacity] = useState("")

  const submitHandler = e => {
    e.preventDefault()
    addClass(classType, instructor, date, duration, capacity)
    // redirect to className detail
  }


  return (
    <>
      <div className="columns is-centered" >
        <div className="container card column is-two-thirds" id="user-login">
          <h2 className="label mt-6 mb-6 is-size-5 has-text-weight-medium">New Class</h2>
            <form onSubmit={submitHandler}>
                <div className="field">
                    <label className="label mt-5">Class Type</label>
                    <div className="control">
                        <input 
                          className="input is-rounded has-text-link" 
                          type="" 
                          // name="classType"
                          placeholder="hot yoga, reformer pilates... " 
                          value={classType} 
                          onChange={(e) => setClassType(e.target.value)}
                        />
                    </div>
                    <label className="label mt-5">Instructor</label>
                    <div className="control">
                        <input 
                          className="input is-rounded has-text-link" 
                          type="" 
                          // name="instructor"
                          placeholder="" 
                          value={instructor}
                          onChange={(e) => setInstructor(e.target.value)}
                        />
                    </div>
                    <label className="label mt-5">Date</label>
                    <div className="control">
                        <input 
                          className="input is-rounded has-text-link" 
                          type="" 
                          // name="Date"
                          placeholder="" 
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
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
                          type="" 
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