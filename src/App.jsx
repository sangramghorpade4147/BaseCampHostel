import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [formStatus, setFormStatus] = useState('');


  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 800, easing: 'ease-out-back', once: true });
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus('Thanks! We received your message and will contact you soon.');
    event.target.reset();
  };

  const facilityTiles = [
    'High-Speed WiFi',
    'CCTV Security',
    'Separate Mess Facility',
    'Laundry Facility',
    'Power Backup',
    'Study Area',
    'Clean Drinking Water',
    'Parking Facility',
    'Clean Washrooms',
  ];

  const testimonials = [
    {
      quote: 'Safe hostel for girls and peaceful environment.',
      name: 'Neha, KIT College Student',
    },
    {
      quote: 'Very close to KIT College and affordable pricing.',
      name: 'Pooja, First Year',
    },
    {
      quote: 'Mess is hygienic and tasty with home-style food.',
      name: 'Anjali, Second Year',
    },
  ];

  const serviceHighlights = [
    'Safe Girls Hostel',
    'Separate Mess Under Same Roof',
    'High-Speed WiFi',
    'CCTV Security',
    'Study-Friendly Environment',
    'Power Backup',
    'Parking Facility',
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=850',
    'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=850',
    'https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg?auto=compress&cs=tinysrgb&w=850',
    'https://images.pexels.com/photos/3975527/pexels-photo-3975527.jpeg?auto=compress&cs=tinysrgb&w=850',
    'https://images.pexels.com/photos/6961681/pexels-photo-6961681.jpeg?auto=compress&cs=tinysrgb&w=850',
    'https://images.pexels.com/photos/601160/pexels-photo-601160.jpeg?auto=compress&cs=tinysrgb&w=850',
  ];

  return (
    <div className="App">
      <header className="topbar" id="top">
        <div className="container nav-wrapper">
          <div className="brand">
            <span>BaseCamp Girls Hostel</span>
          </div>
          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#rooms">Rooms</a>
            <a href="#mess">Mess</a>
            <a href="#facilities">Facilities</a>
            <a href="#gallery">Gallery</a>
            <a href="#pricing">Pricing</a>
            <a href="#location">Location</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="contact-cta">
            <a className="cta-phone" href="tel:8380886951">📞 8380886951</a>
          </div>
        </div>
      </header>

      <section id="home" className="hero-section" data-aos="fade-up">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <h1>Welcome to BaseCamp Girls Hostel</h1>
          <p>Safe & Comfortable Living Near KIT College Kolhapur</p>
          <div className="hero-buttons">
            <a href="tel:8380886951" className="btn btn-primary">📞 Call Now</a>
            <a href="https://wa.me/918380886951" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">💬 WhatsApp Booking</a>
          </div>
          <div className="hero-tags">
            {serviceHighlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <main>
        <section id="about" className="section about" data-aos="fade-right">
          <div className="container section-grid">
            <div>
              <h2>About Us</h2>
              <p>
                BaseCamp Girls Hostel is located near KIT College in Gokul Shirgaon, Kolhapur.
                We provide a safe, hygienic, and comfortable environment for girls students.
                Our hostel offers clean rooms and a separate mess facility under the same roof,
                making student life convenient and stress-free.
              </p>
              <h3>Mission</h3>
              <p>
                To provide secure, affordable, and supportive hostel accommodation designed
                for academic success and wellbeing.
              </p>
              <h3>Why Choose BaseCamp</h3>
              <ul>
                <li>8 well-maintained triple-sharing rooms</li>
                <li>24x7 CCTV and security personnel</li>
                <li>Mess facility under same roof</li>
                <li>Study-friendly environment with power backup</li>
              </ul>
            </div>
            <div className="about-images">
              <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&h=480&q=80" alt="Hostel Building" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&h=480&q=80" alt="College Campus" loading="lazy" />
            </div>
          </div>
        </section>

        <section id="rooms" className="section rooms" data-aos="fade-left">
          <div className="container">
            <h2>Rooms</h2>
            <p>8 Triple Sharing Rooms at ₹2500 per head / month</p>
            <div className="room-grid">
              <article className="room-card" data-aos="zoom-in">
                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=380&q=80" alt="Triple Sharing Room" loading="lazy" />
                <div className="room-content">
                  <h3>Triple Sharing Room</h3>
                  <p className="price">₹2500 per head / month</p>
                  <ul>
                    <li>Fully Furnished Beds</li>
                    <li>Mattress Provided</li>
                    <li>Study Table</li>
                    <li>Storage Space</li>
                    <li>Ceiling Fan</li>
                    <li>Good Lighting</li>
                    <li>Clean Washroom Access</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="mess" className="section mess" data-aos="fade-right">
          <div className="container section-grid">
            <div className="mess-text">
              <h2>Mess Facility</h2>
              <p>
                Separate Mess area under the same roof. Hygienic home-style food for breakfast,
                lunch, and dinner with weekly menus.
              </p>
              <div className="menu-block">
                <h4>Sample Menu</h4>
                <div className="menu-grid">
                  <div>
                    <strong>Breakfast:</strong>
                    <p>Poha / Upma / Tea</p>
                  </div>
                  <div>
                    <strong>Lunch:</strong>
                    <p>Chapati, Rice, Dal, Sabji</p>
                  </div>
                  <div>
                    <strong>Dinner:</strong>
                    <p>Chapati, Rice, Curry</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mess-images">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=640&h=480&q=80" alt="Mess Hall" loading="lazy" />
              <img src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&h=480&q=80" alt="Home Style Food" loading="lazy" />
            </div>
          </div>
        </section>

        <section id="facilities" className="section facilities" data-aos="fade-left">
          <div className="container">
            <h2>Facilities</h2>
            <div className="facility-grid">
              {facilityTiles.map((facility) => (
                <div className="facility-item" key={facility} data-aos="flip-up">
                  <span>✔</span>
                  <p>{facility}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section gallery" data-aos="fade-up">
          <div className="container">
            <h2>Gallery</h2>
            <div className="gallery-grid">
              {galleryImages.map((url, idx) => (
                <a key={idx} href={url} target="_blank" rel="noreferrer" className="gallery-item">
                  <img src={url} alt={`Gallery ${idx + 1}`} loading="lazy" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section pricing" data-aos="fade-right">
          <div className="container pricing-grid">
            <div className="pricing-card" data-aos="zoom-in">
              <h2>Pricing</h2>
              <p className="pricing-title">Triple Sharing Room</p>
              <p className="pricing-value">₹2500 <span>/ per head / month</span></p>
              <p>Mess: Separate Charges (Available Under Same Roof)</p>
              <p className="pricing-highlight">Affordable Girls Hostel Near KIT College Kolhapur</p>
              <a className="btn btn-primary" href="tel:8380886951">Book Now</a>
            </div>
            <div className="pricing-cta" data-aos="fade-left">
              <h3>Only Limited Rooms Available</h3>
              <p>Book Your Stay Today!</p>
              <a className="btn btn-secondary" href="https://wa.me/918380886951" target="_blank" rel="noopener noreferrer">WhatsApp Booking</a>
            </div>
          </div>
        </section>

        <section id="location" className="section location" data-aos="fade-up">
          <div className="container section-grid">
            <div>
              <h2>Location</h2>
              <p>Near KIT College, Gokul Shirgaon, Kolhapur, Maharashtra</p>
              <ul>
                <li>Address: Near KIT College</li>
                <li>Area: Gokul Shirgaon</li>
                <li>City: Kolhapur</li>
              </ul>
              <p>Nearby: KIT College, local markets, transport stops.</p>
            </div>
            <div className="map-wrapper">
              <iframe
                title="BaseCamp Girls Hostel Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.2810864546584!2d74.28044521446928!3d16.7130104885888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc7c96cfec18f5b%3A0x1f8f3f5c9d83f4a5!2sKIT%20College%20Kolhapur!5e0!3m2!1sen!2sin!4v1700000000000"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section id="testimonials" className="section testimonials" data-aos="fade-right">
          <div className="container">
            <h2>Testimonials</h2>
            <div className="testi-slider">
              {testimonials.map((item, idx) => (
                <div className="testi-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 150}>
                  <p>"{item.quote}"</p>
                  <h4>{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact" data-aos="fade-left">
          <div className="container section-grid">
            <div>
              <h2>Contact Us</h2>
              <p>Phone: <a href="tel:8380886951">8380886951</a></p>
              <p>WhatsApp: <a href="https://wa.me/918380886951" target="_blank" rel="noreferrer">Chat Now</a></p>
              <div className="contact-actions">
                <a className="btn btn-primary" href="tel:8380886951">Call Now</a>
                <a className="btn btn-secondary" href="https://wa.me/918380886951" target="_blank" rel="noreferrer">WhatsApp</a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <label>
                Name
                <input type="text" name="name" required />
              </label>
              <label>
                Phone
                <input type="tel" name="phone" required />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" required />
              </label>
              <button type="submit" className="btn btn-primary">Send Message</button>
              {formStatus && <p className="form-status">{formStatus}</p>}
            </form>
          </div>
        </section>
      </main>

      <a className="whatsapp-float" href="https://wa.me/918380886951" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        💬
      </a>

      <footer className="footer" data-aos="fade-up">
        <div className="container footer-grid">
          <div>
            <h3>BaseCamp Girls Hostel</h3>
            <p>Safe, affordable girls hostel near KIT College Kolhapur.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <a href="#about">About</a>
            <a href="#rooms">Rooms</a>
            <a href="#mess">Mess</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h4>Contact</h4>
            <p>📞 8380886951</p>
            <p>Near KIT College, Gokul Shirgaon, Kolhapur</p>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 BaseCamp Girls Hostel Kolhapur. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
