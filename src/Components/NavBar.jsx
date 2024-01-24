import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';
const Navigation = () => {
  return (
    <div>
      <div className="container-fluid bg-dark  "  >
        <div className="row d-flex justify-content-center  ">
          <nav className="navbar  text-white  p-3 ">
            <div className="row d-flex justify-content-center  ">
              <div className="col nav-item ">
                <Link to='/'className='navbar-brand' >All</Link>
              </div>
              <div className="col nav-item focus "> <Link to='/FullStack' className='navbar-brand' >FullStack</Link></div>
              <div className="col nav-item "> <Link to='/DataScience' className='navbar-brand' >DataScience</Link></div>
              <div className="col nav-item "> <Link to='/CyberSecurity' className='navbar-brand' >CyberSecurity</Link></div>
              <div className="col nav-item "> <Link to='/Career' className='navbar-brand' >Career</Link></div>
            </div>
          </nav>
        </div>

      </div>
    </div>
  )
}

export default Navigation