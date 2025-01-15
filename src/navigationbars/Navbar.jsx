import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className="flex justify-between py-8 px-10">
    <div className="logo">
      <h1>logo</h1>

    </div>
    <ul className="flex gap-10">
        <li><Link to={"/"} className="text-primary">Home</Link></li>
        <li><Link to={"/Portfolio"} className="hover:text-primary">Portfolio</Link></li>
        <li><Link to={"/Aboutme"} className="hover:text-primary">About me</Link></li>
        <li><Link to={"/Testomonials"} className="hover:text-primary">Testimonials</Link></li>
    </ul>
    <button class=" hover:bg-primary hover:text-white text-primary  py-2 px-4 rounded border-2 border-primary">Contact Me</button>

   </nav>
  )
}

export default Navbar
