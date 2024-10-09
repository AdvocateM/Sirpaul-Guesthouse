import React from "react";
import {Link} from 'react-router-dom'
import bannerImage from "../assets/img/banner/page-banner-9.png";

function Contact() {
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
                <h1>Contact Us</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li>
                      <Link href="index.html">Home</Link>
                    </li>
                    <li>
                      <span>-</span>Contact Us
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Banner End */}

      {/* Contact Area Start */}
      <div className="contact__area section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 lg-mb-30">
              <div className="contact__area-title">
                <h3 className="mb-25">Get In Touch</h3>
                <p>
                  For inquiries or reservations, please contact us at Sir Paul
                  Guesthouse. We look forward to hearing from you!
                </p>
              </div>
              <div className="contact__area-info">
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-phone-alt"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Helpline</span>
                    <h6>
                      <Link href="tel:+27720277621">+27 (0)72 0277 621</Link>
                      <br />
                      <Link href="tel:+27824565977">+27 (0)82 456 5977</Link>
                    </h6>
                  </div>
                </div>
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Quick Email</span>
                    <h6>
                      <Link href="mailto:info@sirpaulguesthouse.co.za">
                        info@sirpaulguesthouse.co.za
                      </Link>
                      <br />
                      <Link href="mailto:sirpaulguesthouse@gmail.com">
                        sirpaulguesthouse@gmail.com
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="contact__area-info-item">
                  <div className="contact__area-info-item-icon">
                    <i className="fal fa-map-marker-alt"></i>
                  </div>
                  <div className="contact__area-info-item-content">
                    <span>Office Address</span>
                    <h6>
                      <Link href="#">
                        123 Mabopo Township, Mabopo 0741 South Africa
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="contact__area-social">
                <ul>
                  <li>
                    <Link href="https://facebook.com/sirpaulguesthouse.co.za/?_rdc=1&_rdr">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="contact__area-form">
                <h3 className="mb-35">Send Message</h3>
                <form
                  id="contact-form"
                  action="assets/form/mail.php"
                  method="POST"
                >
                  <div className="row">
                    <div className="col-sm-6 mb-30">
                      <div className="contact__area-form-item">
                        <i className="fal fa-user"></i>
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 sm-mb-30">
                      <div className="contact__area-form-item">
                        <i className="far fa-envelope-open"></i>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 mb-30">
                      <div className="contact__area-form-item">
                        <i className="far fa-phone-alt"></i>
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 sm-mb-30">
                      <div className="contact__area-form-item">
                        <i className="far fa-address-book"></i>
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-sm-12 mb-30">
                      <div className="contact__area-form-item">
                        <i className="far fa-comments"></i>
                        <textarea
                          name="message"
                          placeholder="Type your comments...."
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact__area-form-item">
                        <button className="theme-btn" type="submit">
                          Submit Now<i className="fal fa-long-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="contact__area-map section-padding">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58114.08341250414!2d29.761016427094553!3d-24.446267219497585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ec16ca677938d41%3A0x4116be430914a817!2sSir%20Paul%20Guesthouse!5e0!3m2!1sen!2sza!4v1724188893526!5m2!1sen!2sza"
                  title="google maps"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Area End */}
    </div>
  );
}

export default Contact;
