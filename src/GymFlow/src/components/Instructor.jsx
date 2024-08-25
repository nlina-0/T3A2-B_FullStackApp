import React from 'react'
import NewInstructor from './NewInstructor'
import SearchField from './SearchField'

const Instructor = () => {
  return (
    <>
    <div className="container is-max-tablet">
        <h2 className="label my-6 is-size-5 has-text-weight-medium">Instructors</h2>
        <SearchField search="Search instructor" />
        <h2 className="has-text-centered mt-6 is-size-5 has-text-weight-semibold">- Or -</h2>
        <NewInstructor />
    </div>

    

    
    </>
  )
}

export default Instructor