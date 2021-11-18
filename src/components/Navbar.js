import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
       
        <Link className="navbar-brand" to="/">E-Commerce</Link>

       
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
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={(navData) => navData.isActive ? "nav-link active" :  "nav-link"} to="/">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={(navData) => navData.isActive ? "nav-link active" :  "nav-link"} to="/products/addproduct">Add Product</NavLink>
            </li>
          </ul>
      
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
              </span>
            </li>
             <li className="nav-item dropdown">
              <span
                className="nav-link dropdown"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              ></span>
            </li>
          </ul>
        </div>
      </div>
  </nav>
  
  )
}

export default Navbar
