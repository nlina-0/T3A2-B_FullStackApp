import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Classes from './Classes'
import CreateClass from './CreateClass'
import Customers from './Customers'
import UserSettings from './UserSettings'
import NewClass from './NewClass'
import NavBar from './NavBar'

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Classes />} />
        <Route path='/classes' element={<Classes />} />
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