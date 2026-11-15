import React from 'react';
import './Venues.css';

const makeupList = [
  {
    id: 1,
    name: "Layal Farran",
    description: "Renowned bridal makeup artist offering exquisite, high-end looks tailored for your most special day.",
    phone: "+961 3 111 222",
    email: "layal.farran@farhetna.com",
    location: "Tripoli, Lebanon"
  },
  {
    id: 2,
    name: "Abouda Diab",
    description: "Expert hairstyling and modern bridal hair architecture ensuring a stunning and unforgettable appearance.",
    phone: "+961 70 333 444",
    email: "abouda.diab@farhetna.com",
    location: "Tripoli, Lebanon"
  },
  {
    id: 3,
    name: "Brush By Mirvat",
    description: "Specialized in luxury bridal glow, professional makeup, and sophisticated styling for weddings.",
    phone: "+961 71 555 666",
    email: "mirvat@farhetna.com",
    location: "Tripoli, Lebanon"
  }
];

const Makeup = ({ extraMakeup = [] }) => {
  const allMakeup = [...makeupList, ...extraMakeup];

  return (
    <div 
      className="page-transition"
      style={{ 
        position: 'fixed', 
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url('/makeup.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflowY: 'auto',
        padding: '120px 40px 40px 40px',
        boxSizing: 'border-box',
        zIndex: 10
      }}
    >
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

      <div style={{ position: 'relative', zIndex: 2 }}>
        <header 
          className="stagger-item" 
          style={{ textAlign: 'center', marginBottom: '50px', animationDelay: '0.2s' }}
        >
          <p style={{ color: '#b69b68', letterSpacing: '3px', fontWeight: 'bold' }}>EXQUISITE GLAMOUR</p>
          <h1 style={{ fontSize: '2.5rem', color: '#fff', margin: '10px 0' }}>MAKEUP & HAIRSTYLISTS</h1>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          {allMakeup.map((artist, index) => (
            <div 
              key={artist.id || index} 
              className="stagger-item"
              style={{ 
                backgroundColor: 'rgba(52, 51, 51, 0.85)', 
                padding: '25px', 
                borderRadius: '10px', 
                boxShadow: '0 8px 25px rgba(0,0,0,0.6)', 
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(70, 64, 45, 0.2)',
                animationDelay: `${0.4 + index * 0.25}s` 
              }}
            >
              <h3 style={{ color: '#b69b68', marginBottom: '12px', fontSize: '1.3rem' }}>{artist.name}</h3>
              <p style={{ color: '#ddd', fontSize: '0.95rem', marginBottom: '18px', lineHeight: '1.5' }}>{artist.description}</p>
              <div style={{ fontSize: '0.85rem', color: '#bbb', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px' }}>
                <p style={{ margin: '5px 0' }}>
                  <span style={{ color: '#d4af37' }}>📞</span> {artist.phone}
                </p>
                <p style={{ margin: '5px 0' }}>
                  <span style={{ color: '#d4af37' }}>📧</span> {artist.email}
                </p>
                <p style={{ margin: '5px 0' }}>
                  <span style={{ color: '#d4af37' }}>📍</span> {artist.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Makeup;