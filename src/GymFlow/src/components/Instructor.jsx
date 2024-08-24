import React from 'react'
import NewInstructor from './NewInstructor'

const Instructor = () => {
  return (
    <>
    <div className="container is-max-tablet">
        <h2 className="label my-6 is-size-5 has-text-weight-medium">Instructors</h2>
        
        {/* <div className="control mt-6">
            <button className="button is-link is-fullwidth">Submit</button>
        </div>
        <div className="control mt-6">
            <button className="button is-link is-fullwidth">New Instructor</button>
        </div> */}
    </div>

    <div className="container is-max-tablet is-centered columns">
      <div className="column card is-half instructor-options">
        <h2>Search Instructor</h2>
        <input 
          className="input is-rounded  instructor-search" 
          type="text" 
          placeholder="Search Instructor" 
        />
        <div className="control mt-6">
            <button className="button is-link is-fullwidth">Submit</button>
        </div>
      </div>
      <div className="column card is-half instructor-options">Create New Instructor</div>
    </div>

    <NewInstructor />
    </>
  )
}

export default Instructor