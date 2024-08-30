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
  const token = localStorage.getItem("site")

  const [instructors, setInstructors] = useState([])
  const [classTypes, setClassTypes] = useState([])
  const [classes, setClasses] = useState([])
  

  useEffect(() => {
    // Retrieves stored token from local sotrage when user logins
    
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

    fetch('http://localhost:3000/instructors', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setInstructors(data))
      .catch(error => {
        console.error('Error fetching instructors', error)
      })

    // TODO: fetch all class types
    fetch('http://localhost:3000/classtypes', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setClassTypes(data))
      .catch(error => {
        console.error('Error fetching instructors', error)
      })

  }, [])


  // For createClass - still not done

  const addClass = async (name, time, selectInstructor, selectClassType, duration, capacity) => {
    // TODO: Sanitise and validate entry data
    const newClass = { name: name, classType: selectClassType._id, instructor: selectInstructor._id, time: time, duration: duration, capacity: capacity }
    console.log('New Class: ', newClass)

    // Post newEntry to the API and receive the returned class with the added mongoDB ID
    const res = await fetch('http://localhost:3000/classes', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newClass)
    })
    const returnedClass = await res.json()
    setClasses([...classes, returnedClass])

    console.log('New Class Created: ', returnedClass)
    // Not submitting successfully because class type is currently inaccesible 

    // redirect to className detail
    navigate(`/classes/${newClass._id}`)

    return returnedClass._id
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

        {/* private routes */}
        <Route path='/' element={<PrivateRoute />}>
          {/* Class Route */}
          <Route path='/classes' element={<Outlet />}>
            <Route path='/classes' element={<Classes addClass={addClass} classes={classes} instructors={instructors} classTypes={classTypes}/>} />
            <Route path=':id' element={<ClassDetailsWrapper />}/>
          </Route>
          <Route path='/newClass' element={<NewClass addClass={addClass} instructors={instructors}/>} />
          <Route path='/instructors' >
            <Route path='/instructors' element={<Instructor instructors={instructors}/>} />
          </Route>
          <Route path='/customers' element={<Customers />} />
        </Route>
        
        {/* Public routes */}
        <Route path='/public' element={<PublicAccess classes={classes}/>} />
        <Route path='*' element={<h3>Page not found!</h3>} />
      </Routes>
    </AuthProvider>
    </>
  )
}

export default App