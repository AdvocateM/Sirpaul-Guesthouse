import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import '../assets/css/custom.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 135);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={`header__sticky ${isSticky ? 'header__sticky-sticky-menu' : ''}`}>
      <div className="header__area">
        <div className="container custom__container">
          <div className="header__area-menubar">
            <div className="header__area-menubar-left">
              <div className="header__area-menubar-left-logo">
                <Link to="/">
                  <img src={logo} alt="Logo" />
                </Link>
                <div className="responsive-menu" onClick={toggleMenu}>
                  <i className={`fal ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
              </div>
            </div>
            <div className={`header__area-menubar-right ${isMenuOpen ? 'menu-responsive active' : ''}`}>
              <div className="header__area-menubar-right-menu">
                <ul id="mobilemenu">
                  <li><Link to="/">Home</Link></li>
                  <li className="menu-item-has-children">
                    <Link to="#">Pages</Link>
                    <ul className="sub-menu">
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/services-details">Services Details</Link></li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="#">Room</Link>
                    <ul className="sub-menu">
                      <li><Link to="/room-modern">Room Modern</Link></li>
                      <li><Link to="/room-list">Room List</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="header__area-menubar-right-box">
              <div className="header__area-menubar-right-box-btn">
                <Link className="theme-btn" to="https://www.booking.com/Share-8WNXQJ">
                  Book Now<i className="fal fa-long-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
