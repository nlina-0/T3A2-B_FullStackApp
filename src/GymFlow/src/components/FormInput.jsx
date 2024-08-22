import React from 'react'

const FormInput = (props) => {
  return (
    <>
    {/* <div class="container is-max-tablet"> */}
        <div className="field" id="form-input">
          <label className="label">{props.label}</label>
          <div className="control">
            <input className="input is-rounded" type="text" placeholder="" />
          </div>
        </div>
      {/* </div> */}
    </>
  )
}

export default FormInput