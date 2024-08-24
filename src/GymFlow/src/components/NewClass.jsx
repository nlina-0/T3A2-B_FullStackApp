import React, { useState } from 'react'
import FormInput from './FormInput'

// need to re-do: removed from onSubmit from form
const NewClass = ({ addClass }) => {
  // const initialValues = { classType: "", instructor: "" }
  // const [content, setContent] = useState(initialValues)
  
  const [classType, setClassType] = useState("")
  // add useState for rest of options...


  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setContent({...content, [name]: value})
  // }

  const submitHandler = e => {
    e.preventDefault()
    addClass(classType)
    // redirect to className detail
  }

  return (
    <>
      <div className="columns is-centered" >
        <div className="container card column is-two-thirds" id="user-login">
          <h2 className="label mt-6 mb-6 is-size-5 has-text-weight-medium">New Class</h2>
            <form onSubmit={submitHandler}>
                <div className="field">
                    <label className="label mt-5">Class Type</label>
                    <div className="control">
                        <input 
                          className="input is-rounded has-text-link" 
                          type="" 
                          name="classType"
                          placeholder="hot yoga, reformer pilates... " 
                          value={classType} 
                          onChange={(e) => setClassType(e.target.value)}
                        />
                    </div>
                    <label className="label mt-5">Instructor</label>
                    <div className="control">
                        <input 
                          className="input is-rounded has-text-link" 
                          type="" 
                          name="instructor"
                          placeholder="hot yoga, reformer pilates... " 
                          // value={instructor}
                          // onChange={handleChange}
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