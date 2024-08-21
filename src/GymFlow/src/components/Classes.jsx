import React, { useState } from 'react'
import { useNavigat, Link } from 'react-router-dom'
import ClassCard from './ClassCard'
import PageHeading from './PageHeading'

const Classes = () => {
  const nav = useNavigate()
  const [classCard, setClassCard] = useState(
    [
      {
        classType: "Yoga",
        instructor: "Paige",
        date: "10 AUG",
        time: "9.00 - 10.00",
        space: 3
      },
      {
        classType: "Pilates",
        instructor: "Russ",
        date: "11 AUG",
        time: "6.00 - 7.00",
        space: 2
      },
      {
        classType: "Boxing",
        instructor: "Max",
        date: "12 AUG",
        time: "5.00 - 6.00",
        space: 4
      }
    ]
  )

  // const handleNavigateToClassDetails = () => {
  //   nav(`/classes/classDetails`)
  // }

  return (
    <>
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
          classCard.map((cl) => (
            <ClassCard 
              classType={cl.classType}  
              instructor={cl.instructor} 
              date={cl.date} 
              time={cl.time} 
              space={cl.space}
            />
          ))
        }
      </div>

    </>
  )
}

export default Classes