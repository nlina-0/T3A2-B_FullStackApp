import React from 'react'

const FormInput = (props) => {
  return (
    <>
    {/* <div class="container is-max-tablet"> */}
        <div class="field" id="form-input">
          <label class="label">{props.label}</label>
          <div class="control">
            <input class="input is-rounded" type="text" placeholder="" />
          </div>
        </div>
      {/* </div> */}
    </>
  )
}

export default FormInput