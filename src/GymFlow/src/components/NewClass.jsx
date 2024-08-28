import React, { useState } from 'react'
import InstructorSelector from './InstructorSelector'

const NewClass = ({ addClass }) => {

  // duplicated from instructor
  const [instructor, setInstructor] = useState(
    [
      {   
          id: 1,
          firstName: "Ran",
          lastName: "Jose",
          age: 35,
          email: "ran.yoga@email.com",
          phone: "0414980245"
      },
      {   
          id: 2,
          firstName: "Yule",
          lastName: "Yeuwl",
          age: 39,
          email: "yule.pilates@email.com",
          phone: "0412123124"
      }, 
      {
          id: 3,
          firstName: "Ned",
          lastName: "Fred",
          age: 31,
          email: "fred.boxing@email.com",
          phone: "0412123125"
      }
    ]
  )

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

  const [selectedInstructor, setSelectedInstructor] = useState("")
  console.log("Instructor ID: " + selectedInstructor)
  const [selectedClassType, setSelectedClassType] = useState("")
  console.log("Selected class type: " + selectedClassType)
  
  const [name, setName] = useState("")
  const [classType, setClassType] = useState("")
  // const [instructor, setInstructor] = useState("")
  const [time, setTime] = useState("")
  console.log(time)

  const [duration, setDuration] = useState("")
  const [capacity, setCapacity] = useState("")

  const submitHandler = e => {
    e.preventDefault()
    addClass(name, selectedClassType, selectedInstructor, time, duration, capacity)
    // redirect to className detail

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
                          <select value={selectedClassType} onChange={(e) => setSelectedClassType(e.target.value)}>

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
                          <select value={selectedInstructor} onChange={(e) => setSelectedInstructor(e.target.value)}>

                            <option value="">Select Instructor...</option>
                            
                            {
                              instructor.map((i) => {
                                return (
                                  <option key={i.id} value={i.id}>
                                    {i.firstName + " " + i.lastName}
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