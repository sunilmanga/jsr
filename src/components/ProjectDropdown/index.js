import React from "react";
import { Link } from "react-router-dom";

const ProjectDropdown = (navItem) => {
  return (
    <div className={`dropdown ${navItem}`}>
      <button className="dropbtn hover:rounded-tl-full hover:bg-green-400 hover:rounded-br-full uppercase">
        Projects
      </button>
      <div className="dropdown-content">
        <Link to="/AddOn">AddOn</Link>
        <Link to="/AddOn">GOLD</Link>
        <Link to="/AddOn">AddOn</Link>
      </div>
    </div>
  );
};

export default ProjectDropdown;
