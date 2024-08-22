import React from 'react'
import FormInput from './FormInput'

const CreateClass = () => {
  const submitHandler = e => {
    e.preventDefault()
    // sanitise and calidate entry
    // create new entry from entered data
    // Add to list of classes
    // redirect to class detail
  }

  return (
    <>
      <div className="container is-max-tablet">
      <h2 className="label my-6 is-size-5 has-text-weight-medium">New Class</h2>
      <form onSubmit={submitHandler}>
        <FormInput label="Class Type" />
        <FormInput label="Time" />
        <FormInput label="Duration" />
        <FormInput label="Instructor" />
        <FormInput label="Capacity" />
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateClass