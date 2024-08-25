import React, { useState } from 'react'

const SearchField = (props) => {
  // const [search, setSearch] = useState()
  // console.log(search)

  return (
    <>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input 
              className="input is-rounded" 
              type="text" 
              placeholder={props.search}
              // onChange={(e) => setSearch(e.target.value)} 
            />
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