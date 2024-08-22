import React, { useState } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Classes from './Classes'
import CreateClass from './CreateClass'
import Customers from './Customers'
import UserSettings from './UserSettings'
import ClassDetails from './ClassDetails'
import NavBar from './NavBar'

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

  const addClass = (classType) => {
    const newClass = { classType: classType }
    setClasses(newClass)
  }
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Classes classes={classes}/>} />
        <Route path='/classes' element={<Outlet />}>
          <Route path='/classes' element={<Classes classes={classes}/>}/>
          <Route path=':classes_id' element={<ClassDetails classes={classes}/>}/>
        </Route>
        <Route path='/createClass' element={<CreateClass addClass={addClass}/>} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/userSettings' element={<UserSettings />} />
        <Route path='*' element={<h3>Page not found!</h3>} />
      </Routes>
    </>
  )
}

export default App