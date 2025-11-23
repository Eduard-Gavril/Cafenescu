import cafenescuLogo from '../svg/CAFENESCU.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div className="footer__data grid">
            <div>
              <a href="#" className="footer__logo">
                <img src={cafenescuLogo} alt="Cafenescu logo" style={{width: '250px', height: 'auto'}} />
              </a>

              <h3 className="footer__title">Abonă-te la newsletter</h3>
            </div>

            <form action="" className="footer__form grid">
              <input type="email" placeholder="Adresa de e-mail" className="footer__input" />

              <button className="button footer__button" type="submit"> 
                Abonează-te <i className="ri-arrow-right-s-line"></i>
              </button>

              <p className="footer__description">
                Ne pasă de datele tale. Citește <a href="#" className="footer__privacy">Politica de confidențialitate</a>
              </p>
            </form>
          </div>

          <div className="footer__content grid">
            <div className="footer__social">
              <a href="https://www.facebook.com/cafenescu" target="_blank" className="footer__social-link" rel="noopener noreferrer">
                <i className="ri-facebook-fill"></i>
              </a>

              <a href="https://www.instagram.com/cafenescu/" target="_blank" className="footer__social-link" rel="noopener noreferrer">
                <i className="ri-instagram-fill"></i>
              </a>
            </div> 

            <span className="footer__copy">
              Copyright &#169; 2025 Toate drepturile rezervate | <a href="https://veni-vidi-edi.netlify.app/">Veni Vidi Edi</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
