import React from 'react';
import logo from '../assets/img/logo.png'
import {Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer__area">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 sm-mb-30">
            <div className="footer__area-widget">
              <div className="footer__area-widget-about">
                <div className="footer__area-widget-about-logo">
                  <Link href="index.html">
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
                <p>Welcome to Sir Paul Guesthouse, where comfort and charm come together for a relaxing stay. Enjoy our cozy rooms and friendly service.</p>
                <div className="footer__area-widget-about-social">
                  <ul>
                    <li>
                      <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                    </li>
                    <li>
                      <Link href="#"><i className="fab fa-twitter"></i></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br />
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 lg-mb-30">
            <div className="footer__area-widget">
              <h5>Information</h5>
              <div className="footer__area-widget-contact">
                <div className="footer__area-widget-contact-item">
                  <div className="footer__area-widget-contact-item-icon">
                    <i className="fal fa-map-marked-alt"></i>
                  </div>
                  <div className="footer__area-widget-contact-item-content">
                    <span>
                      <Link href="https://maps.app.goo.gl/sWyarnYZzphYqCeC7" target="_blank" rel="noopener noreferrer">
                        123 Mabopo Township, ga-Nchabeleng, Ga-Sekhukhune, South Africa
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="footer__area-widget-contact-item">
                  <div className="footer__area-widget-contact-item-icon">
                    <i className="fal fa-envelope-open-text"></i>
                  </div>
                  <div className="footer__area-widget-contact-item-content">
                    <span>
                      <Link href="mailto:info@sirpaulguesthouse.co.za">info@sirpaulguesthouse.co.za</Link>
                    </span>
                  </div>
                </div>
                <div className="footer__area-widget-contact-item">
                  <div className="footer__area-widget-contact-item-icon">
                    <i className="fal fa-phone-alt"></i>
                  </div>
                  <div className="footer__area-widget-contact-item-content">
                    <span>
                      <Link href="tel:+27824565977">+27 (0)82 456 5977</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-5 col-sm-4 sm-mb-30">
            <div className="footer__area-widget">
              <h5>Pages Links</h5>
              <div className="footer__area-widget-menu">
                <ul>
                  <li><Link href="services-details.html"><i className="fal fa-angle-double-right"></i>Room Cleaning</Link></li>
                  <li><Link href="services-details.html"><i className="fal fa-angle-double-right"></i>Car Parking</Link></li>
                  <li><Link href="services-details.html"><i className="fal fa-angle-double-right"></i>Swimming pool</Link></li>
                  <li><Link href="services-details.html"><i className="fal fa-angle-double-right"></i>Fitness Gym</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-7 col-sm-8">
            <div className="footer__area-widget">
              <h5>Subscribe</h5>
              <div className="footer__area-widget-subscribe">
                <form action="#">
                  <input type="text" name="email" placeholder="Email Address" required />
                  <button type="submit"><i className="fal fa-hand-pointer"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright__area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-7 md-mb-10">
              <div className="copyright__area-left md-t-center">
                <p>Copyright ©2024 <Link href="https://sirpaulguesthouse.co.za/">sir paul Guesthouse</Link> Website by <Link href="https://mrmaroga.co.za">Mr Maroga</Link></p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-5">
              <div className="copyright__area-right t-right md-t-center">
                <ul>
                  <li><Link href="#">FAQ</Link></li>
                  <li><Link href="#">Terms of Use</Link></li>
                  <li><Link href="#">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;