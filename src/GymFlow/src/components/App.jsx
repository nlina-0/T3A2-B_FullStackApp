import React, { useState } from 'react'
import { Routes, Route, Outlet, useParams } from 'react-router-dom'
import Classes from './Classes'
import NewClass from './NewClass'
import Customers from './Customers'
import ClassDetails from './ClassDetails'
import NavBar from './NavBar'
import Login from './Login'
import Instructor from './Instructor'

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
        duration: "45min",
        capacity: 10,
        // add bookings
      },
      {
        id: 2,
        classType: "Pilates",
        instructor: "Russ",
        date: "11 AUG",
        duration: "45min",
        capacity: 10
      },
      {
        id: 3,
        classType: "Boxing",
        instructor: "Max",
        date: "12 AUG",
        duration: "45min",
        capacity: 10
      }
    ]
  )


  // Add useEffect to fetch classes, instructor, customer and user

  // For createClass
  const addClass = (classType, instructor, date, duration, capacity) => {
    // TODO: Sanitise and validate entry data
    const newClass = { id: newClassId++, classType: classType, instructor: instructor, date: date, duration: duration, capacity: capacity }
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
        <Route path='/instructors' >
          <Route path='/instructors' element={<Instructor />} />
        </Route>
        <Route path='/customers' element={<Customers />} />
        <Route path='*' element={<h3>Page not found!</h3>} />
      </Routes>
    </>
  )
}

export default App