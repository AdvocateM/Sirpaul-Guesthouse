import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Model from './modell/Model';
import bannerImage from '../assets/img/banner/page-banner-3.png';
import Category from '../Components/category';
import notificationWithIcon from './../utils/notification';
import ApiService from './../utils/apiService';

const RoomList = () => {
  const [showModel, setModel] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [query, setQuery] = useState({ search: '', sort: 'asce', page: '1', rows: '10' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rooms, setRooms] = useState([]);

  // Fetch room data from API
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await ApiService.get(`/api/v1/all-rooms-list`);
        setRooms(response.result.data.rows);
      } catch (err) {
        setError(err.message);
        notificationWithIcon('error', 'Error fetching rooms', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [query]); // Re-fetch when query changes

  const handleModelToggle = (roomId) => {
    setSelectedRoomId(roomId);
    setModel(prev => !prev);
  };

  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 65) {
      return `${words.slice(0, 65).join(' ')}... Read more`;
    }
    return description;
  };

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
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>Error: {error}</p>
              ) : rooms.length === 0 ? (
                <p>No rooms available.</p>
              ) : (
                rooms.map(room => (
                  <div key={room.id} className="room__list-item">
                    <div className="room__list-item-left">
                      <div className="room__list-item-image">
                        <img src={room.room_images[0]?.url} alt={room.room_name} />
                      </div>
                    </div>
                    <div className="room__list-item-right">
                      <div className="room__list-item-right-content">
                        <h4>{room.room_name}</h4>
                        <p>{truncateDescription(room.room_description)}</p>
                        <ul>
                          <li><i className="fal fa-bed-alt"></i>({room.room_size}) beds</li>
                          <li><i className="fal fa-users"></i>({room.room_capacity}) Guests</li>
                        </ul>
                      </div>
                      <div className="room__list-item-right-meta">
                        <div className="room__list-item-right-meta-top">
                          <span>R{room.room_price}/Night</span>
                          <p><i className="fas fa-star"></i><span>{room.rating}</span> 2k</p>
                        </div>
                        <button className="theme-btn" onClick={() => handleModelToggle(room.room.id)}>
                          Book<i className="fal fa-long-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {showModel && <Model roomId={selectedRoomId} onClose={handleModelToggle} />}
    </div>
  );
};

// https://www.booking.com/Share-2sZEgG

export default RoomList;
