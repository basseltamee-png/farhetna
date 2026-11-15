import React from 'react';
import './Venues.css';

const venuesList = [
  {
    id: 1,
    name: "Crystal Ballroom",
    description: "A luxurious wedding hall with massive crystal chandeliers and majestic royal architecture.",
    phone: "+961 3 123 456",
    email: "crystal@farhetna.com",
    location: "Tripoli - Qalamoun, Lebanon"
  },
  {
    id: 2,
    name: "Etoile De Mere",
    description: "An enchanting outdoor green landscape perfect for romantic evening weddings and parties.",
    phone: "+961 70 987 654",
    email: "Etoial@farhetna.com",
    location: "Tripoli - Mina, Lebanon"
  },
  {
    id: 3,
    name: "Dar Al-Amar",
    description: "A breathtaking seaside venue providing stunning open views and waves background.",
    phone: "+961 71 456 789",
    email: "daralamar@farhetna.com",
    location: " Tripoli - Dam & farez, Lebanon"
  }
];

const Venues = ({ extraVenues = [] }) => {
  const allVenues = [...venuesList, ...extraVenues]; // (أو حسب اسم المصفوفة بملفك)
  // ... وبداخل الـ return استبدل المصفوفة القديمة بـ allVenues.map
  return (
    <div 
      className="page-transition"
      style={{ 
        position: 'fixed', 
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url('/venues.jpeg')`, 
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
          style={{ textAlign: 'center', marginBottom: '50px', animationDelay: '0.1s' }}
        >
          <p style={{ color: '#fdfdfc', letterSpacing: '3px', fontWeight: 'bold' }}>EVERYTHING AT ONE PLACE</p>
          <h1 style={{ fontSize: '2.5rem', color: '#eda509', margin: '10px 0' }}>VENUES</h1>
        </header>

        {/* الكروت تظهر بالتدريج واحد تلو الآخر */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          {allVenues.map((venue, index) => (
            <div 
              key={venue.id} 
              className="stagger-item"
              style={{ 
                backgroundColor: 'rgba(25, 25, 25, 0.85)', 
                padding: '25px', 
                borderRadius: '10px', 
                boxShadow: '0 8px 25px rgba(0,0,0,0.6)', 
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                // تأخير ظهور كل كرت بمقدار 0.25 ثانية عن الذي قبله
                animationDelay: `${0.8 + index * 0.55}s` 
              }}
            >
              <h3 style={{ color: '#0d470b', marginBottom: '12px', fontSize: '1.3rem' }}>{venue.name}</h3>
              <p style={{ color: '#ddd', fontSize: '0.95rem', marginBottom: '18px', lineHeight: '1.5' }}>{venue.description}</p>
              <div style={{ fontSize: '0.85rem', color: '#bbb', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '12px' }}>
                <p style={{ margin: '5px 0' }}>📞 {venue.phone}</p>
                <p style={{ margin: '5px 0' }}>📧 {venue.email}</p>
                <p style={{ margin: '5px 0' }}>📍 {venue.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Venues;