import './style_AM/index.css'; // keep your app styles here
import Header from './components/Header';
import espressoPorcellana from './img/espresso_porcellana.png';
import espressoMacchiato from './img/espresso_macchiato.png';
import flavoredLatte from './img/flavored_latte.png';
import cappuccino from './img/cappucino.png';
import selezioneChicchi from './img/selezione_chicchi.png';
import usacareBoabe from './img/usacare_boabe.png';
import prajealaBoabe from './img/prajeala_boabe.png';
import cafenescuLogo from './svg/CAFENESCU.svg';
import manSvg from './svg/MAN.svg';
import stellaChicco from './img/stella_chicco.png';

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
              <h1 className="home__title" style={{fontFamily: "'Neonderthaw', cursive"}}>
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
            <img src={manSvg} alt="home image" className="home__img" />
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
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
                  }}>
                    <img src={espressoMacchiato} alt="products image" style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }} />
                  </div>
                  <h3 className="products__name">Espresso Macchiato</h3>
                  <span className="products__price">8.00 RON</span>
                </article>
                <article className="products__card">
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
                  }}>
                    <img src={espressoPorcellana} alt="products image" style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }} />
                  </div>
                  <h3 className="products__name">Espresso</h3>
                  <span className="products__price">6.00 RON</span>
                </article>
                <article className="products__card">
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
                  }}>
                    <img src={flavoredLatte} alt="products image" style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }} />
                  </div>
                  <h3 className="products__name">flavored Latte</h3>
                  <span className="products__price">14.00 RON</span>
                </article>
                <article className="products__card">
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
                  }}>
                    <img src={cappuccino} alt="products image" style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }} />
                  </div>
                  <h3 className="products__name">Cappuccino</h3>
                  <span className="products__price">10.00 RON</span>
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
              <img src={manSvg} alt="about image" className="about__img" />
            </div>
          </div>
        </section>

        {/* STEPS SECTION */}
        <section className="steps" id="steps">
          <div className="steps__bg section">
            <h2 className="section__title">De la boabă la ceașcă: Procesul nostru</h2>

            <div className="steps__container container grid">
              <img src="assets/img/coffee-beans-bg.png" alt="steps image" className="steps__bg-img" />

              <div className="steps__content">
                

                <div className="steps__card">
                  <div className="steps__circle">
                    <div className="steps__subcircle">01</div>

                    <div style={{
                      width: '80%',
                      height: '80%',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img src={selezioneChicchi} alt="steps image" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }} />
                    </div>
               </div>

               <p className="steps__description">
                    Recoltare selectivă: Culeșem manual doar cirezele perfect coapte, asigurând calitatea superioară a fiecărui bob.
               </p>
            </div>

            <div className="steps__card steps__card-move">
                <div className="steps__circle">
                    <div className="steps__subcircle">02</div>

                    <div style={{
                      width: '80%',
                      height: '80%',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img src={usacareBoabe} alt="steps image" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }} />
                    </div>
               </div>

               <p className="steps__description">
                    Procesare și uscare: Aplicăm metode naturale sau umed pentru a extrage boabele, apoi le uscăm cu grijă pentru a dezvolta aromele complexe.
               </p>
            </div>

            <div className="steps__card">
                <div className="steps__circle">
                    <div className="steps__subcircle">03</div>

                    <div style={{
                      width: '80%',
                      height: '80%',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img src={prajealaBoabe} alt="steps image" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }} />
                    </div>
               </div>

               <p className="steps__description">
                    Prăjire artizanală: Prăjim boabele la temperaturi precise pentru a dezvălui aromele unice, apoi le măcinăm proaspăt pentru fiecare ceașcă.
               </p>
            </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL SECTION */}
        <section className="testimonial" id="testimonial">
          <div className="testimonial__bg section">
            <h2 className="section__title">ceea ce spun clienții noștri</h2>
            <div className="container" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              paddingTop: '2rem'
            }}>
              {[
                {
                  name: 'Maria Ionescu',
                  text: 'Cea mai bună cafenea din oraș! Cafeaua este întotdeauna proaspătă și aromată. Atmosfera este caldă și primitoare. Recomand cu căldură!',
                  rating: 5
                },
                {
                  name: 'Alexandru Gheorghe',
                  text: 'Serviciu excelent și produse de calitate superioară! Espresso-ul lor este perfect, iar personalul este foarte prietenos. Un loc minunat pentru o pauză de cafea.',
                  rating: 5
                },
                {
                  name: 'Elena Dumitrescu',
                  text: 'Cafeneaua mea preferată! Boabele sunt proaspăt prăjite și se simte în gust. Prețurile sunt corecte și mereu revin cu plăcere. Bravo Cafenescu!',
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} style={{
                  backgroundColor: 'var(--first-color-light)',
                  padding: '2rem',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  <div style={{
                    display: 'flex',
                    gap: '0.5rem'
                  }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <img key={i} src={stellaChicco} alt="rating" style={{width: '30px', height: '30px', objectFit: 'contain'}} />
                    ))}
                  </div>
                  <p className="testimonial__description" style={{
                    lineHeight: '1.6',
                    fontStyle: 'italic',
                    color: 'var(--text-color)'
                  }}>"{testimonial.text}"</p>
                  <div style={{
                    marginTop: 'auto',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--text-color-light)'
                  }}>
                    <span className="testimonial__name" style={{color: 'var(--title-color)'}}>{testimonial.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
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

      {/* SCROLL UP */}
      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>
    </>
  );
}
  
export default App;
