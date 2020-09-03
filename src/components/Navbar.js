import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand text-white text-camelcase" href="#">
       <h1> EliteTech</h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <a className="nav-link text-white text-uppercase" href="#">
              Home&nbsp;<i class="fas fa-home">
                  </i> <span class="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-white text-uppercase ml-4" href="#">
              Laptop <span class="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-white text-uppercase ml-4" href="#">
              Desktop <span class="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-white text-uppercase ml-4" href="#">
              Accessories <span class="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-white text-uppercase ml-4" href="#">
              Contact Us <span class="sr-only">(current)</span>
            </a>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li class="nav-item">
            <a a className="navbar-brand text-white text-camelcase" href="#">
              <span class="badge badge-pill red">1</span>
                <i class="fas fa-shopping-cart pl-0"></i>
            </a>
          </li>
          <li class="nav-item">
            <a className="navbar-brand text-white text-camelcase" href="#">Login</a>
          </li>                  
              

          {/*
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
            */}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
export default Navbar;
