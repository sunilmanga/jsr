import React from 'react'
import { Link } from 'react-router-dom'

const GalleryDropdown = (navItem) => {
  return (
    <div className={`dropdown ${navItem}`}>
  <button className="dropbtn hover:rounded-tl-full hover:bg-green-400 hover:rounded-br-full p-4 uppercase">Gallery</button>
  <div className="dropdown-content">
    <Link to="/gallery">Photos</Link>
    <Link to="/link2">Video's</Link>

  </div>
</div>
  )
}

export default GalleryDropdown