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
      // {   
      //     id: 1,
      //     firstName: "Ran",
      //     lastName: "Jose",
      //     age: 35,
      //     email: "ran.yoga@email.com",
      //     phone: "0414980245"
      // },
      // {   
      //     id: 2,
      //     firstName: "Yule",
      //     lastName: "Yeuwl",
      //     age: 39,
      //     email: "yule.pilates@email.com",
      //     phone: "0412123124"
      // }, 
      // {
      //     id: 3,
      //     firstName: "Ned",
      //     lastName: "Fred",
      //     age: 31,
      //     email: "fred.boxing@email.com",
      //     phone: "0412123125"
      // }
    ]
  )
  // console.log("Instructors from DB: ", instructors)

  const classTypes = [
    {
        name: "Yoga"
    },
    {
        name: "Cycling"
    },
    {
        name: "Zumba"
    },
    {
        name: "Kickboxing"
    },
    {
        name: "Body pump"
    },
    {
        name: "Pilates"
    }
]

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

    fetch('http://localhost:3000/instructors', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setInstructors(data))
  }, [])


  // For createClass
  const addClass = async (name, time, selectInstructor, selectClassType, duration, capacity) => {
    // TODO: Sanitise and validate entry data
    const newClass = { name: name, classType: selectClassType.name, instructor: selectInstructor._id, time: time, duration: duration, capacity: capacity }
    console.log('New Class: ', newClass)

    // Post newEntry to the API and receive the returned class with the added mongoDB ID
    const res = await fetch('http://localhost:3000/classes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newClass)
    })
    const returnedClass = await res.json()
    setClasses([...classes, returnedClass])

    console.log('Form successfully submitted locally')


    // redirect to className detail
    console.log(newClass._id)
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