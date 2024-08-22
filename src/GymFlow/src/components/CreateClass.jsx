import React from 'react'
import FormInput from './FormInput'

// need to re-do: removed from onSubmit from form
const CreateClass = ({ addClass }) => {
  const submitHandler = e => {
    e.preventDefault()
    // sanitise and calidate entry
    // create new entry from entered data
    // Add to list of classes
    addClass('Yoga')
    // redirect to class detail
  }

  return (
    <>
      <div className="container is-max-tablet">
      <h2 className="label my-6 is-size-5 has-text-weight-medium">New Class</h2>
      <form> 
        {/* <FormInput label="Class Type" />
        <FormInput label="Time" />
        <FormInput label="Duration" />
        <FormInput label="Instructor" />
        <FormInput label="Capacity" /> */}
        <div class="field">
        <label class="label">Class Type</label>
        <div class="control">
          <input class="input is-rounded" type="text" placeholder="Rounded input" />
        </div>
        </div>
        
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
        </form>
      </div>
    </>
  )
}

export default CreateClass