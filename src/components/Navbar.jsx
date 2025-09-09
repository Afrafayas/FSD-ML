
import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    
    <header className="text-gray-600 body-font">

      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">    
    
    <Link
    to="/"
    className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
    >
    <svg width="40" height="40" style={{ border: "1px solid gray", borderRadius:"50%"}}>
        <circle cx="20" cy="20" r="18" fill="green" stroke="black" strokeWidth="6" />
    </svg>



     
    <span className="ml-3 text-xl">MyApp</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-green-800">Home</Link>
          <Link to="/about" className="mr-5 hover:text-green-800">About</Link>
          {/* <Link to="/contact" className="mr-5 hover:text-green-800">Contact</Link> */}
          <Link to="/user/1" className="mr-5 hover:text-green-800">User</Link>
        </nav>

      </div>
    </header>
    
  )
}

export default Navbar