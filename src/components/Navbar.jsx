import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => (
  <div className="nav">
    <div className="nav-logo">
      <img src="https://tse4.mm.bing.net/th/id/OIP.MRVVMuCeveVfEzto4c2l5QHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" /> 
      <span>Nagaraj</span>
    
    </div>
    <div className='nav-bar'>
 <ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/About">About Me</Link></li>
  <li><Link to="/Project">Projects</Link></li>
  <li><Link to="/Resume">Resume</Link></li>
  <li><Link to="/Contact">Contact</Link></li>
</ul>
</div>
 
  </div>
)

export default Navbar
