import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import Classes from './Classes'
import CreateClass from './CreateClass'
import Customers from './Customers'
import UserSettings from './UserSettings'
import ClassDetails from './ClassDetails'
import NavBar from './NavBar'

const App = () => {
  
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<Classes />} />
        {/* <Route path='/classes' element={<Outlet />}>
          <Route path='/classes' element={<Classes />}/>
          <Route path='classDetails' element={<ClassDetails />}/>
        </Route> */}
        <Route path='/createClass' element={<CreateClass />} />
          {/* <Route path='/new' element={<NewClass />}></Route> */}
        <Route/>
        <Route path='/customers' element={<Customers />} />
        <Route path='/userSettings' element={<UserSettings />} />
        <Route path='*' element={<h3>Page not found!</h3>} />
      </Routes>
    </>
  )
}

export default App