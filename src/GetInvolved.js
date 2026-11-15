import React, { useState } from 'react';

const GetInvolved = ({ onAddProvider }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    phone: '',
    email: '',
    location: '',
    category: 'Haute Couture'
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Name validation: letters only
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!formData.name.trim() || !nameRegex.test(formData.name)) {
      setError('Error: Name must contain letters only (no numbers or symbols).');
      return;
    }

    // 2. Description validation
    if (!formData.description.trim()) {
      setError('Error: Please enter a description.');
      return;
    }

    // 3. Phone validation: exactly 8 digits
    const phoneRegex = /^\d{8}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('Error: Phone number must be exactly 8 digits.');
      return;
    }

    // 4. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Error: Please enter a valid email address.');
      return;
    }

    // 5. Location validation
    if (!formData.location.trim()) {
      setError('Error: Please enter a location.');
      return;
    }

    const newEntry = {
      id: Date.now(),
      name: formData.name.trim(),
      description: formData.description.trim(),
      phone: `+961 ${formData.phone}`,
      email: formData.email.trim(),
      location: formData.location.trim()
    };

    onAddProvider(formData.category, newEntry);

    setSuccess(`Successfully added to ${formData.category}! Check the page now.`);
    setFormData({
      name: '',
      description: '',
      phone: '',
      email: '',
      location: '',
      category: 'Haute Couture'
    });
  };

  return (
    <div 
      className="page-transition"
      style={{ 
        position: 'fixed', 
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url('/involve.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflowY: 'auto',
        padding: '100px 20px 40px 20px',
        boxSizing: 'border-box',
        zIndex: 10
      }}
    >
      {/* Dark Overlay for luxury contrast */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        zIndex: 1,
        pointerEvents: 'none'
      }}></div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '650px',  margin: '0 auto' }}>
        <header className="stagger-item" style={{ textAlign: 'center', marginBottom: '25px', animationDelay: '0.2s' }}>
          <p style={{ color: '#bc7006', letterSpacing: '3px', fontWeight: 'bold', fontSize: '0.9rem' }}>JOIN OUR FAMILY</p>
          <h1 style={{ fontSize: '2.2rem', color: '#fff', margin: '5px 0' }}>BECOME A PARTNER OF THEIR "FARHA"</h1>
        </header>

        <form 
          onSubmit={handleSubmit} 
          className="stagger-item"
          style={{ 
            backgroundColor: 'rgba(20, 20, 20, 0.88)', 
            padding: '25px 30px', 
            borderRadius: '12px', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.8)', 
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            animationDelay: '0.4s'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            
            {/* Name */}
            <div>
              <label style={{ display: 'block', color: '#655a07', fontSize: '0.85rem', marginBottom: '5px', fontWeight: 'bold' }}>Name (Letters Only)</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="e.g., Royal Palace" 
                style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '6px', color: '#fff', outline: 'none', boxSizing: 'border-box' }} 
              />
            </div>

            {/* Description */}
            <div>
              <label style={{ display: 'block', color: '#655a07', fontSize: '0.85rem', marginBottom: '5px', fontWeight: 'bold' }}>Description</label>
              <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                placeholder="Brief description of your service..." 
                rows="2"
                style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '6px', color: '#fff', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} 
              />
            </div>

            {/* Phone */}
            <div>
              <label style={{ display: 'block', color: '#655a07', fontSize: '0.85rem', marginBottom: '5px', fontWeight: 'bold' }}>Phone (8 Digits)</label>
              <input 
                type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="e.g., 70123456" 
                style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '6px', color: '#fff', outline: 'none', boxSizing: 'border-box' }} 
              />
            </div>

            {/* Email */}
            <div>
              <label style={{ display: 'block', color: '#655a07', fontSize: '0.85rem', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="contact@example.com" 
                style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '6px', color: '#fff', outline: 'none', boxSizing: 'border-box' }} 
              />
            </div>

            {/* Location */}
            <div>
              <label style={{ display: 'block', color: '#655a07', fontSize: '0.85rem', marginBottom: '5px', fontWeight: 'bold' }}>Location</label>
              <input 
                type="text" 
                name="location" 
                value={formData.location} 
                onChange={handleChange} 
                placeholder="e.g., Tripoli, Lebanon" 
                style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '6px', color: '#fff', outline: 'none', boxSizing: 'border-box' }} 
              />
            </div>

            {/* Category Selection */}
            <div>
              <label style={{ display: 'block', color: '#655a07', fontSize: '0.85rem', marginBottom: '5px', fontWeight: 'bold' }}>Category</label>
              <select 
                name="category" 
                value={formData.category} 
                onChange={handleChange} 
                style={{ width: '100%', padding: '10px', background: '#1a1a1a', border: '1px solid rgba(212,175,55,0.3)', borderRadius: '6px', color: '#fff', outline: 'none', cursor: 'pointer', boxSizing: 'border-box' }}
              >
                <option value="Haute Couture">Haute Couture</option>
                <option value="Makeup & Hair">Makeup & Hair</option>
                <option value="Venues">Venues</option>
              </select>
            </div>

          </div>

          {/* Error / Success Messages */}
          {error && (
            <div style={{ backgroundColor: 'rgba(220, 53, 69, 0.2)', border: '1px solid #dc3545', color: '#ff6b6b', padding: '8px', borderRadius: '6px', marginTop: '15px', textAlign: 'center', fontSize: '0.9rem' }}>
              {error}
            </div>
          )}
          {success && (
            <div style={{ backgroundColor: 'rgba(40, 167, 69, 0.2)', border: '1px solid #28a745', color: '#51cf66', padding: '8px', borderRadius: '6px', marginTop: '15px', textAlign: 'center', fontSize: '0.9rem' }}>
              {success}
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button 
              type="submit" 
              style={{
                backgroundColor: '#d4af37',
                color: '#111',
                fontWeight: 'bold',
                padding: '10px 30px',
                border: 'none',
                borderRadius: '30px',
                fontSize: '0.95rem',
                letterSpacing: '1.5px',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}
            >
              Submit & Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInvolved;