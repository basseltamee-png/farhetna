import React, { useState } from 'react';
import './Home.css'; // استدعينا تنسيقاتك الأصلية للشريط والقائمة
import Home from './Home';
import Venues from './Venues';
import Makeup from './Makeup';
import Couture from './Couture';
import GetInvolved from './GetInvolved';
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [customProviders, setCustomProviders] = useState(() => {
  const saved = localStorage.getItem('farhetna_custom_providers');
  return saved ? JSON.parse(saved) : { venues: [], makeup: [], couture: [] };
});

const handleAddProvider = (category, newItem) => {
  setCustomProviders((prev) => {
    const updated = { ...prev };
    
    // استخدام .toLowerCase() لضمان مطابقة الفئة بغض النظر عن الحروف الكبيرة أو الصغيرة
    const cat = category.toLowerCase();
    
    if (cat.includes('venue')) {
      updated.venues = [...prev.venues, newItem];
    } else if (cat.includes('makeup') || cat.includes('hair')) {
      updated.makeup = [...prev.makeup, newItem];
    } else if (cat.includes('couture') || cat.includes('haute')) {
      updated.couture = [...prev.couture, newItem];
    }
    
    localStorage.setItem('farhetna_custom_providers', JSON.stringify(updated));
    return updated;
  });
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
          <li>
  <a href="#!" onClick={(e) => { e.preventDefault(); toggleMenu(); setCurrentPage('get-involved'); }}>
    Get Involved
  </a>
</li>
        
        </ul>
      </div>

      {isMenuOpen && <div className="overlay" onClick={toggleMenu} style={{ zIndex: 9995 }}></div>}

      {/* عرض الصفحة المطلوبة */}
      {currentPage === 'home' && <Home />}
{currentPage === 'venues' && <Venues extraVenues={customProviders.venues} />}
{currentPage === 'makeup' && <Makeup extraMakeup={customProviders.makeup} />}
{currentPage === 'couture' && <Couture extraCouture={customProviders.couture} />}
{currentPage === 'get-involved' && <GetInvolved onAddProvider={handleAddProvider} />}
    </div>
  );

};
export default App;