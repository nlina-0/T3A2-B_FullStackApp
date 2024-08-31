import React, { useEffect, useState } from 'react'
import { Routes, Route, Outlet, useParams, useNavigate } from 'react-router-dom'
import Classes from './Classes'
import NewClass from './NewClass'
import Customers from './Customers'
import Users from './Users'
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
  
  const [users, setUsers] = useState([])
  const token = localStorage.getItem("site")

  // Check if logged in user is Master

  useEffect(() => {
    // Retrieves stored token from local sotrage when user logins
    // const token = localStorage.getItem("site")
    
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

    fetch('http://localhost:3000/users', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  

  // For creating user
  const [userExists, setUserExists] = useState('')
  const [userCreated, setUserCreated] = useState('')
  const [userUnauthorized, setUserUnauthorized] = useState('')

  const addUser = async (email, password, master) => {
    const newUser = {
        email: email,
        password: password,
        master: master
    }
    console.log(newUser)

    const res = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
      console.log(res)

      if (res.status == 400) {
        setUserExists(true)
        setUserCreated('')
        setUserUnauthorized('')
      } else if (res.status == 201) {
        setUserExists('')
        setUserCreated(true)
        setUserUnauthorized('')
      } else if (res.status == 401 || res.status == 403) {
        setUserExists('')
        setUserCreated('')
        setUserUnauthorized(true)
      } else {
        console.error("An error occurred while creating the user")
      }
      console.log(`userUnauthorised: ${userUnauthorized}`) 

      const returnedUser = await res.json()
      console.log(returnedUser) 
      setUsers([...users, returnedUser])
      console.log(users)
      
      return res
  }

  // For deleting user
  const [passwordValidated, setPasswordValidated] = useState('')
  const [userNotFound, setUserNotFound] = useState('')
  const [userDeleted, setUserDeleted] = useState('')

  const deleteUser = async (email, password) => {
    console.log(email)
    console.log(users)
    

    let id = users.find(user => user.email === email)
    console.log(id)
    if (id) {
      id = id._id
      setUserNotFound(false)
    } else {
      setUserNotFound(true)
      return
    }


    const index = users.findIndex(user => user.email == email)
    const updatedUsers = users 
    if (index !== -1) {
      updatedUsers.splice(index, 1)
      setUsers(updatedUsers)
    }

    const userToDelete = {
      password: password
    }

    const res = await fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userToDelete)
    })

    setUserUnauthorized('')
    setPasswordValidated('')
    setUserNotFound('')
    setUserDeleted('')

    if (res.status == 403 || res.status == 401) {
      setUserUnauthorized(true)
      setPasswordValidated('')
      setUserNotFound('')
      setUserDeleted('')
      console.log(userUnauthorized)
    } else if (res.status == 400) {
        setUserUnauthorized('')
        setPasswordValidated(false)
        setUserNotFound('')
        setUserDeleted('')
    } else if (res.status == 404) {
        setUserUnauthorized('')
        setPasswordValidated('')
        setUserNotFound(true)
        setUserDeleted('')  
    } else if (res.status == 200) {
        setUserUnauthorized('')
        setPasswordValidated('')
        setUserNotFound('')
        setUserDeleted(true)
    } else {
      console.error("An error occurred while deleting the user")
    }

    const deletedUser = await res.json()
    console.log(deletedUser)

    return res

  }
  
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
          <Route path='/users' element={<Users users={users} addUser={addUser} userExists={userExists} deleteUser={deleteUser} passwordValidated={passwordValidated} userCreated={userCreated} userUnauthorized={userUnauthorized} userDeleted={userDeleted} userNotFound={userNotFound} />} />
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