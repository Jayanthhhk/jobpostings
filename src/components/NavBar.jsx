import React from 'react';
import { Link } from 'react-router-dom';
import Resume from './Resume';
// Make sure to import styles if using separate CSS

const NavBar = () => {
  return (
    <>
    <nav className="navbar">
      <ul className="nav-list">
      <li><Link to="/home">Home</Link></li>

        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/internships">Internships</Link></li>
{/*         <li><Link to="/news">News</Link></li>
 */}
      </ul>
    </nav>

            
    
    </>
  );
};

export default NavBar;
