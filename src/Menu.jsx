import React from 'react'
import {NavLink} from 'react-router-dom'

const Menu = () =>
{
    return(
        <>
<nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <a className="navbar-brand" href="#">Look around!</a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home|</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Con">|Contactus|</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/S">|Signup|</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/N">|News|</NavLink>
      </li>
    </ul>
  </div>
</nav>
    </>
    );
};

export default Menu;