import React from 'react'

const SearchField = (props) => {
  return (
    <>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input className="input is-rounded" type="text" placeholder={props.search} />
          </div>
          <div className="control">
            <button className="button is-link is-rounded">
              Search
            </button>
          </div>
        </div>
    </>
  )
}

export default SearchField