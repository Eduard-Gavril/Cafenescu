import React from 'react';
import cafenescuLogo from '../svg/CAFENESCU.svg';

export default function Header() {
  return (
    <header className="header" id="header">
      <div className="header__border"></div>
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src={cafenescuLogo} alt="Cafenescu logo" style={{width: '400px', height: 'auto'}} />
        </a>

        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="ri-home-heart-fill"></i>
                <span>Home</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="ri-information-fill"></i>
                <span>About</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#steps" className="nav__link">
                <i className="ri-cup-fill"></i>
                <span>Menu</span>
              </a>
            </li>

            <li className="nav__item">
              <a href="#testimonial" className="nav__link">
                <i className="ri-chat-quote-fill"></i>
                <span>Testimonial</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
