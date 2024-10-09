import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import logo from './assets/img/logo.png';
import './App.css'; // Import your CSS
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact'
import About from './pages/About';
import RoomDetails from './pages/hide/RoomD';
import RoomList from './pages/RoomL';
import ModernRoomList from './pages/RoomM';
import RoomArea from './pages/hide/RoomS';
import ServicesDetails from './pages/Services';
import Model from './pages/modell/Model'
import ErrorPage from './pages/ErrorPage'

// room-style
function App() {

  useEffect(() => {
    // Ensure your jQuery code is executed after the component mounts
    const script = document.createElement('script');
    script.src = './custom.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script from the DOM when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Router>
      <div>
        <Header />       
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <-----------Pages-------> */}
            <Route path="/about" element={<About />} />
            <Route path="/services-details" element={<ServicesDetails />} />

            {/* Room */}
            <Route path="/room-details" element={<RoomDetails/>} />
            <Route path="/room-list" element={<RoomList/>} />
            <Route path="/room-modern" element={<ModernRoomList/>} />
            <Route path="/room-style" element={<RoomArea/>} />
            {/* Contact */}
            <Route path="/contact" element={<Contact />} />
            {/* Booking */}
            <Route path="/booking" element={<Model />} />
            

            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
