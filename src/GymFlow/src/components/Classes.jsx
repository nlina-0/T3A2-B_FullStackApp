import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import ClassCard from './ClassCard'
import PageHeading from './PageHeading'

const Classes = () => {
  // const [classCard, setClassCard] = useState(
  //   ['Yoga', 'Pilates', 'Boxing']
  // )

  const [classCard, setClassCard] = useState(
    [
      {
        classType: "Yoga",
        instructor: "Paige",
        date: "10 AUG",
        time: "9.00 - 10.00"
      },
      {
        classType: "Pilates",
        instructor: "Russ",
        date: "11 AUG",
        time: "6.00 - 7.00"
      },
      {
        classType: "Boxing",
        instructor: "Max",
        date: "12 AUG",
        time: "5.00 - 6.00"
      }
    ]
  )

  return (
    <>
      <NavBar />
      <div class="container is-max-tablet">
        <label class="label">Classes</label>
        <input 
          class="input is-rounded" 
          type="text" 
          placeholder="Search by class or instructor" 
        />
      </div>
      
      <div>
        {
          classCard.map(cl => (
            <Link >
              <ClassCard classType={cl.classType}  instructor={cl.instructor} date={cl.date} time={cl.time}/>
            </Link>
          ))
        }
      </div>
    </>
  )
}

export default Classes