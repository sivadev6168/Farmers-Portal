import React from 'react';
import './css/NavBar.css'

const NavBar = () => {
  return (
   <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <a className="navbar-brand mt-2 mt-lg-0" href="#">
        {/* <img
          src="https://img.freepik.com/free-vector/green-pea-plant_1308-24755.jpg?w=360&t=st=1675019960~exp=1675020560~hmac=bf85b16bf895d9ac4354913724733d982fa9bf3c8f44d1dd7300c1d6b783d3e7"
          height="60"
          alt="MDB Logo"
          loading="lazy"
        /> */}
        <h4>Farmer's portal</h4>
      </a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Projects</a>
        </li>
      </ul>
    </div>
    <div className="d-flex align-items-center">
      <div className="dropdown">
        <a
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/482/482636.png?w=740&t=st=1675020057~exp=1675020657~hmac=5e72a26b86009ab8f89340d35fcff65b1b4f023d6fdc3358f152f40d9389121c"
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a className="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
   </>
  )
}

export default NavBar