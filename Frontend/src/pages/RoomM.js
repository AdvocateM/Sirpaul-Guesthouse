import React from 'react';
import { Link } from 'react-router-dom';
import roomImage1 from '../assets/img/hotel/hotel-10.png';
import roomImage2 from '../assets/img/hotel/hotel-11.png';
import roomImage3 from '../assets/img/hotel/hotel-12.png';
import roomImage4 from '../assets/img/hotel/hotel-13.png';
import roomImage5 from '../assets/img/hotel/hotel-14.png';
import roomImage6 from '../assets/img/hotel/hotel-15.png';
import roomImage7 from '../assets/img/hotel/hotel-16.png';
import roomImage8 from '../assets/img/hotel/hotel-17.png';
import roomImage9 from '../assets/img/hotel/hotel-12.png';
import bannerImage from '../assets/img/banner/page-banner-4.png';

const ModernRoomList = () => {
  return (
    <div>
      {/* Page Banner Start */}
      <div className="page__banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__banner-title">
                <h1>Room Modern</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li><Link href="index.html">Home</Link></li>
                    <li><span>-</span>Room Modern</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Banner End */}

      {/* Modern Room Area Start */}
      <div className="modern__room section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
              <div className="deluxe__three-item">
                <div className="deluxe__three-item-image">
                  <img src={roomImage1} alt="Double Room" />
                  <div className="deluxe__three-item-image-content">
                    <h4><Link href="room-details.html">Double Room</Link><span>R800/Night</span></h4>
                    <p>Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia</p>
                    <div className="deluxe__three-item-image-content-meta">
                      <ul>
                        <li><i className="fal fa-bed-alt"></i>(3) bed's</li>
                        <li><i className="fal fa-users"></i>(4) Guest's</li>
                      </ul>
                    </div>
                    <div className="deluxe__three-item-image-content-bottom">
                      <Link className="simple-btn" href="#"><i className="far fa-chevron-right"></i>Read More</Link>
                      <p><i className="fas fa-star"></i><span>4.8</span>2k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 md-mb-30">
              <div className="deluxe__three-item">
                <div className="deluxe__three-item-image">
                  <img src={roomImage2} alt="Small Suite" />
                  <div className="deluxe__three-item-image-content">
                    <h4><Link href="room-details.html">Small Suite</Link><span>R600/Night</span></h4>
                    <p>Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia</p>
                    <div className="deluxe__three-item-image-content-meta">
                      <ul>
                        <li><i className="fal fa-bed-alt"></i>(2) bed's</li>
                        <li><i className="fal fa-users"></i>(3) Guest's</li>
                      </ul>
                    </div>
                    <div className="deluxe__three-item-image-content-bottom">
                      <Link className="simple-btn" href="#"><i className="far fa-chevron-right"></i>Read More</Link>
                      <p><i className="fas fa-star"></i><span>4.4</span>2k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 md-mb-30">
              <div className="deluxe__three-item">
                <div className="deluxe__three-item-image">
                  <img src={roomImage3} alt="Luxury Room" />
                  <div className="deluxe__three-item-image-content">
                    <h4><Link href="room-details.html">Luxury Room</Link><span>R800/Night</span></h4>
                    <p>Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia</p>
                    <div className="deluxe__three-item-image-content-meta">
                      <ul>
                        <li><i className="fal fa-bed-alt"></i>(3) bed's</li>
                        <li><i className="fal fa-users"></i>(6) Guest's</li>
                      </ul>
                    </div>
                    <div className="deluxe__three-item-image-content-bottom">
                      <Link className="simple-btn" href="#"><i className="far fa-chevron-right"></i>Read More</Link>
                      <p><i className="fas fa-star"></i><span>3.7</span>2k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
              <div className="deluxe__three-item">
                <div className="deluxe__three-item-image">
                  <img src={roomImage4} alt="Junior Suite" />
                  <div className="deluxe__three-item-image-content">
                    <h4><Link href="room-details.html">Junior Suite</Link><span>R700/Night</span></h4>
                    <p>Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia</p>
                    <div className="deluxe__three-item-image-content-meta">
                      <ul>
                        <li><i className="fal fa-bed-alt"></i>(2) bed's</li>
                        <li><i className="fal fa-users"></i>(4) Guest's</li>
                      </ul>
                    </div>
                    <div className="deluxe__three-item-image-content-bottom">
                      <Link className="simple-btn" href="#"><i className="far fa-chevron-right"></i>Read More</Link>
                      <p><i className="fas fa-star"></i><span>3.9</span>2k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 xl-mb-30">
              <div className="deluxe__three-item">
                <div className="deluxe__three-item-image">
                  <img src={roomImage5} alt="Superior Room" />
                  <div className="deluxe__three-item-image-content">
                    <h4><Link href="room-details.html">Superior Room</Link><span>R800/Night</span></h4>
                    <p>Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia</p>
                    <div className="deluxe__three-item-image-content-meta">
                      <ul>
                        <li><i className="fal fa-bed-alt"></i>(3) bed's</li>
                        <li><i className="fal fa-users"></i>(7) Guest's</li>
                      </ul>
                    </div>
                    <div className="deluxe__three-item-image-content-bottom">
                      <Link className="simple-btn" href="#"><i className="far fa-chevron-right"></i>Read More</Link>
                      <p><i className="fas fa-star"></i><span>2.9</span>2k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 md-mb-30">
              <div className="deluxe__three-item">
                <div className="deluxe__three-item-image">
                  <img src={roomImage6} alt="Single Room" />
                  <div className="deluxe__three-item-image-content">
                    <h4><Link href="room-details.html">Single Room</Link><span>R600/Night</span></h4>
                    <p>Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia</p>
                    <div className="deluxe__three-item-image-content-meta">
                      <ul>
                        <li><i className="fal fa-bed-alt"></i>(1) bed's</li>
                        <li><i className="fal fa-users"></i>(2) Guest's</li>
                      </ul>
                    </div>
                    <div className="deluxe__three-item-image-content-bottom">
                      <Link className="simple-btn" href="#"><i className="far fa-chevron-right"></i>Read More</Link>
                      <p><i className="fas fa-star"></i><span>4.8</span>2k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 xl-mb-30">
              <div className="deluxe__three-item">
                <div className="deluxe__three-item-image">
                  <img src={roomImage7} alt="Deluxe Room" />
                  <div className="deluxe__three-item-image-content">
                    <h4><Link href="room-details.html">Deluxe Room</Link><span>R800/Night</span></h4>
                    <p>Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia</p>
                    <div className="deluxe__three-item-image-content-meta">
                      <ul>
                        <li><i className="fal fa-bed-alt"></i>(2) bed's</li>
                        <li><i className="fal fa-users"></i>(5) Guest's</li>
                      </ul>
                    </div>
                    <div className="deluxe__three-item-image-content-bottom">
                      <Link className="simple-btn" href="#"><i className="far fa-chevron-right"></i>Read More</Link>
                      <p><i className="fas fa-star"></i><span>3.5</span>2k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 md-mb-30">
              <div className="deluxe__three-item">
                <div className="deluxe__three-item-image">
                  <img src={roomImage8} alt="Standard Room" />
                  <div className="deluxe__three-item-image-content">
                    <h4><Link href="room-details.html">Standard Room</Link><span>R800/Night</span></h4>
                    <p>Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia</p>
                    <div className="deluxe__three-item-image-content-meta">
                      <ul>
                        <li><i className="fal fa-bed-alt"></i>(3) bed's</li>
                        <li><i className="fal fa-users"></i>(6) Guest's</li>
                      </ul>
                    </div>
                    <div className="deluxe__three-item-image-content-bottom">
                      <Link className="simple-btn" href="#"><i className="far fa-chevron-right"></i>Read More</Link>
                      <p><i className="fas fa-star"></i><span>4.9</span>2k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="deluxe__three-item">
                <div className="deluxe__three-item-image">
                  <img src={roomImage9} alt="Family Room" />
                  <div className="deluxe__three-item-image-content">
                    <h4><Link href="room-details.html">Family Room</Link><span>R700/Night</span></h4>
                    <p>Praesent non ullamcorper ligula. Proin a mi vitae massa lacinia</p>
                    <div className="deluxe__three-item-image-content-meta">
                      <ul>
                        <li><i className="fal fa-bed-alt"></i>(2) bed's</li>
                        <li><i className="fal fa-users"></i>(4) Guest's</li>
                      </ul>
                    </div>
                    <div className="deluxe__three-item-image-content-bottom">
                      <Link className="simple-btn" href="#"><i className="far fa-chevron-right"></i>Read More</Link>
                      <p><i className="fas fa-star"></i><span>2.9</span>2k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Modern Room Area End */}
    </div>
  );
};

export default ModernRoomList;
