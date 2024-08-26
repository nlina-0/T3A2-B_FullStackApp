import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ClassDetails = ({ currentClass }) => {

  // List of customers booked in
  // const [attendees, setAttendees] = useState(
  //   ['Anne', 'Ryan', 'Faye', 'Duke', 'Ellen']
  // )

  return (
    <>
    <section className="section is-medium" id="class-detail">
      <div className="container is-max-tablet">
        <p>{currentClass.name}</p>
        {/* <p>{currentClass.instructor}</p> */}
        <p>When: {currentClass.time}</p>
        <p>Time: {currentClass.duration} min</p>
        <p>Class capacity: {currentClass.capacity}</p>
        <button className="button is-link">Edit</button>
      </div>
    </section>

    </>
  )
}

export default ClassDetails