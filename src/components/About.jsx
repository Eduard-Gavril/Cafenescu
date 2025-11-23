import manSvg from '../svg/MAN.svg';

function About() {
  return (
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
  );
}

export default About;
