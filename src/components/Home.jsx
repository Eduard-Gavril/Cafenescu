import manSvg from '../svg/MAN.svg';

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <h3 className="home__subtitle">CALITATE EXCEPȚIONALĂ</h3>
          <h1 className="home__title" style={{fontFamily: "'Neonderthaw', cursive"}}>
            E timpul pentru o <br/>cafenea bună
          </h1>
          <p className="home__description">
            Fiecare bob de cafea selectat reflectă angajamentul nostru față de cultivatorii din Peru, care ne furnizează cele mai bune boabe pentru a le savura la tine acasă.
          </p>
          <a href="#" className="button">
            Începe <i className="ri-arrow-right-s-line"></i>
          </a>
        </div>
        <img src={manSvg} alt="home image" className="home__img" />
      </div>
    </section>
  );
}

export default Home;
