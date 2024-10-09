import React from "react";
import "../assets/css/error.css";
import Scarecrow from "../assets/img/Scarecrow.png";
import Header from "../Components/Header";
import { Link } from 'react-router-dom';
// import Footer from "../Components/Footer";

const ErrorPage = () => (
  <>
    <Header />
    <div className="page-container">
      {/* <h3>404 NOT FOUND</h3> */}
      <div className="page-content">
        <div className="image-container">
          <img src={Scarecrow} alt="Scarecrow" />
        </div>
        <div class="page-details">
          <h1 class="page-title">I have bad news for you</h1>
          <p class="page-description">
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <Link to="/">
            <button>BACK TO HOMEPAGE</button>
          </Link>
        </div>
      </div>
    </div>
    {/* <Footer /> */}
  </>
);

export default ErrorPage;
