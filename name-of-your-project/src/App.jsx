import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (
    <div className='text-center'>
      <h1>Hello</h1>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
