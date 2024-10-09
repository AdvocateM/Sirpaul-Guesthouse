import React from 'react';
import { Link } from 'react-router-dom';
// Images
import pageBannerImage from '../../assets/img/banner/page-banner-3.png';
import hotelImage1 from '../../assets/img/hotel/hotel-24.png';
import hotelImage2 from '../../assets/img/hotel/hotel-25.jpg';
import icon1 from '../../assets/img/icon/list-1.png';
import icon2 from '../../assets/img/icon/list-2.png';
import icon3 from '../../assets/img/icon/list-3.png';
import icon4 from '../../assets/img/icon/list-4.png';
import icon5 from '../../assets/img/icon/list-5.png';
import icon6 from '../../assets/img/icon/list-6.png';
import icon7 from '../../assets/img/icon/list-7.png';
import icon8 from '../../assets/img/icon/list-8.png';
import icon9 from '../../assets/img/icon/list-9.png';

const RoomDetails = () => {
  return (
    <div>
      {/* Page Banner Start */}
      <div className="page__banner" style={{ backgroundImage: `url(${pageBannerImage})` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__banner-title">
                <h1>Room Details</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li><Link href="index.html">Home</Link></li>
                    <li><span>-</span>Room Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Banner End */}

      {/* Room Details Start */}
      <div className="room__details section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 lg-mb-30">
              <div className="all__sidebar">
                <div className="all__sidebar-item">
                  <h5>Your Price</h5>
                  <div className="all__sidebar-item-price">
                    <ul>
                      <li><i className="fal fa-bed-alt"></i>(3) bed's</li>
                      <li><i className="fal fa-users"></i>(6) Guest's</li>
                    </ul>
                    <h4>R700<span>/Night</span></h4>
                    <Link className="theme-btn" href="contact.html">Book Now<i className="fal fa-long-arrow-right"></i></Link>
                  </div>
                </div>
                <div className="all__sidebar-item">
                  <h5>Category</h5>
                  <div className="all__sidebar-item-category">
                    <ul>                                    
                      <li><Link href="#"><i className="far fa-angle-double-right"></i>Luxury Room<span>(08)</span></Link></li>
                      <li><Link href="#"><i className="far fa-angle-double-right"></i>Small Suite<span>(06)</span></Link></li>
                      <li><Link href="#"><i className="far fa-angle-double-right"></i>Single<span>(05)</span></Link></li>
                      <li><Link href="#"><i className="far fa-angle-double-right"></i>Family<span>(09)</span></Link></li>
                      <li><Link href="#"><i className="far fa-angle-double-right"></i>Double Room<span>(03)</span></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="all__sidebar-item">
                  <h5>Booking Now</h5>
                  <div className="all__sidebar-item-booking">
                    <div className="all__sidebar-item-booking-item mb-10">
                      <select name="select">
                        <option value="1">Check In</option>
                        <option value="2">Check In</option>
                        <option value="3">Check In</option>
                        <option value="4">Check In</option>
                        <option value="5">Check In</option>
                      </select>
                    </div>
                    <div className="all__sidebar-item-booking-item mb-10">
                      <select name="select">
                        <option value="1">Check Out</option>
                        <option value="2">Check Out</option>
                        <option value="3">Check Out</option>
                        <option value="4">Check Out</option>
                        <option value="5">Check Out</option>
                      </select>
                    </div>
                    <div className="all__sidebar-item-booking-item mb-30">
                      <select name="select">
                        <option value="1">Room</option>
                        <option value="2">1 Room</option>
                        <option value="3">2 Room</option>
                        <option value="4">3 Room</option>
                        <option value="5">4 Room</option>
                      </select>
                    </div>
                    <Link className="theme-btn" href="#">Check<i className="fal fa-long-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="room__details-right">
                <div className="room__details-right-content">
                  <h3 className="mb-25">Luxury Room is the best online room for luxury hotels</h3>
                  <p className="mb-25">Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia sollicitudin eget eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur rhoncus lobortis. Curabitur sit amet velit sagittis, pellentesque diam euismod, faucibus quam. Cras non rhoncus ipsum. Quisque mattis arcu metus, a fermentum justo semper in. Aliquam egestas metus at nunc aliquam</p>
                  <p className="m-0">id molestie ex ornare. Aliquam id arcu vel sem pretium porttitor non maximus diam. Quisque urna turpis, euismod sed elementum vel, pellentesque eu eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus musc.</p>
                  <div className="row mt-35 mb-35">
                    <div className="col-sm-6 sm-mb-30">
                      <img className="img__full" src={hotelImage1} alt="Hotel Room 1" />
                    </div>
                    <div className="col-sm-6">
                      <img className="img__full" src={hotelImage2} alt="Hotel Room 2" />
                    </div>
                  </div>
                  <h3 className="mb-25">Special check-in instructions</h3>
                  <p className="mb-25">Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia sollicitudin eget eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur rhoncus lobortis. Curabitur sit amet velit sagittis, pellentesque diam euismod, faucibus quam. Cras non rhoncus ipsum. Quisque mattis arcu metus, a fermentum justo semper in. Aliquam egestas metus at nunc aliquam</p>
                  <p className="m-0">id molestie ex ornare. Aliquam id arcu vel sem pretium porttitor non maximus diam. Quisque urna turpis, euismod sed elementum vel, pellentesque eu eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus musc.</p>
                </div>
                <div className="room__details-right-list">
                  <h3>Amenities</h3>
                  <div className="row mt-35">
                    <div className="col-md-4 col-sm-6 mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src={icon1} alt="Room Cleaning" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Room Cleaning</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 sm-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src={icon2} alt="Car Parking" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Car Parking</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 sm-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src={icon3} alt="Swimming Pool" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Swimming Pool</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src={icon4} alt="Pick Up & Drop" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Pick Up & Drop</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 md-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src={icon5} alt="Spa Center" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Spa Center</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 sm-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src={icon6} alt="Smart Key" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Smart Key</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 md-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src={icon7} alt="Home Wifi" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Home Wifi</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 sm-mb-35">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src={icon8} alt="Breakfast" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Breakfast</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="room__details-right-list-item">
                        <div className="room__details-right-list-item-icon">
                          <img src={icon9} alt="Fitness Gym" />
                        </div>
                        <div className="room__details-right-list-item-title">
                          <h6>Fitness Gym</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="room__details-right-faq mt-50">
                  <div className="room__details-right-faq-item">
                    <div className="room__details-right-faq-item-card">
                      <div className="room__details-right-faq-item-card-header">
                        <h5>Do you pay before or after booking a hotel?</h5> 
                        <i className="far fa-long-arrow-up"></i> 
                      </div>
                      <div className="room__details-right-faq-item-card-header-content active">
                        <p>Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia sollicitudin eget eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur rhoncus lobortis. Curabitur sit amet velit sagittis, pellentesque diam euismod, faucibus quam. Cras non rhoncus ipsum. Quisque mattis arcu metus, a fermentum justo semper in.</p>
                      </div>
                    </div>
                  </div>
                  <div className="room__details-right-faq-item">
                    <div className="room__details-right-faq-item-card">
                      <div className="room__details-right-faq-item-card-header">
                        <h5>What documents are needed for hotel booking?</h5> 
                        <i className="far fa-long-arrow-down"></i> 
                      </div>
                      <div className="room__details-right-faq-item-card-header-content display-none">
                        <p>Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia sollicitudin eget eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur rhoncus lobortis. Curabitur sit amet velit sagittis, pellentesque diam euismod, faucibus quam. Cras non rhoncus ipsum. Quisque mattis arcu metus, a fermentum justo semper in.</p>
                      </div>
                    </div>
                  </div>
                  <div className="room__details-right-faq-item">
                    <div className="room__details-right-faq-item-card">
                      <div className="room__details-right-faq-item-card-header">
                        <h5>Do hotels charge your card before you check in?</h5> 
                        <i className="far fa-long-arrow-down"></i> 
                      </div>
                      <div className="room__details-right-faq-item-card-header-content display-none">
                        <p>Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia sollicitudin eget eu ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur rhoncus lobortis. Curabitur sit amet velit sagittis, pellentesque diam euismod, faucibus quam. Cras non rhoncus ipsum. Quisque mattis arcu metus, a fermentum justo semper in.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Room Details End */}
    </div>
  );
};

export default RoomDetails;
