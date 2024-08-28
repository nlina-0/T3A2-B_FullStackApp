import React, { useEffect, useState } from 'react'
import { Routes, Route, Outlet, useParams, useNavigate } from 'react-router-dom'
import Classes from './Classes'
import NewClass from './NewClass'
import Customers from './Customers'
import ClassDetails from './ClassDetails'
import NavBar from './NavBar'
import Login from './Login'
import Instructor from './Instructor'
import AuthProvider from './AuthProvider'
import PrivateRoute from './PrivateRoute'
import ShowNavBar from './ShowNavBar'
import PublicAccess from './PublicAccess'

// Temporary ID for classes
let newClassId = 4

const App = () => {

  const navigate = useNavigate()
  
  const [instructors, setInstructors] = useState(
    [
      {   
          id: 1,
          firstName: "Ran",
          lastName: "Jose",
          age: 35,
          email: "ran.yoga@email.com",
          phone: "0414980245"
      },
      {   
          id: 2,
          firstName: "Yule",
          lastName: "Yeuwl",
          age: 39,
          email: "yule.pilates@email.com",
          phone: "0412123124"
      }, 
      {
          id: 3,
          firstName: "Ned",
          lastName: "Fred",
          age: 31,
          email: "fred.boxing@email.com",
          phone: "0412123125"
      }
    ]
  )

  const [classes, setClasses] = useState( 
    [
      // {
      //   _id: 1,
      //   name: "Rise and shine",
      //   classType: {
      //     name: "Yoga"
      //   },
      //   time: "2024-08-27",
      //   duration: 45,
      //   instructor: {
      //     firstName: "Janet",
      //     lastName: "Smith",
      //   },
      //   capacity: 15,
      //   bookings: []
      // }
      // {
      //   id: 2,
      //   classType: "Pilates",
      //   instructor: "Russ",
      //   date: "11 AUG",
      //   duration: "45min",
      //   capacity: 10
      // },
      // {
      //   id: 3,
      //   classType: "Boxing",
      //   instructor: "Max",
      //   date: "12 AUG",
      //   duration: "45min",
      //   capacity: 10
      // }
    ]
  )

  // lift state for instructors - pass down to required components
  

  useEffect(() => {
    // Retrieves stored token from local sotrage when user logins
    const token = localStorage.getItem("site")
    fetch('http://localhost:3000/classes', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setClasses(data))
      .catch(error => {
        console.error('Error fetching classes', error)
      })
  }, [])


  // For createClass
  const addClass = (name, selectedClassType, selectedInstructor, time, duration, capacity) => {
    // TODO: Sanitise and validate entry data
    const newClass = { _id: newClassId++, name: name, classType: selectedClassType, instructor: selectedInstructor, time: time, duration: duration, capacity: capacity }
    console.log('New Class: ', newClass)
    setClasses([...classes, newClass])

    console.log('Form submitted successfully')

    // redirect to className detail
    console.log(newClass._id)
    navigate(`/classes/${newClass._id}`)
  }

  // Higher-order component (HOC)
  const ClassDetailsWrapper = () => {
    const { id } = useParams()
    const currentClass = classes.find(cls => cls._id == id) 
    return currentClass ? <ClassDetails currentClass={currentClass} instructors={instructors} /> : <h3>Class not found!</h3>
  }

  
  return (
    <>
    <AuthProvider>
      <ShowNavBar>
        <NavBar />
      </ShowNavBar>
      
      <Routes>
        <Route path='/login' element={<Login />} />
        {/* <Route path='/' element={<Classes classes={classes}/>} /> */}
        {/* private routes */}
        <Route path='/' element={<PrivateRoute />}>
          {/* Class Route */}
          <Route path='/classes' element={<Outlet />}>
            <Route path='/classes' element={<Classes classes={classes}/>} />
            <Route path=':id' element={<ClassDetailsWrapper />}/>
          </Route>
          <Route path='/newClass' element={<NewClass addClass={addClass} instructors={instructors}/>} />
          <Route path='/instructors' >
            <Route path='/instructors' element={<Instructor />} />
          </Route>
          <Route path='/customers' element={<Customers />} />
        </Route>
        
        <Route path='/public' element={<PublicAccess />} />
        <Route path='*' element={<h3>Page not found!</h3>} />
      </Routes>
    </AuthProvider>
    </>
  )
}

export default App