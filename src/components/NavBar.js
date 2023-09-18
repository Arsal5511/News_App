import React from 'react'
import { Link } from 'react-router-dom'
import { MoonStarsFill } from 'react-bootstrap-icons'; 
import { BrightnessHigh } from 'react-bootstrap-icons';

const NavBar = (props) => {
  return (
    <div>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Geo News</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item "><Link className="nav-link" to="/general">General</Link></li>
              <li className="nav-item "><Link className="nav-link" to="/business">Business</Link></li>
              <li className="nav-item "><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
              <li className="nav-item "><Link className="nav-link" to="/health">Health</Link></li>
              <li className="nav-item "><Link className="nav-link" to="/science">Science</Link></li>
              <li className="nav-item "><Link className="nav-link" to="/sports">Sports</Link></li>
              <li className="nav-item "><Link className="nav-link" to="/technology">Technology</Link></li>
            </ul>
          </div>


          {/* Dark mode */}
          
            {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} >
            < input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" /> 
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
          </div>        
           */}

          <div  onClick={props.toggleMode} >
            <span  className={`cursor-pointer ${props.mode === 'light' ? "d-none" : "flex" } text-light`}>
              <MoonStarsFill size={30}></MoonStarsFill></span>
            <span  className={`cursor-pointer ${props.mode === 'light' ? "flex" : "d-none"  }`}>
            <BrightnessHigh className='cusor-pointer'  size={30}></BrightnessHigh></span>
          </div>
          <divn />
        </div>
      </nav>
    </div>
  )
}
export default NavBar