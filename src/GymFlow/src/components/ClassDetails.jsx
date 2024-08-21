import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ClassDetails = ({ classes }) => {

  const { classes_id } = useParams() // Extract classes id from the URL
  // REVIEW
  const currentClass = classes.find(cls => cls.id == classes_id) // Access item from the object 

  // List of customers booked in
  const [attendees, setAttendees] = useState(
    ['Anne', 'Ryan', 'Faye', 'Duke', 'Ellen']
  )

  return (
    <>
    <section class="section is-medium" id="class-detail">
      <div class="container is-max-tablet">
        <p>{currentClass.classType}</p>
        <p>{currentClass.instructor}</p>
        <p>When: {currentClass.date}</p>
        <p>Time: {currentClass.time}</p>
        <p>Spaces left {currentClass.space}</p>
        <button class="button is-link">Edit</button>
      </div>
    </section>

    <section>
      <div class="container is-max-tablet">
        <p>Attending:</p>
        <ul>
          {
            attendees.map((att) => (
              <li>{att}</li>
            ))
          }
        </ul>
      </div>
    </section> 
    </>
  )
}

export default ClassDetails