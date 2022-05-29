import React from 'react'
import logo from '../assets/logo.png'
import {FaBars,FaTimes} from 'react-icons/fa'


export const Navbar = () => {
  return (
	<div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
    <div>
      <img src={logo} alt="Logo Image" style={{width:'90px'}} />
    </div>
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
  )
}
