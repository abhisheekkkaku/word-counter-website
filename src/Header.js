import React from "react";
import {Link} from 'react-router-dom';
import ProTypes from 'prop-types'

function Header(props) {
    return(
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
              </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <Link className="nav-link active" aria-current="page" to="/">Home</Link> 
                          </li>
                              <li className="nav-item">
                                  {/* <Link className="nav-link " to="/about">{props.aboutText}</Link> */}
                                  <Link className="nav-link " aria-current="page" to="/About">About</Link> 
                              </li>
                        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
            <div className={`form-check form-switch text-${props.mode==='light' ? 'dark':'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div>
      </div>
    </div>
  </nav>
    );
}

export default Header;