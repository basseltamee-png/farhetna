import React, { useEffect } from 'react';
import './Home.css';
import About from './About';

function Home() {
  // إعادة التمرير إلى أعلى الصفحة فور فتح الموقع
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'automatic';
    }
  }, []);

  const scrollToAbout = () => {
    const section = document.getElementById('about-section');
    if (section) {
      const targetPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1800; // مدة الحركة بالملي ثانية (1.8 ثانية لنزول بطيء وفاخر)
      let start = null;

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const time = Math.min(progress / duration, 1);
        
        // معادلة التباطؤ والتسارع السلس (Ease-In-Out Quint)
        const ease = time < 0.5 
          ? 16 * Math.pow(time, 5) 
          : 1 - Math.pow(-2 * time + 2, 5) / 2;

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      }

      window.requestAnimationFrame(step);
    }
  };

  return (
    // أضفنا class لحركة الـ Fade الخفيفة عند الدخول للصفحة
    <div className="luxury-hero-container page-transition">
      <div className='hero-section'>
        
        {/* ملاحظة: النافبار والـ Sidebar صاروا ثابتين بالـ App.js، فما في داعي لنكررهم هون */}

        {/* Hero Background */}
        <div className="motion-bg-wrapper">
          <img src="/home.png" alt="Luxury Wedding" className="motion-media" />
          <div className="dark-overlay"></div>
        </div>

        {/* Hero Content - العناصر تظهر بالتدريج (Staggered Animation) */}
        <div className="hero-content-overlay">
          <span 
            className="hero-subtitle stagger-item" 
            style={{ animationDelay: '0.2s' }}
          >
            EVERYTHING AT ONE PLACE
          </span>
          
          <h1 
            className="hero-main-title stagger-item" 
            style={{ animationDelay: '0.6s' }}
          >
            Your Perfect Way <br /> <i>To Plan Your Farha</i>
          </h1>
          
          <button 
            className="hero-action-btn stagger-item" 
            onClick={scrollToAbout}
            style={{ animationDelay: '0.6s' }}
          >
            Who Is Farhetna
          </button>
        </div>

      </div> 
      
      <About />
    </div>
  );
}

export default Home;