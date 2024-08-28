import React from 'react'
import ClassCard from './ClassCard'
import SearchField from './SearchField'

const Classes = ({ classes }) => {
  // const data = Array.from(classes)

  return (
    <>
      <div className="container is-max-tablet">
        <h2 className="label my-6 is-size-5 has-text-weight-medium">Classes</h2>
        <SearchField search="Search by class type or instructor" />
      </div>
      
      <div className="container is-max-tablet">
        {
          classes.map((cl) => (
            <ClassCard 
              key={cl._id} // unique key prop
              id={cl._id}
              name={cl.name}
              classType={cl.classType.name}
              instructor={cl.instructor.firstName + " " + cl.instructor.lastName} 
              time={cl.time}
              // date={cl.date} 
              duration={cl.duration} 
              capacity={cl.capacity}
            />,
          ))
        }
      </div>

    </>
  )
}

export default Classes