import React, { useState } from "react";
// Importing the images
import bannerImage from "../assets/img/banner/page-banner-1.png";
import hotelImage from "../assets/img/hotel/hotel-9.png";
import luxuryImage from "../assets/img/hotel/luxy.png";
import roomImage from "../assets/img/hotel/hotel-25.png";
import Category from "../Components/category";

const ServicesDetails = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* Page Banner Start */}
      <div
        className="page__banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__banner-title">
                <h1>Services Details</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <span>-</span>Services Details
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Banner End */}

      {/* Services Details Start */}
      <div className="services__details section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xxl-3 col-xl-4 col-lg-4 lg-mb-30">
              <div className="all__sidebar">
                <Category />
                <div
                  className="all__sidebar-item-help mt-30"
                  style={{ backgroundImage: `url(${hotelImage})` }}
                >
                  <div className="all__sidebar-item-help-icon">
                    <i className="fal fa-phone-alt"></i>
                  </div>
                  <h5>
                    Simple solutions for a stylish stay. Contact us today!
                  </h5>
                  <div className="all__sidebar-item-help-contact">
                    <div className="all__sidebar-item-help-contact-content">
                      <span>Quick Help</span>
                      <h6>
                        <a href="tel:+27720277621">+27 (0)72 0277 621</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8 col-lg-8">
              <div className="services__details-left">
                <div className="services__details-left-image mb-30">
                  <img src={luxuryImage} alt="Standard Room" />
                </div>
                <div className="services__details-left-content">
                  <h2 className="mb-30">Standard Room</h2>
                  <p className="mb-0">
                    Enjoy a cozy stay in our Standard Room. Featuring a comfortable double bed, it’s perfect for relaxing after your adventures. With a calm atmosphere and thoughtful amenities, we aim to make your visit both enjoyable and restful.
                  </p>
                  <span>
                    Simple comfort awaits you. Our Standard Room is designed for relaxation with everything you need for a pleasant stay.
                  </span>

                  <p>
                    Our well-appointed Standard Room offers a peaceful retreat with cozy surroundings and excellent service. Experience a stay designed with your comfort in mind.
                  </p>

                  <div className="row align-items-center mt-35 mb-35">
                    <div className="col-xl-6 col-lg-12 xl-mb-30">
                      <img className="img__full" src={roomImage} alt="Room" />
                    </div>
                    <div className="col-xl-6 col-lg-12">
                      <h3 className="mb-20">Customer Benefits</h3>
                      <p className="m-30">
                        Discover the advantages of choosing our Standard Room for your stay. Experience top-notch comfort and service at an excellent value.
                      </p>
                      <div className="services__details-left-content-list">
                        <p>
                          <i className="fas fa-arrow-circle-right"></i> Cozy and comfortable room
                        </p>
                        <p>
                          <i className="fas fa-arrow-circle-right"></i> Excellent service and amenities
                        </p>
                        <p>
                          <i className="fas fa-arrow-circle-right"></i> Great value for your stay
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="room__details-right-faq mt-50">
                  {[
                    {
                      question: "Do you pay before or after booking a hotel?",
                      answer:
                        "Payment policies may vary. Typically, you can pay during or after booking, depending on the hotel’s policy. Check the specific details when making your reservation.",
                    },
                    {
                      question: "What documents are needed for hotel booking?",
                      answer:
                        "You generally need an ID and a credit card for hotel booking. Some hotels might ask for additional documentation, so it's good to confirm their requirements.",
                    },
                    {
                      question: "Do hotels charge your card before you check in?",
                      answer:
                        "Some hotels may charge your card in advance, while others may charge upon check-in or check-out. Review the hotel’s payment policy for specifics.",
                    },
                  ].map((item, index) => (
                    <div className="room__details-right-faq-item" key={index}>
                      <div className="room__details-right-faq-item-card">
                        <div
                          className="room__details-right-faq-item-card-header"
                          onClick={() => handleToggle(index)}
                        >
                          <h5>{item.question}</h5>
                          <i
                            className={`fa ${
                              activeIndex === index
                                ? "fa-long-arrow-up"
                                : "fa-long-arrow-down"
                            }`}
                          ></i>
                        </div>
                        <div
                          className={`room__details-right-faq-item-card-header-content ${
                            activeIndex === index ? "active" : "display-none"
                          }`}
                        >
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Details End */}
    </>
  );
};

export default ServicesDetails;
