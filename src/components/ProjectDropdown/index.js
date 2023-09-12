import React from 'react'
import { Link } from 'react-router-dom'

const ProjectDropdown = () => {
  return (
    <div className="dropdown">
  <button className="dropbtn hover:rounded-tl-full hover:bg-green-400 hover:rounded-br-full p-4">Projects</button>
  <div className="dropdown-content">
    <Link to="/link1">Link 1</Link>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
  )
}

export default ProjectDropdown