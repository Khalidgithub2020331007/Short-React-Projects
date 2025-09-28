import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (

    <div className="bg-red-600 p-4 flex gap-x-6 text-white">
  <Link to="/home" className="hover:text-yellow-300">Home</Link>
  <Link to="/products" className="hover:text-yellow-300">Products</Link>
  <Link to="/blogs" className="hover:text-yellow-300">Blogs</Link>
  <Link to="/about" className="hover:text-yellow-300">About</Link>
</div>

  )
}

export default Navbar
