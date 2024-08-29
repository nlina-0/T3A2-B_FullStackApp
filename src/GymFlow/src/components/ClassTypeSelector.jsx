import React, { useState } from 'react'

const ClassTypeSelector = ({ classTypes, onSelectedClassType }) => {

    const [selectedClassType, setSelectedClassType] = useState({})

    const handleClassTypeChange = (e) => {
        const selectedClassName = e.target.value
        const selectClassType = classTypes.find(c => c.name == selectedClassName)
        setSelectedClassType(selectClassType || {})
        onSelectedClassType(selectClassType || {})
    }

  return (
    <div>
        <label className="label mt-5">Class Type</label>
        <div className="control">
            <div className="select is-link is-rounded is-fullwidth">
                <select value={selectedClassType.name || ""} onChange={handleClassTypeChange}>

                    <option value="">Select Class Type...</option>
                    
                    {
                    classTypes.map((c) => {
                        return (
                        <option key={c.name} value={c.name}>
                            {c.name}
                        </option>
                        )
                    })
                    }
                    
                </select>
            </div>
        </div>
    </div>
  )
}

export default ClassTypeSelector