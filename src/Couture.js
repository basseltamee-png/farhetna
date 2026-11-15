import React from 'react';
import './Venues.css';

const coutureList = [
  {
    id: 1,
    name: "Zeina Kerkatly",
    description: "Haute couture bridal gowns crafted with intricate hand-embroidery and timeless elegance for a royal look.",
    phone: "+961 3 444 555",
    email: "zeina.kerkatly@farhetna.com",
    location: "Tripoli, Lebanon"
  },
  {
    id: 2,
    name: "She Ray",
    description: "Modern, bespoke wedding dresses featuring luxurious fabrics and contemporary silhouettes tailored to perfection.",
    phone: "+961 70 666 777",
    email: "sheray@farhetna.com",
    location: "Beirut, Lebanon"
  },
  {
    id: 3,
    name: "Dress by Loubna",
    description: "Exclusive bridal collections blending classic romance with refined details to make every bride shine.",
    phone: "+961 71 888 999",
    email: "loubna@farhetna.com",
    location: "Tripoli, Lebanon"
  }
];

const Couture = ({ extraCouture = [] }) => {
  const allCouture = [...coutureList, ...extraCouture];
  // ... وبداخل الـ return استبدل coutureList.map بـ allCouture.map
  return (
    <div 
      className="page-transition"
      style={{ 
        position: 'fixed', 
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url('/haute couture.jpeg')`, // فيك تغير مسار الصورة هون إذا عندك صورة مخصصة للفساتين
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflowY: 'auto',
        padding: '120px 40px 40px 40px',
        boxSizing: 'border-box',
        zIndex: 10
      }}
    >
      {/* طبقة التعتيم الخفيفة */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        zIndex: 1,
        pointerEvents: 'none'
      }}></div>

      {/* المحتوى */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* العنوان يظهر أولاً */}
        <header 
          className="stagger-item" 
          style={{ textAlign: 'center', marginBottom: '50px', animationDelay: '0.2s' }}
        >
          <p style={{ color: '#d6836c', letterSpacing: '3px', fontWeight: 'bold' }}>TIMELESS ELEGANCE</p>
          <h1 style={{ fontSize: '2.5rem', color: '#fff', margin: '10px 0' }}>COUTURE HOUSES</h1>
        </header>

        {/* الكروت الثلاثة جنباً إلى جنب بالتدريج */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          {coutureList.map((house, index) => (
            <div 
              key={house.id} 
              className="stagger-item"
              style={{ 
                backgroundColor: 'rgba(25, 25, 25, 0.85)', 
                padding: '25px', 
                borderRadius: '10px', 
                boxShadow: '0 8px 25px rgba(0,0,0,0.6)', 
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                animationDelay: `${0.4 + index * 0.25}s` 
              }}
            >
              <h3 style={{ color: '#d6836c', marginBottom: '12px', fontSize: '1.3rem' }}>{house.name}</h3>
              <p style={{ color: '#ddd', fontSize: '0.95rem', marginBottom: '18px', lineHeight: '1.5' }}>{house.description}</p>
              <div style={{ fontSize: '0.85rem', color: '#bbb', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px' }}>
                <p style={{ margin: '5px 0' }}>
                  <span style={{ color: '#d4af37' }}>📞</span> {house.phone}
                </p>
                <p style={{ margin: '5px 0' }}>
                  <span style={{ color: '#d4af37' }}>📧</span> {house.email}
                </p>
                <p style={{ margin: '5px 0' }}>
                  <span style={{ color: '#d4af37' }}>📍</span> {house.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Couture;