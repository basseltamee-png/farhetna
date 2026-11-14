import React, { useState } from 'react';
import './Home.css'; // استدعينا تنسيقاتك الأصلية للشريط والقائمة
import Home from './Home';
import Venues from './Venues';
import Makeup from './Makeup';
import Couture from './Couture';
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* الشريط العلوي الأصلي ثابت بكل الصفحات */}
      <header className="luxury-navbar" style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999 }}>
        <div className="nav-left">
          <button className="menu-btn" aria-label="Menu" onClick={toggleMenu}>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className="nav-center">
          <span 
            className="brand-logo" 
            onClick={() => setCurrentPage('home')} 
            style={{ cursor: 'pointer' }}
          >
            FARHETNA
          </span>
        </div>

        <div className="nav-right"></div>
      </header>

      {/* القائمة الجانبية الأصلية ثابتة بكل الصفحات */}
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`} style={{ zIndex: 10000 }}>
        <button className="close-btn" onClick={toggleMenu}>&times;</button>
        <ul className="menu-links">
          <li>
            <a href="#!" onClick={(e) => { e.preventDefault(); toggleMenu(); setCurrentPage('home'); }}>
              Home
            </a>
          </li>
          <li>
            <a href="#!" onClick={(e) => { e.preventDefault(); toggleMenu(); setCurrentPage('venues'); }}>
              Venues
            </a>
          </li>
          <li>
            <a href="#!" onClick={(e) => { e.preventDefault(); toggleMenu(); setCurrentPage('makeup'); }}>
              Makeup & Hairstylists
            </a>
          </li>
          <li>
           <a href="#!" onClick={(e) => { e.preventDefault(); toggleMenu(); setCurrentPage('couture'); }}>
              Couture Houses
            </a>
          </li>
        
        </ul>
      </div>

      {isMenuOpen && <div className="overlay" onClick={toggleMenu} style={{ zIndex: 9995 }}></div>}

      {/* عرض الصفحة المطلوبة */}
      {currentPage === 'home' && <Home />}
      {currentPage === 'venues' && <Venues />}
       {currentPage === 'makeup' && <Makeup />}
        {currentPage === 'couture' && <Couture />}
    </div>
  );
}

export default App;