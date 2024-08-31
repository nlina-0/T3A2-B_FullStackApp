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


const App = () => {
  
  const token = localStorage.getItem("site")
  const port = 4000
  // http://localhost:${port}/
  const API = `https://gymflow-api-jx6e.onrender.com/`

  const [instructors, setInstructors] = useState([])
  const [classTypes, setClassTypes] = useState([])
  const [classes, setClasses] = useState([])
  const [users, setUsers] = useState([])

 
  const fetchClasses = async () => {
    const res = await fetch(`${API}classes`, {
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

    fetch(`${API}instructors`, {
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

    // fetch all class types
    fetch(`${API}classtypes`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setClassTypes(data))
      .catch(error => {
        console.error('Error fetching class types', error)
      })


      
    fetch(`${API}users`, {
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

    const res = await fetch(`${API}users`, {
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

    const res = await fetch(`${API}users/${id}`, {
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
    const newClass = { 
      name: name, 
      classType: selectClassType._id, 
      instructor: selectInstructor._id, 
      time: time, 
      duration: duration, 
      capacity: capacity 
    }

    // Post newEntry to the API and receive the returned class with the added mongoDB ID
    const res = await fetch(`${API}classes`, {
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
    return currentClass ? <ClassDetails API={API} currentClass={currentClass} instructors={instructors} fetchClasses={fetchClasses} addClass={addClass} classes={classes} classTypes={classTypes}/> : <h3>Class not found!</h3>
  }
  
  return (
    <>
    <AuthProvider API={API}>
      <ShowNavBar>
        <NavBar />
      </ShowNavBar>
      
      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='/' element={<PrivateRoute />}>
          <Route path='/classes' element={<Outlet />}>
            <Route path='' element={<Classes addClass={addClass} classes={classes} instructors={instructors} classTypes={classTypes}/>} />
            <Route path=':id' element={<ClassDetailsWrapper />}/>
          </Route>
          <Route path='/newClass' element={<NewClass addClass={addClass} instructors={instructors}/>} />
          <Route path='/instructors' >
            <Route path='/instructors' element={<Instructor instructors={instructors}/>} />
          </Route>
          <Route path='/customers' element={<Customers />} />
          <Route path='/users' element={<Users users={users} addUser={addUser} userExists={userExists} deleteUser={deleteUser} passwordValidated={passwordValidated} userCreated={userCreated} userUnauthorized={userUnauthorized} userDeleted={userDeleted} userNotFound={userNotFound} />} />
        </Route>

        <Route path='*' element={<h3>Page not found!</h3>} />
      </Routes>
    </AuthProvider>
    </>
  )
}

export default App