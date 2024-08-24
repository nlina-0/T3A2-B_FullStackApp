import React, { useState } from 'react'
import { Routes, Route, Outlet, useParams } from 'react-router-dom'
import Classes from './Classes'
import NewClass from './NewClass'
import Customers from './Customers'
import ClassDetails from './ClassDetails'
import NavBar from './NavBar'
import Login from './Login'
import NewInstructor from './NewInstructor'

// Temporary ID for classes
let newClassId = 4

const App = () => {

  const [classes, setClasses] = useState(
    [
      {
        id: 1,
        classType: "Yoga",
        instructor: "Paige",
        date: "10 AUG",
        time: "9.00 - 10.00",
        capacity: 3,
        // add bookings
      },
      {
        id: 2,
        classType: "Pilates",
        instructor: "Russ",
        date: "11 AUG",
        time: "6.00 - 7.00",
        capacity: 2
      },
      {
        id: 3,
        classType: "Boxing",
        instructor: "Max",
        date: "12 AUG",
        time: "5.00 - 6.00",
        capacity: 4
      }
    ]
  )

  // For createClass
  const addClass = (classType, instructor) => {
    // TODO: Sanitise and validate entry data
    const newClass = { id: newClassId++, classType: classType, instructor: instructor }
    setClasses([...classes, newClass])
  }

  // Higher-order component (HOC)
  const ClassDetailsWrapper = () => {
    const { id } = useParams()
     const currentClass = classes.find(cls => cls.id == id) 
    return currentClass ? <ClassDetails currentClass={currentClass}/> : <h3>Class not found!</h3>
  }
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Classes classes={classes}/>} />
        <Route path='/classes' element={<Outlet />}>
          <Route path='/classes' element={<Classes classes={classes}/>}/>
          <Route path=':id' element={<ClassDetailsWrapper />}/>
        </Route>
        <Route path='/newClass' element={<NewClass addClass={addClass}/>} />
        <Route path='/instructors' element={<NewInstructor />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='*' element={<h3>Page not found!</h3>} />
      </Routes>
    </>
  )
}

export default App