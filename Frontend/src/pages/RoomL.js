import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Model from './modell/Model';
import bannerImage from '../assets/img/banner/page-banner-3.png';
import Category from '../Components/category';
import roomImage1 from '../assets/img/hotel/hotel-19.png';
import roomImage2 from '../assets/img/hotel/hotel-20.png';
import roomImage3 from '../assets/img/hotel/hotel-21.png';
import roomImage4 from '../assets/img/hotel/hotel-22.png';
import roomImage5 from '../assets/img/hotel/hotel-23.png';

const rooms = [
  {
    id: 1,
    name: 'Superior Room',
    description: 'Savvy travelers are looking for more than just the next destination on the map.',
    beds: 3,
    guests: 7,
    price: 700,
    rating: 2.9,
    image: roomImage1,
  },
  {
    id: 2,
    name: 'Junior Suite',
    description: 'Savvy travelers are looking for more than just the next destination on the map.',
    beds: 4,
    guests: 2,
    price: 700,
    rating: 3.9,
    image: roomImage2,
  },
  {
    id: 3,
    name: 'Double Room',
    description: 'Savvy travelers are looking for more than just the next destination on the map.',
    beds: 3,
    guests: 4,
    price: 800,
    rating: 4.9,
    image: roomImage3,
  },
  {
    id: 4,
    name: 'Small Suite',
    description: 'Savvy travelers are looking for more than just the next destination on the map.',
    beds: 2,
    guests: 3,
    price: 700,
    rating: 4.4,
    image: roomImage4,
  },
  {
    id: 5,
    name: 'Luxury Room',
    description: 'Savvy travelers are looking for more than just the next destination on the map.',
    beds: 3,
    guests: 6,
    price: 600,
    rating: 3.7,
    image: roomImage5,
  }
];

const RoomList = ({ onOpenModal }) => {
  const [ShowMdel, SetModel] = useState(false);

  const handleModel = () =>{
    SetModel(true);

    if (ShowMdel === true){
      SetModel(false)
    }else{
      SetModel(true)
    }
  }
  
  return (
    <div>
      {/* Page Banner */}
      <div className="page__banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="page__banner-title">
                <h1>Room List</h1>
                <div className="page__banner-title-menu">
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><span>-</span>Room List</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Room List */}
      <div className="room__list section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="all__sidebar">
                <Category />
              </div>
            </div>

            <div className="col-xl-9">
              {rooms.map(room => (
                <div key={room.id} className="room__list-item">
                  <div className="room__list-item-left">
                    <div className="room__list-item-image">
                      <img src={room.image} alt={room.name} />
                    </div>
                  </div>
                  <div className="room__list-item-right">
                    <div className="room__list-item-right-content">
                      <h4>{room.name}</h4>
                      <p>{room.description}</p>
                      <ul>
                        <li><i className="fal fa-bed-alt"></i>({room.beds}) beds</li>
                        <li><i className="fal fa-users"></i>({room.guests}) Guests</li>
                      </ul>
                    </div>
                    <div className="room__list-item-right-meta">
                      <div className="room__list-item-right-meta-top">
                        <span>R{room.price}/Night</span>
                        <p><i className="fas fa-star"></i><span>{room.rating}</span> 2k</p>
                      </div>
                      <button className="theme-btn"  onClick={handleModel}>Book<i className="fal fa-long-arrow-right"></i></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {ShowMdel && <Model />}
    </div>
  );
};

export default RoomList;
