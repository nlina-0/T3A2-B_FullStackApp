import React, { useState } from 'react'

const ClassDetails = ({ classes }) => {

  // how does it know which object to select from?

  // List of customers booked in
  const [attendees, setAttendees] = useState(
    ['Anne', 'Ryan', 'Faye', 'Duke', 'Ellen']
  )

  return (
    <>
    <section class="section is-medium" id="class-detail">
      <div class="container is-max-tablet">
        <p>{classes.id}</p>
        <p>Instructor</p>
        <p>When: 10 AUG</p>
        <p>Time: 9.00 - 10.00</p>
        <p>Spaces left 3</p>
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