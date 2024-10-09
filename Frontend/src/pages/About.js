import React from "react";
import {Link } from "react-router-dom"
import bannerImage from "../assets/img/banner/page-banner-1.png";
import offersImage from "../assets/img/features/offers.png";
import cleaningIcon from "../assets/img/icon/cleaning.png";
import carParkingIcon from "../assets/img/icon/car-parking.png";
import swimmingPoolIcon from "../assets/img/icon/swimming-pool.png";
import pickUpDropIcon from "../assets/img/icon/wifi.png";

// Gallery and team images imported directly
import galleryImage1 from "../assets/img/features/gallery-1.png";
import galleryImage2 from "../assets/img/features/gallery-2.png";
import galleryImage3 from "../assets/img/features/gallery-3.png";
import galleryImage4 from "../assets/img/features/gallery-4.png";

import teamImage1 from "../assets/img/team/team-1.png";
import teamImage2 from "../assets/img/team/team-1.png";
import teamImage3 from "../assets/img/team/team-1.png";

const ServiceIcons = {
  "cleaning-1.png": cleaningIcon,
  "car-parking.png": carParkingIcon,
  "swimming-pool.png": swimmingPoolIcon,
  "wifi.png": pickUpDropIcon,
};

const About = () => {
  const services = [
    {
      id: 1,
      icon: "cleaning-1.png",
      title: "Room Cleaning",
      description:
        "Our staff ensures your room is spotless every day, with fresh linens and a tidy space, making your stay as comfortable and relaxing as possible.",
    },
    {
      id: 2,
      icon: "car-parking.png",
      title: "Car Parking",
      description:
        "We offer secure and convenient parking right at our guesthouse, so your vehicle is safe and easily accessible during your entire visit",
    },
    {
      id: 3,
      icon: "swimming-pool.png",
      title: "Swimming pool",
      description:
        "Take a refreshing dip in our well-maintained pool or relax poolside, enjoying the perfect spot to unwind and recharge.",
    },
    {
      id: 4,
      icon: "wifi.png",
      title: "Room Wifi",
      description:
        "Enjoy high-speed WiFi throughout the guesthouse, whether you need to catch up on work or stay connected with family and friends.",
    },
  ];

  return (
    <div>
      {/* Page Banner Start */}
      <div
        className="page__banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__banner-title">
                <h1>About Us</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <span>-</span>About Us
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Banner End */}

      {/* Company Offers Start */}
      <div className="offers__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-title">
                <span className="subtitle__one">Special Offer at Sir Paul Guesthouse</span>
                <h2>Your Comfort, Our Priority</h2>
                <p>
                  Come relax at Sir Paul Guesthouse, where we offer cozy rooms
                  and friendly service. Whether you're staying for a night or a
                  week, our guesthouse is the perfect place to unwind. Enjoy a
                  peaceful atmosphere and everything you need to feel at home.
                  Book now to enjoy a special stay with us. We look forward to
                  making your visit comfortable and memorable. Reserve your room
                  today!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="offers__area-image">
                <img className="img__full" src={offersImage} alt="Offers" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Company Offers End */}

      {/* Services Two Start */}
      <div className="services__two">
        <div className="container">
          <div className="row justify-content-center">
            {services.map((service) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={service.id}>
                <div className="services__two-item">
                  <div className="services__two-item-icon">
                    <img src={ServiceIcons[service.icon]} alt={service.title} />
                  </div>
                  <div className="services__two-item-content">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Services Two End */}

      {/* Gallery Area Start */}
      <div className="gallery__area section-padding pb-0 overflow-hidden">
        <div className="container-fluid p-0">
          <div className="row">
            {[galleryImage1, galleryImage2, galleryImage3, galleryImage4].map(
              (image, index) => (
                <div className="col-sm-3 sm-mb-10" key={index}>
                  <div className="gallery__area-item">
                    <Link className="img-popup" href={image}>
                      <img
                        className="img__full"
                        src={image}
                        alt={`Gallery ${index + 1}`}
                      />
                    </Link>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      {/* Gallery Area End */}

      {/* Team Area Start */}
      <div className="team__area section-padding">
        <div className="container">
          <div className="row mb-60">
            <div className="col-xl-12">
              <div className="team__area-title">
                <span className="subtitle__one">Our Expert Members</span>
                <h2>Expert Our Services Team</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {[
              {
                id: 1,
                image: teamImage1,
                name: "Mahlaku Moretsela",
                role: "Manager",
              },
              {
                id: 2,
                image: teamImage2,
                name: "Mahlaku Moretsela",
                role: "Reception",
              },
              {
                id: 3,
                image: teamImage3,
                name: "Mahlaku Moretsela",
                role: "Services Manager",
              },
            ].map((member) => (
              <div className="col-xl-4 col-lg-4 col-md-6" key={member.id}>
                <div className="team__area-item">
                  <div className="team__area-item-image">
                    <img src={member.image} alt={member.name} />
                    <div className="team__area-item-image-overlay">
                      <div className="team__area-item-image-overlay-social">
                        <ul>
                          <li>
                            <Link href="#">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <i className="fab fa-behance"></i>
                            </Link>
                          </li>
                          {/* <li>
                            <Link href="#">
                              <i className="fab fa-youtube"></i>
                            </Link>
                          </li> */}
                        </ul>
                      </div>
                      <div className="team__area-item-image-overlay-content">
                        <h5>{member.name}</h5>
                        <span>{member.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team Area End */}
    </div>
  );
};

export default About;
