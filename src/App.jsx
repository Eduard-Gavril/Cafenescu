import './style_AM/index.css'; // keep your app styles here
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />

      {/* MAIN */}
      <main className="main">

        {/* HOME SECTION */}
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div className="home__data">
              <h3 className="home__subtitle">CALITATE EXCEPȚIONALĂ</h3>
              <h1 className="home__title">
                E timpul pentru o <br/>cafenea bună
                {/* <img src="../CSS/scr/freeUSE/home-coffee-title.png" alt="home image" /> */}
              </h1>
              <p className="home__description">
                Fiecare bob de cafea selectat reflectă angajamentul nostru față de cultivatorii din Peru, care ne furnizează cele mai bune boabe pentru a le savura la tine acasă.
              </p>
              <a href="#" className="button">
                Începe <i className="ri-arrow-right-s-line"></i>
              </a>
            </div>
            <img src="../CSS/scr/freeUSE/home-coffee.png" alt="home image" className="home__img" />
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section className="products">
          <div className="products__bg section">
            <div className="products__container container grid">
              <div className="products__data">
                <a href="#about" className="products__button">
                  Descoperă <i className="ri-arrow-down-s-line"></i>
                </a>
                <p className="products__description">
                  Ne străduim să construim parteneriate strânse cu fermierii din întreaga lume pentru a oferi cafea responsabilă, gustoasă și trasabilă — bazată pe încredere și respect. În cafeneaua noastră găsești și produse de patiserie proaspete: brioșe, croissante și snack-uri.
                </p>
              </div>
              <div className="products__content">
                <article className="products__card">
                  <img src="assets/img/product-coffee-1.png" alt="products image" className="products__img" />
                  <h3 className="products__name">Cafea Clasică</h3>
                  <span className="products__price">17,90$</span>
                </article>
                <article className="products__card">
                  <img src="assets/img/product-coffee-2.png" alt="products image" className="products__img" />
                  <h3 className="products__name">Espresso</h3>
                  <span className="products__price">24,90$</span>
                </article>
                <article className="products__card">
                  <img src="assets/img/product-coffee-3.png" alt="products image" className="products__img" />
                  <h3 className="products__name">Cafea Intensă</h3>
                  <span className="products__price">32,90$</span>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="about" id="about">
          <div className="about__bg section">
            <div className="about__container container grid">
              <div className="about__data">
                <h2 className="section__title">Istoria noastră</h2>
                <p className="about__description">
                  La Cafenescu, pasiunea pentru cafea a început cu o misiune simplă: să aducem cele mai bune boabe din fermele peruviene direct în ceasca ta. De la recoltare și selecție, până la prăjire și servire, lucrăm cu atenție pentru a crea experiențe consistente și memorabile.
                </p>
              </div>
              <img src="assets/img/about-coffee.png" alt="about image" className="about__img" />
            </div>
          </div>
        </section>

        {/* STEPS SECTION */}
        <section className="steps" id="steps">
          <div className="steps__bg section">
            <h2 className="section__title">Etapele producției produselor noastre</h2>

            <div className="steps__container container grid">
              <img src="assets/img/coffee-beans-bg.png" alt="steps image" className="steps__bg-img" />

              <div className="steps__content">
                <img src="assets/img/steps-curve-line.svg" alt="steps image" className="steps__border" />

                <div className="steps__card">
                  <div className="steps__circle">
                    <div className="steps__subcircle">01</div>

                    <img src="assets/img/steps-green-coffee.png" alt="steps image" className="steps__img" />
               </div>

               <p className="steps__description">
                    Recoltarea are loc anual când boabele de cafea ajung la maturitate și sunt culese pentru procesare.
               </p>
            </div>

            <div className="steps__card steps__card-move">
                <div className="steps__circle">
                    <div className="steps__subcircle">02</div>

                    <img src="assets/img/steps-coffee-beans.png" alt="steps image" className="steps__img" />
               </div>

               <p className="steps__description">
                    Boabele sunt uscate folosind tehnici umede sau uscate, în funcție de profilul de aromă dorit.
               </p>
            </div>

            <div className="steps__card">
                <div className="steps__circle">
                    <div className="steps__subcircle">03</div>

                    <img src="assets/img/steps-ground-coffee.png" alt="steps image" className="steps__img" />
               </div>

               <p className="steps__description">
                    Cafeaua este prăjită cu grijă pentru a dezvolta aroma, apoi măcinată și preparată de barista noștri pentru a scoate la iveală cele mai bune note.
               </p>
            </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL SECTION */}
        <section className="testimonial" id="testimonial">
          <div className="testimonial__bg section">
            <div className="testimonial__container container grid">
              <div className="testimonial__data">
                <h2 className="section__title">
                  Cafeaua este cea mai bună băutură dimineața — te ajută să te concentrezi.
                </h2>

                <span className="testimonial__name">Ion Popescu</span>
              </div>

              <img src="assets/img/testimonial-coffee.png" alt="testimonial image" className="testimonial__img" />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer__bg">
          <img src="assets/img/coffee-beans-bg.png" alt="footer image" className="footer__bg-img" />

          <div className="footer__container container grid">
            <div className="footer__data grid">
              <div>
                <a href="#" className="footer__logo">
                  <img src="assets/img/logo.png" alt="logo" />
                  Cafenescu
                </a>

                <h3 className="footer__title">Abonează-te la newsletter</h3>
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
                    <a href="https://www.facebook.com/" target="_blank" className="footer__social-link" rel="noopener noreferrer">
                        <i className="ri-facebook-fill"></i>
                    </a>

                    <a href="https://www.instagram.com/" target="_blank" className="footer__social-link" rel="noopener noreferrer">
                        <i className="ri-instagram-fill"></i>
                    </a>

                    <a href="https://twitter.com/" target="_blank" className="footer__social-link" rel="noopener noreferrer">
                        <i className="ri-twitter-fill"></i>
                    </a>
               </div> 

               <span className="footer__copy">
                Copyright &#169; 2025 Toate drepturile rezervate | <a href="https://github.com/diyorcodes">DiyorCodes</a>
               </span>
            </div>
          </div>
        </div>
      </footer>

      {/* SCROLL UP */}
      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>
    </>
  );
}

export default App;
