// import Header from '../Components/Header';
// import Footer from '../Components/Footer';
import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../assets/img/banner-1.jpg';
import hotelImg1 from '../assets/img/hotel/hotel-1.jpg';
import contentRollImg from '../assets/img/content.png';
import hotelImg2 from '../assets/img/hotel/hotel-2.jpg';
import signatureImg from '../assets/img/bg/signature.png';
import luxuryImg1 from '../assets/img/luxury/luxury-1.jpg';
import luxuryImg2 from '../assets/img/luxury/luxury-2.jpg';
import luxuryImg3 from '../assets/img/luxury/luxury-3.jpg';
import luxuryImg4 from '../assets/img/luxury/luxury-4.jpg';
import luxuryImg5 from '../assets/img/luxury/luxury-5.jpg';
import videoImg from '../assets/img/video.jpg';
import cleaningIcon from '../assets/img/icon/cleaning.png';
import wifiIcon from '../assets/img/icon/wifi.png';
import locationIcon from '../assets/img/icon/location.png';
import featureImg from '../assets/img/features/feature.jpg';
import spaImg from '../assets/img/features/spa.png';
import feature3Img from '../assets/img/features/feature-3.jpg';
import hotel6Img from '../assets/img/hotel/hotel-6.png';
import hotel7Img from '../assets/img/hotel/hotel-7.png';
import hotel8Img from '../assets/img/hotel/hotel-8.png';
import blog1Img from '../assets/img/blog/apel.png';
import blog2Img from '../assets/img/blog/blog-2.png';
import blog3Img from '../assets/img/blog/blog-3.png';


function Home() {
  return (
    <div>
      {/* Banner Area Start */}
      <div className="banner__area" style={{ backgroundImage: `url(${bannerImg})` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="banner__area-title">
                <h1>The Best Guest House<span>Deals in the Limpopo</span></h1>
                <div className="banner__area-title-video">
                  <div className="video__play">
                    <Link className="video-popup" href="https://www.youtube.com/watch?v=0WC-tD-njcA">
                      <i className="fas fa-play"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <form action="#">
              <div className="check__area">
                <div className="check__area-item">
                  <p>Check In<input id="date" type="date" /></p>
                </div>
                <div className="check__area-item">
                  <p>Check Out<input id="date2" type="date" /></p>
                </div>
                <div className="check__area-item">
                  <div className="check__area-item-room">
                    <p>Room</p>
                    <select name="select">
                      <option value="1">1 Room</option>
                      <option value="2">2 Room</option>
                      <option value="3">3 Room</option>
                      <option value="4">4 Room</option>
                      <option value="5">5 Room</option>
                    </select>
                  </div>
                </div>
                <div className="check__area-item button">
                  <button className="theme-btn" type="submit">Check Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Banner Area End */}

      {/* Accommodations Area Start */}
      <div className="accommodations__two section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-5 order-last order-lg-first">
              <div className="accommodations__two-left">
                <img src={hotelImg1} alt="Hotel" />
                <div className="accommodations__two-left-roll">
                  <img className="content__roll" src={contentRollImg} alt="Content Roll" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 lg-mb-30">
              <div className="accommodations__two-title">
                <span className="subtitle__one">Accommodations</span>
                <h2>Welcome to Sir Paul Guesthouse</h2>
                <p>Discerning travelers seek more than mere destinations; they seek memorable experiences and the opportunity to forge new connections, whether for leisure or business at our hotels and conference facilities</p>
                <Link className="theme-border-btn" href="about.html">Read More<i className="fal fa-long-arrow-right"></i></Link>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-7 md-mb-30">
              <div className="accommodations__two-right">
                <img src={hotelImg2} alt="Hotel" />
                <div className="accommodations__two-right-bottom">
                  <div className="accommodations__two-right-bottom-signature">
                    <img src={signatureImg} alt="Signature" />
                  </div>
                  <div className="accommodations__two-right-bottom-author">
                    <h5>Sir Paul</h5>
                    <span>Founder CEO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Accommodations Area End */}

      {/* Deluxe Area Start */}
      <div className="deluxe__area section-padding">
        <div className="container">
          <div className="row align-items-end mb-60">
            <div className="col-xl-5">
              <div className="deluxe__area-title">
                <span className="subtitle__one">Deluxe and Luxury</span>
                <h2>Our Luxury Rooms</h2>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="deluxe__area-btn">
                <ul>
                  <li className="active" data-filter="*">All Rooms</li>
                  <li data-filter=".luxury">Standard</li>
                  <li data-filter=".single">Twin Room</li>
                  {/* <li data-filter=".suite">Small Suite</li> */}
                  <li data-filter=".family">Family Unit</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row deluxe__area-active">
            <div className="col-xl-3 col-lg-4 mb-30 suite">
              <div className="deluxe__area-item">
                <div className="deluxe__area-item-image">
                  <img className="img__full" src={luxuryImg1} alt="Twin Room" />
                </div>
                <div className="deluxe__area-item-content">
                  <h6><Link href="#"><span>R700</span> / Night</Link></h6>
                  <h4><Link href="room-details.html">Twin Room</Link></h4>
                  <Link className="simple-btn" href="contact.html"><i className="far fa-chevron-right"></i>Booking Now</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8 mb-30 suite">
              <div className="deluxe__area-item deluxe__area-item-hover">
                <div className="deluxe__area-item-image">
                  <img className="img__full" src={luxuryImg2} alt="Standard" />
                </div>
                <div className="deluxe__area-item-content">
                  <h6><Link href="#"><span>R600</span> / Night</Link></h6>
                  <h4><Link href="room-details.html">Standard</Link></h4>
                  <Link className="simple-btn" href="contact.html"><i className="far fa-chevron-right"></i>Booking Now</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 mb-30 family">
              <div className="deluxe__area-item">
                <div className="deluxe__area-item-image">
                  <img className="img__full" src={luxuryImg3} alt="Family Room" />
                </div>
                <div className="deluxe__area-item-content">
                  <h6><Link href="#"><span>R800</span> / Night</Link></h6>
                  <h4><Link href="room-details.html">Family Room</Link></h4>
                  <Link className="simple-btn" href="contact.html"><i className="far fa-chevron-right"></i>Booking Now</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8 lg-mb-30 single">
              <div className="deluxe__area-item">
                <div className="deluxe__area-item-image">
                  <img className="img__full" src={luxuryImg4} alt="Twin Room" />
                </div>
                <div className="deluxe__area-item-content">
                  <h6><Link href="#"><span>R700</span> / Night</Link></h6>
                  <h4><Link href="room-details.html">Twin Room</Link></h4>
                  <Link className="simple-btn" href="contact.html"><i className="far fa-chevron-right"></i>Booking Now</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 luxury">
              <div className="deluxe__area-item">
                <div className="deluxe__area-item-image">
                  <img className="img__full" src={luxuryImg5} alt="Family Room" />
                </div>
                <div className="deluxe__area-item-content">
                  <h6><Link href="#"><span>R800</span> / Night</Link></h6>
                  <h4><Link href="room-details.html">Family Room</Link></h4>
                  <Link className="simple-btn" href="contact.html"><i className="far fa-chevron-right"></i>Booking Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Deluxe Area End */}

      {/* Video Area Start */}
      <div className="video__area" style={{ backgroundImage: `url(${videoImg})` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8">
              <div className="video__area-title">
                <h2>Book guest house rooms, discover deals, and book conference spaces online.</h2>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-5 col-lg-4">
              <div className="video__area-right">
                <div className="video__play">
                  <Link className="video-popup"><i className="fas fa-play"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Area End */}

      {/* Services Area Start */}
      <div className="services__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 lg-mb-30">
              <div className="services__area-item">
                <div className="services__area-item-icon">
                  <img src={cleaningIcon} alt="Room Cleaning" />
                </div>
                <div className="services__area-item-content">
                  <h5><Link href="#">Room Cleaning</Link></h5>
                  <p>We clean the rooms thoroughly to make sure they're neat and comfortable during your stay.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 sm-mb-30">
              <div className="services__area-item">
                <div className="services__area-item-icon">
                  <img src={wifiIcon} alt="Room Wifi" />
                </div>
                <div className="services__area-item-content">
                  <h5><Link href="#">Room Wifi</Link></h5>
                  <p>We provide strong and reliable WiFi so you can stay connected and browse easily.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="services__area-item">
                <div className="services__area-item-icon">
                  <img src={locationIcon} alt="Scenic Location" />
                </div>
                <div className="services__area-item-content">
                  <h5><Link href="#">Scenic Location</Link></h5>
                  <p>Enjoy our prime location offering stunning vistas for a memorable stay.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services Area End */}

      {/* Feature Area Start */}
      <div className="feature__area">
        <div className="container">
          <div className="row align-items-center bg-left mb-60">
            <div className="col-xl-6 col-lg-6">
              <div className="feature__area-image">
                <img className="img__full" src={featureImg} alt="Feature" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="feature__area-left">
                <div className="feature__area-left-title">
                  <span className="subtitle__one">Our Food</span>
                  <h2>A Meal at Sir Paul</h2>
                  <p>Treat yourself to a satisfying meal at Sir Paul. Enjoy juicy grilled chicken drumsticks with white or yellow rice,
                     creamy pumpkin mash, mixed vegetables, and a fresh Greek salad.
                     It's a tasty and filling choice to keep you energized.</p>
                  <Link className="theme-border-btn" href="services-details.html">Read More<i className="fal fa-long-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center bg-right mb-60">
            <div className="col-xl-6 col-lg-6 order-last order-lg-first">
              <div className="feature__area-left">
                <div className="feature__area-left-title">
                  <span className="subtitle__one">Pamper Yourself</span>
                  <h2>Outdoor Spa Treatment</h2>
                  <p>Indulge in our luxurious outdoor spa treatments while taking in the breathtaking views. Enjoy a serene and rejuvenating experience surrounded by nature.</p>
                  <Link className="theme-border-btn" href="services-details.html">Learn More<i className="fal fa-long-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="feature__area-image">
                <img className="img__full" src={spaImg} alt="Outdoor Spa Treatment" />
              </div>
            </div>
          </div>
          <div className="row align-items-center bg-left mb-60">
            <div className="col-xl-6 col-lg-6">
              <div className="feature__area-image">
                <img className="img__full" src={feature3Img} alt="Conference Facilities" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="feature__area-left">
                <div className="feature__area-left-title">
                  <span className="subtitle__one">Conference Facilities</span>
                  <h2>Events and Meetings</h2>
                  <p>Our conference facilities are equipped with modern amenities to host various events and meetings. Whether you're planning a conference, seminar, or workshop,
                     we offer a professional environment tailored to your needs. Enjoy comfortable spaces and essential services for a successful event.</p>
                  <Link className="theme-border-btn" href="services-details.html">Read More<i className="fal fa-long-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature Area End */}

      {/* Place Two Start */}
      <div className="place__two section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6 lg-mb-30">
              <div className="place__two-left">
                <div className="place__two-left-image">
                  <div className="place__two-left-image-item">
                    <img src={hotel6Img} alt="Hotel" />
                  </div>
                  <div className="place__two-left-image-item mt-60">
                    <img src={hotel7Img} alt="Hotel" />
                  </div>
                  <div className="place__two-left-image-item">
                    <img src={hotel8Img} alt="Hotel" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="place__two-title">
                <span className="subtitle__one">Awesome Place</span>
                <h2>We're a Unique Place to Spend Time</h2>
                <p>At Sir Paul Guesthouse, we pride ourselves on our distinctive charm and exceptional service.
                     Phasellus malesuada convallis purus bibendum dictum. Maecenas semper nulla justo, quis pulvinar risus sagittis eget.
                      Sed libero eros, tincidunt eu ante a, ultrices elementum arcu. Experience the difference with us—where every stay is a unique journey.
                      </p>
                <Link className="theme-btn" href="about.html">Read More<i className="fal fa-long-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Place Two End */}

      {/* Blog Area Start */}
      <div className="blog__area section-padding">
        <div className="container">
          <div className="row mb-60">
            <div className="col-xl-12">
              <div className="blog__area-title">
                <span className="subtitle__one">Our Blog</span>
                <h2>Read Our Blog and News</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 xl-mb-30">
              <div className="blog__area-item">
                <div className="blog__area-item-image">
                  <Link href="blog-details.html"><img src={blog1Img} alt="Blog 1" /></Link>
                </div>
                <div className="blog__area-item-content">
                  <div className="blog__area-item-content-box">
                    <div className="blog__area-item-content-box-date">
                      <h3>13</h3>
                      <span>April 2024</span>
                    </div>
                    <div className="blog__area-item-content-box-title">
                      <h5><Link href="blog-details.html">The ultimate guide to finding the best hotels in your area.</Link></h5>
                    </div>
                  </div>
                  <div className="blog__area-item-content-btn">
                    <Link className="simple-btn-2" href="blog-details.html">Read More<i className="fal fa-long-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 lg-mb-30">
              <div className="blog__area-item blog__area-item-hover">
                <div className="blog__area-item-image">
                  <Link href="blog-details.html"><img src={blog2Img} alt="Blog 2" /></Link>
                </div>
                <div className="blog__area-item-content">
                  <div className="blog__area-item-content-box">
                    <div className="blog__area-item-content-box-date">
                      <h3>27</h3>
                      <span>July 2024</span>
                    </div>
                    <div className="blog__area-item-content-box-title">
                      <h5><Link href="blog-details.html">Reserve your conference facility today at the most affordable rates</Link></h5>
                    </div>
                  </div>
                  <div className="blog__area-item-content-btn">
                    <Link className="simple-btn-2" href="blog-details.html">Read More<i className="fal fa-long-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="blog__area-item">
                <div className="blog__area-item-image">
                  <Link href="blog-details.html"><img src={blog3Img} alt="Blog 3" /></Link>
                </div>
                <div className="blog__area-item-content">
                  <div className="blog__area-item-content-box">
                    <div className="blog__area-item-content-box-date">
                      <h3>30</h3>
                      <span>July 2024</span>
                    </div>
                    <div className="blog__area-item-content-box-title">
                      <h5><Link href="blog-details.html">Hotel Booking is the best choice for hotel booking.</Link></h5>
                    </div>
                  </div>
                  <div className="blog__area-item-content-btn">
                    <Link className="simple-btn-2" href="blog-details.html">Read More<i className="fal fa-long-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Area End */}
    </div>
  );
}

export default Home;
