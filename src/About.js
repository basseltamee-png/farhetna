import React, { useState } from 'react';
import './About.css';

const storySteps = [
  {
    title: "THE SPARK",
    subtitle: "A Wish Said in Frustration",
    text: "FARHETNA IS AN IDEA, IT COME FROM A COUPLE WHO DID SUFFER BY PLANNING TO THEIR ENGAGEMENT CEREMONY, AND THE BRIDE JUST SAID \"WISH THERE'S SOMETHING GATHERS EVERYTHING I WANT\" AND SADLY THE GROOM SAID \"HADER\"",
    year: "THE BEGINNING"
  },
  {
    title: "THE VISION",
    subtitle: "Everything At One Place",
    text: "We realized that planning your happiest day shouldn't be stressful. We built Farhetna to connect brides and grooms with the finest venues, boutiques, and artists seamlessly.",
    year: "OUR MISSION"
  },
  {
    title: "YOUR FARHA",
    subtitle: "Crafting Timeless Memories",
    text: "Today, Farhetna stands as your premier destination to bring your dream wedding to life with luxury, clarity, and perfection.",
    year: "TODAY"
  }
];

function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  const changeSlide = (newIndex) => {
    setCurrentSlide(newIndex);
    setFadeKey(prev => prev + 1);
  };

  const nextSlide = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.nativeEvent) e.nativeEvent.stopImmediatePropagation();
    }
    const nextIndex = currentSlide === storySteps.length - 1 ? 0 : currentSlide + 1;
    changeSlide(nextIndex);
  };

  const prevSlide = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
      if (e.nativeEvent) e.nativeEvent.stopImmediatePropagation();
    }
    const prevIndex = currentSlide === 0 ? storySteps.length - 1 : currentSlide - 1;
    changeSlide(prevIndex);
  };

  return (
    <section className="about-company-section" id="about-section">
      <div className="about-container">
        
        <div className="story-carousel" key={fadeKey}>
          <span className="story-tag">{storySteps[currentSlide].year}</span>
          <h2 className="section-title">{storySteps[currentSlide].title}</h2>
          <div className="title-underline"></div>
          
          <h4 className="story-subtitle">{storySteps[currentSlide].subtitle}</h4>
          <p className="section-desc">{storySteps[currentSlide].text}</p>

          <div className="carousel-controls">
            {/* استخدام ترويسة onMouseDown بالإضافة لـ onClick لمنع أي حركة مسبقة */}
            <button 
              type="button" 
              className="carousel-arrow" 
              onClick={prevSlide}
              onMouseDown={(e) => e.preventDefault()}
            >
              &#8592;
            </button>

            <span className="carousel-dots">
              {storySteps.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={(e) => { 
                    e.preventDefault(); 
                    e.stopPropagation(); 
                    changeSlide(index); 
                  }}
                />
              ))}
            </span>

            <button 
              type="button" 
              className="carousel-arrow" 
              onClick={nextSlide}
              onMouseDown={(e) => e.preventDefault()}
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="contact-content">
          <h3 className="contact-title">Contact Us</h3>
          <div className="contact-details">
            <p><span>Phone:</span> 81260084</p>
            <p><span>Email:</span> info@farhetna.com</p>
            <p><span>Location:</span> Tripoli-Lebanon</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;