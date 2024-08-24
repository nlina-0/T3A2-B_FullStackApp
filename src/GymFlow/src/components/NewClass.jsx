import React from 'react'
import FormInput from './FormInput'

// need to re-do: removed from onSubmit from form
const NewClass = ({ addClass }) => {
  const submitHandler = e => {
    e.preventDefault()
    // sanitise and calidate entry
    // create new entry from entered data
    // Add to list of classes
    addClass('Yoga')
    // redirect to className detail
  }

  return (
    <>
      <div className="columns is-centered" >
        <div className="card column is-two-thirds" id="user-login">
          <h2 className="label mt-6 mb-6 is-size-5 has-text-weight-medium">New Class</h2>
            <form >
                <div className="field">
                    <label className="label mt-5">Class Type</label>
                    <div className="control">
                        <input 
                          className="input is-rounded has-text-link" 
                          type="" 
                          placeholder="hot yoga, reformer pilates... " 
                          value="" 
                          onChange={(e) => setEmail(e.target.value)}
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