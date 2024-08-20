import React, {useState} from 'react'
import NavBar from './NavBar'

const Classes = () => {
  const [classes, setClasses] = useState(
    ['Yoga', 'Boxing', 'Pilates', 'Cycle']
  )

  return (
    <>
      <NavBar />
      <h1>Classes</h1>
      <ul>
          {classes.map((cl) => (
              <li>
                  <p>{cl}</p>
              </li>
          ))}
        </ul>
    </>
  )
}

export default Classes