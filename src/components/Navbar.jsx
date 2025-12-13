import React from 'react'
// import link from ""
import logo from '../assets/logo.webp'
import {Link} from 'react-router'
function Navbar() {
  const navLink = ["Home","About","Contact","Cart"];

  return (
    <div className='p-8 m-4 border border-black w-full flex justify-between'>
      <img className = "h-20 w-20 rounded-lg object-cover" src ={logo}/>
      <div className='flex gap-12 '>
      {navLink.map((nav)=><Link key = {nav} to = {nav == "Home"?"/":`${nav.toLowerCase()}`}><li className='hover:text-amber-400'>{nav}</li></Link>)}
      </div>
    </div>
  )
}

export default Navbar