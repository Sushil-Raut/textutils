import React from 'react';
import PropTypes from 'prop-types';


export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title} {/* Displaying prop */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.about} 
                </a>
              </li> */}
            </ul>
            <form className="d-flex">
              {/* Placeholder for future search functionality */}
            </form>

            

            {/* First Switch */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'lightseagreen' : 'light'}`}>
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                id="flexSwitchCheckDefault2"
                style={{
                  backgroundColor: props.mode === 'light' ? 'grey' : 'black', // Dynamic background
                  borderColor: props.mode === 'light' ? 'black' : 'lightseagreen', // Optional border color
                }}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault2">
                 DarkMode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// Defining prop types
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

// Setting default props
Navbar.defaultProps = {
  title: "Set Title Here",
  about: "About Us",
};
