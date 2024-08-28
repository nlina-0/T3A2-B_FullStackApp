import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ShowNavBar = ({ children }) => {
    const location = useLocation()

    const [showNavBar, setShowNavBar] = useState(false)

    // Remove Navbar if user is on login or public access page
    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/public') {
            setShowNavBar(false)
        } else {
            setShowNavBar(true)
        }
    }, [location])

    return (
        <div>{showNavBar && children}</div>
  )
}

export default ShowNavBar