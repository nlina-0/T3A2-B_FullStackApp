import React, { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Classes from './Classes'
import CreateClass from './CreateClass'
import Customers from './Customers'
import ClassDetails from './ClassDetails'
import NavBar from './NavBar'
import Login from './Login'
import NewInstructor from './NewInstructor'

const App = () => {

  const [classes, setClasses] = useState(
    [
      {
        id: 1,
        classType: "Yoga",
        instructor: "Paige",
        date: "10 AUG",
        time: "9.00 - 10.00",
        // change space to capacity
        space: 3,
        // add bookings
      },
      {
        id: 2,
        classType: "Pilates",
        instructor: "Russ",
        date: "11 AUG",
        time: "6.00 - 7.00",
        space: 2
      },
      {
        id: 3,
        classType: "Boxing",
        instructor: "Max",
        date: "12 AUG",
        time: "5.00 - 6.00",
        space: 4
      }
    ]
  )

  // for createClass
  const addClass = (classType) => {
    // TODO: Sanitise and validate entry data
    const newClass = { classType: classType }
    setClasses([...classes, newClass])
  }
  
  return (
    <>
      <NavBar />
      <Routes>
        {/* should be login page? */}
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Classes classes={classes}/>} />
        <Route path='/classes' element={<Outlet />}>
          <Route path='/classes' element={<Classes classes={classes}/>}/>
          <Route path=':classes_id' element={<ClassDetails classes={classes}/>}/>
        </Route>
        <Route path='/createClass' element={<CreateClass addClass={addClass}/>} />
        <Route path='/instructors' element={<NewInstructor />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='*' element={<h3>Page not found!</h3>} />
      </Routes>
    </>
  )
}

export default App