import React from 'react';
import './css/NavBar.css';
import { Link, Outlet } from 'react-router-dom';

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
      <a className="navbar-brand mt-lg-0" href="/">
        <h4 className='p-0 m-0'>Farmer's portal</h4>
      </a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link" href="/"> <Link to={"/"}>News</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"> <Link to={"/Crops Search"}>Crops Search</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><Link to={"/Weather"}>Weather</Link></a>
        </li>
      </ul>
    </div>
    <div className="d-flex align-items-center">
      <div className="dropdown">
        <a
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="/"
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
<Outlet />
   </>
  )
}

export default NavBar