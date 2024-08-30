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


const App = () => {
  const token = localStorage.getItem("site")

  const [instructors, setInstructors] = useState([])
  const [classTypes, setClassTypes] = useState([])
  const [classes, setClasses] = useState([])

  const fetchClasses = async () => {
    const res = await fetch('http://localhost:3000/classes', {
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
  }
  

  useEffect(() => {

    fetchClasses()

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


  const addClass = async (
    name, 
    time, 
    selectInstructor, 
    selectClassType, 
    duration, 
    capacity
  ) => {
    // TODO: Sanitise and validate entry data
    const newClass = { 
      name: name, 
      classType: selectClassType._id, 
      instructor: selectInstructor._id, 
      time: time, 
      duration: duration, 
      capacity: capacity 
    }

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
    return returnedClass._id
  }

  // Higher-order component (HOC)
  const ClassDetailsWrapper = () => {
    const { id } = useParams()
    const currentClass = classes.find(cls => cls._id == id) 
    return currentClass ? <ClassDetails currentClass={currentClass} instructors={instructors} fetchClasses={fetchClasses}/> : <h3>Class not found!</h3>
  }

  
  return (
    <>
    <AuthProvider>
      <ShowNavBar>
        <NavBar />
      </ShowNavBar>
      
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route path='/' element={<PrivateRoute />}>
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
        
        <Route path='/public' element={<PublicAccess classes={classes}/>} />
        <Route path='*' element={<h3>Page not found!</h3>} />
      </Routes>
    </AuthProvider>
    </>
  )
}

export default App