import React from 'react'
import { Outlet } from 'react-router'

function About() {
  return (
    <div>
      <div>About</div>
      <Outlet/>
    </div>
  )
}

export default About