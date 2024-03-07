
import React, { useState } from "react";
import { Link,useLocation } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [showBox, setShowBox] = useState(false);

  const location = useLocation();

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const toggleBox = () => {
    setShowBox(!showBox);
  };

  const handleEmojiClick = () => {
    toggleBox();
  };

  const boxStyle = {
    display: showBox ? 'block' : 'none',
    backgroundColor: '#fff',
    width: '250px',
    height:'250px',
    padding: '10px',
    position: 'absolute',
    top: '60px',
    right: '10px',
    zIndex: '999',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    border: '2px solid #ccc',
  };
  const navbarStyle = {
    backgroundColor: "#6ab791", // Replace with your desired color code
  };

  return (
    <nav className="navbar navbar-expand-lg bg" style={navbarStyle}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#top">
          <h1>SASHAKT</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <h5>Home</h5>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropright-toggle"
                to="/explore"
                id="exploreDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <h5>Explore</h5>
              </Link>
              {/* Dropdown menu for Explore */}
              <div
                className="dropdown-menu"
                aria-labelledby="exploreDropdown"
              >
                {/* Add your 6 dropdown elements here */}
                <Link className="dropdown-item" to="/see">
                  Videos
                </Link>
                <Link className="dropdown-item" to="/games">
                  Games
                </Link>
                <Link className="dropdown-item" to="/Stories/">
                  Read Along
                </Link>
                <Link className="dropdown-item" to="/knr">
                  Know Your Rights
                </Link>
                <Link className="dropdown-item" to="/diy">
                  Diy
                </Link>
                {/*<Link className="dropdown-item" to="/dand">
                  Do's and Don'ts
                </Link>*/}
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <h5>About Us</h5>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <h5>Contact Us</h5>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Emergency">
                <h5>Emergency</h5>
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
              <img
                className="emoji-img"
                src={sessionStorage.getItem('emoji')}
                onClick={handleEmojiClick}
              />
            </div>
          </div>
        </div>
      <div style={boxStyle}>
        <img className="emoji-img2" src={sessionStorage.getItem('emoji')} />
        <h5 className='username'>{sessionStorage.getItem("username")}</h5>
        <Link to="/select" className="custom-link">
          <button className="custom-button">SWITCH PROFILE</button>
        </Link>
        </div>
      </nav>
  );
};

export default Navbar;
