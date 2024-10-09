import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './assets/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/all.css'; // Font Awesome CSS
import './assets/css/animate.css'; // Animate CSS
import './assets/css/nice-select.css'; // Nice Select CSS
import './assets/css/swiper-bundle.min.css'; // Swiper Bundle CSS
import './assets/css/magnific-popup.css'; // Magnific Popup CSS
import './assets/css/meanmenu.min.css'; // Mean Menu CSS
import './assets/sass/style.css'; // Custom CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Function to hide preloader
function hidePreloader() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
    preloader.style.transition = 'opacity 0.5s ease-out'; // Optional: smooth transition
  }
}

// Render the app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Hide preloader after React has been rendered
window.onload = hidePreloader;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
