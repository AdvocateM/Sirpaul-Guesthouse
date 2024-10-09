import React from 'react';
import { Link } from 'react-router-dom';
import luxuxy6 from '../../assets/img/luxury/luxury-1.jpg'
import luxuxy7 from '../../assets/img/luxury/luxury-2.jpg'
import luxuxy8 from '../../assets/img/luxury/luxury-3.jpg'
import luxuxy9 from '../../assets/img/luxury/luxury-4.jpg'
import banner from '../../assets/img/banner/page-banner-3.png'
import Category from '../../Components/category';


const RoomArea = () => {
    const roomItems = [
        {
          image: luxuxy6,
          price: 'R800',
          title: 'Family unit ',
          description: 'A versatile unit with a separate bedroom featuring a double bed and a lounge with an additional single bed. Perfect for families needing both privacy and togetherness.',
          beds: '2',
          guests: '4',
          rating: '4.9'
        },
        {
          image: luxuxy7,
          price: 'R700',
          title: 'Twin Room',
          description: 'Featuring a double bed and a single bed, this room is ideal for guests who need a combination of comfort and flexibility.',
          beds: '2',
          guests: '3',
          rating: '4.4'
        },
        {
            image: luxuxy8,
            price: 'R600',
            title: 'Standard',
            description: 'This room includes a comfortable double bed, perfect for a cozy stay.',
            beds: '1',
            guests: '2',
            rating: '4.4'
          },
        {
            image: luxuxy9,
            price: 'R700',
            title: 'Twin',
            description: 'Featuring a double bed and a single bed, this room is ideal for guests who need a combination of comfort and flexibility.',
            beds: '2',
            guests: '3',
            rating: '4.4'
          },
      ];

  return (
    <div>
      {/* Page Banner Start */}
      <div className="page__banner" style={{ backgroundImage: `url(${banner})` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__banner-title">
                <h1>Room Style</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li><Link href="index.html">Home</Link></li>
                    <li><span>-</span>Room Style</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Banner End */}

      {/* Room Area Start */}
      <section className="room__area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="all__sidebar">
                <Category />
                {/* <div className="all__sidebar-item">
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
                </div> */}
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 order-first order-lg-1 lg-mb-30">
              <div className="row justify-content-center">
                {/* Repeat Room Item Component */}
                {roomItems.map((room, index) => (
                  <div key={index} className="col-xl-4 col-md-6 mb-30">
                    <div className="deluxe__two-item">
                      <div className="deluxe__two-item-image">
                        <Link href="room-details.html">
                          <img src={room.image} alt={room.title} />
                        </Link>
                      </div>
                      <div className="deluxe__two-item-content">
                        <span>{room.price}/Night</span>
                        <h4><Link href="room-details.html">{room.title}</Link></h4>
                        <p>{room.description}</p>
                        <div className="deluxe__two-item-content-meta">
                          <ul>
                            <li><i className="fal fa-bed-alt"></i>({room.beds}) bed's</li>
                            <li><i className="fal fa-users"></i>({room.guests}) Guest's</li>
                          </ul>
                        </div>
                        <div className="deluxe__two-item-content-bottom">
                          <Link className="simple-btn" href="#"><i className="far fa-chevron-right"></i>Read More</Link>
                          <p><i className="fas fa-star"></i><span>{room.rating}</span>2k</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>                
          </div>
        </div>
      </section>
      {/* Room Area End */}
    </div>
  );
};

export default RoomArea;
