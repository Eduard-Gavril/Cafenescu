import React, { useState, useEffect } from 'react';
import cafenescuLogo from '../svg/CAFENESCU.svg';
import manLogo from '../svg/MAN.svg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'steps', 'testimonial'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header" id="header">
      <div className="header__border"></div>
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src={cafenescuLogo} alt="Cafenescu logo" style={{width: '400px', height: 'auto'}} />
        </a>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav__menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav__menu-header">
            <img src={manLogo} alt="Man logo" className="nav__menu-logo" />
          </div>

          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className={`nav__link ${activeSection === 'home' ? 'active-link' : ''}`} onClick={() => scrollToSection('home')}>
                <i className="ri-home-heart-fill"></i>
                <span>Home</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className={`nav__link ${activeSection === 'about' ? 'active-link' : ''}`} onClick={() => scrollToSection('about')}>
                <i className="ri-information-fill"></i>
                <span>About</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#steps" className={`nav__link ${activeSection === 'steps' ? 'active-link' : ''}`} onClick={() => scrollToSection('steps')}>
                <i className="ri-cup-fill"></i>
                <span>Menu</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#testimonial" className={`nav__link ${activeSection === 'testimonial' ? 'active-link' : ''}`} onClick={() => scrollToSection('testimonial')}>
                <i className="ri-chat-quote-fill"></i>
                <span>Testimonial</span>
              </a>
            </li>
          </ul>

          <div className="nav__social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="nav__social-link">
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="nav__social-link">
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
        </div>

        {isMenuOpen && <div className="nav__overlay" onClick={() => setIsMenuOpen(false)}></div>}
      </nav>
    </header>
  );
}
