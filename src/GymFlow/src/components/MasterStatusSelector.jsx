import React, { useState } from 'react'

function MasterStatusSelector({handleMasterStatusChange}) {
    const [checked, setChecked] = useState(false)

    const handleChange = (event) => {
         const updatedChecked = event.target.checked
         console.log(event.target.checked)
         setChecked(updatedChecked)
         handleMasterStatusChange(updatedChecked)
    }

    return (
        <div>
            <label><b>Grant master privileges: </b></label>
            <input 
                type="checkbox"
                checked={checked}
                onChange={handleChange}
            />
        </div>
    )}

export default MasterStatusSelector