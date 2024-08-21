import React from 'react'
import NavBar from './NavBar'
import NewClass from './NewClass'
import PageHeading from './PageHeading'
import FormInput from './FormInput'

const CreateClass = () => {
  return (
    <>
      <NavBar />
      <div class="container is-max-tablet">
      <FormInput label="Class Type" />
      <FormInput label="Instructor" />
      <FormInput label="Date" />
      <FormInput label="Time" />
      <FormInput label="Max. Capacity" />
      </div>
    </>
  )
}

export default CreateClass