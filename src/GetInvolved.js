import React, { useState } from 'react';

const GetInvolved = ({ onAddProvider }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    phone: '',
    email: '',
    location: '',
    category: 'Haute Couture' // الخيار الافتراضي
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

    // 1. التحقق من الاسم: حروف ومسافات فقط
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!formData.name.trim() || !nameRegex.test(formData.name)) {
      setError('Error: Name must contain letters only (no numbers or symbols).');
      return;
    }

    // 2. التحقق من الوصف
    if (!formData.description.trim()) {
      setError('Error: Please enter a description.');
      return;
    }

    // 3. التحقق من رقم الهاتف: 8 أرقام بالضبط (لا أقل ولا أكثر)
    const phoneRegex = /^\d{8}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('Error: Phone number must be exactly 8 digits.');
      return;
    }

    // 4. التحقق من البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Error: Please enter a valid email address.');
      return;
    }

    // 5. التحقق من الموقع
    if (!formData.location.trim()) {
      setError('Error: Please enter a location.');
      return;
    }

    // تجهيز الكرت الجديد بنفس تنسيق الكروت الموجودة
    const newEntry = {
      id: Date.now(),
      name: formData.name.trim(),
      description: formData.description.trim(),
      phone: `+961 ${formData.phone}`,
      email: formData.email.trim(),
      location: formData.location.trim()
    };

    // إرسال البيانات للصفحة المختارة
    onAddProvider(formData.category, newEntry);

    setSuccess(`Successfully added to ${formData.category}! Check the page now.`);
    // تفريغ الخانات بعد الإضافة
    setFormData({
      name: '',
      description: '',
      phone: '',
      email: '',
      location: '',
      category: 'Haute Couture'
    });
  };

  // تنسيق موحد لحقول الإدخال داخل الجدول
  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(212, 175, 55, 0.35)',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '0.95rem',
    boxSizing: 'border-box',
    outline: 'none'
  };

  const labelCellStyle = {
    padding: '14px 18px',
    color: '#d4af37',
    fontWeight: 'bold',
    width: '32%',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    textAlign: 'left'
  };

  const inputCellStyle = {
    padding: '14px 18px',
    borderBottom: '1px solid rgba(255,255,255,0.08)'
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
        backgroundImage: `url('/venues.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflowY: 'auto',
        padding: '120px 20px 40px 20px',
        boxSizing: 'border-box',
        zIndex: 10
      }}
    >
      {/* طبقة التعتيم */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        zIndex: 1,
        pointerEvents: 'none'
      }}></div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '750px', margin: '0 auto' }}>
        <header className="stagger-item" style={{ textAlign: 'center', marginBottom: '35px', animationDelay: '0.2s' }}>
          <p style={{ color: '#d4af37', letterSpacing: '3px', fontWeight: 'bold' }}>JOIN OUR NETWORK</p>
          <h1 style={{ fontSize: '2.4rem', color: '#fff', margin: '10px 0' }}>GET INVOLVED</h1>
        </header>

        <form 
          onSubmit={handleSubmit} 
          className="stagger-item"
          style={{ 
            backgroundColor: 'rgba(20, 20, 20, 0.88)', 
            padding: '30px', 
            borderRadius: '12px', 
            boxShadow: '0 8px 30px rgba(0,0,0,0.7)', 
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            animationDelay: '0.4s'
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
            <tbody>
              <tr>
                <td style={labelCellStyle}>Name (Letters Only)</td>
                <td style={inputCellStyle}>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="e.g., Royal Palace" 
                    style={inputStyle} 
                  />
                </td>
              </tr>
              <tr>
                <td style={labelCellStyle}>Description</td>
                <td style={inputCellStyle}>
                  <textarea 
                    name="description" 
                    value={formData.description} 
                    onChange={handleChange} 
                    placeholder="Brief description of your service..." 
                    rows="3"
                    style={{ ...inputStyle, resize: 'vertical' }} 
                  />
                </td>
              </tr>
              <tr>
                <td style={labelCellStyle}>Phone (8 Digits)</td>
                <td style={inputCellStyle}>
                  <input 
                    type="text" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="e.g., 70123456" 
                    style={inputStyle} 
                  />
                </td>
              </tr>
              <tr>
                <td style={labelCellStyle}>Email</td>
                <td style={inputCellStyle}>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="contact@example.com" 
                    style={inputStyle} 
                  />
                </td>
              </tr>
              <tr>
                <td style={labelCellStyle}>Location</td>
                <td style={inputCellStyle}>
                  <input 
                    type="text" 
                    name="location" 
                    value={formData.location} 
                    onChange={handleChange} 
                    placeholder="e.g., Tripoli, Lebanon" 
                    style={inputStyle} 
                  />
                </td>
              </tr>
              <tr>
                <td style={{ ...labelCellStyle, borderBottom: 'none' }}>Category</td>
                <td style={{ ...inputCellStyle, borderBottom: 'none' }}>
                  <select 
                    name="category" 
                    value={formData.category} 
                    onChange={handleChange} 
                    style={{ ...inputStyle, backgroundColor: '#1a1a1a', cursor: 'pointer' }}
                  >
                    <option value="Haute Couture">Couture Houses</option>
                    <option value="Makeup & Hair">Makeup & Hairstylists</option>
                    <option value="Venues">Venues</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          {/* رسائل الخطأ أو النجاح */}
          {error && (
            <div style={{ backgroundColor: 'rgba(220, 53, 69, 0.2)', border: '1px solid #dc3545', color: '#ff6b6b', padding: '10px', borderRadius: '6px', marginBottom: '15px', textAlign: 'center' }}>
              {error}
            </div>
          )}
          {success && (
            <div style={{ backgroundColor: 'rgba(40, 167, 69, 0.2)', border: '1px solid #28a745', color: '#51cf66', padding: '10px', borderRadius: '6px', marginBottom: '15px', textAlign: 'center' }}>
              {success}
            </div>
          )}

          <div style={{ textAlign: 'center' }}>
            <button 
              type="submit" 
              style={{
                backgroundColor: '#d4af37',
                color: '#111',
                fontWeight: 'bold',
                padding: '12px 35px',
                border: 'none',
                borderRadius: '30px',
                fontSize: '1rem',
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