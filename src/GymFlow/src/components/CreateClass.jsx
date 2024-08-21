import React from 'react'
import NavBar from './NavBar'
import NewClass from './NewClass'
import PageHeading from './PageHeading'
import FormInput from './FormInput'

const CreateClass = () => {
  return (
    <>
      {/* How is it going to save to the db? */}

      <div class="container is-max-tablet">
      <FormInput label="Class Type" />
      <FormInput label="Time" />
      <FormInput label="Duration" />
      <FormInput label="Instructor" />
      <FormInput label="Capacity" />
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateClass