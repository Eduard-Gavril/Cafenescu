import stellaChicco from '../img/stella_chicco.png';

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Ionescu',
      text: 'Cea mai bună cafenea din oraș! Cafeaua este întotdeauna proaspătă și aromată. Atmosfera este caldă și primitoare. Recomand cu căldură!',
      rating: 5
    },
    {
      id: 2,
      name: 'Alexandru Gheorghe',
      text: 'Serviciu excelent și produse de calitate superioară! Espresso-ul lor este perfect, iar personalul este foarte prietenos. Un loc minunat pentru o pauză de cafea.',
      rating: 5
    },
    {
      id: 3,
      name: 'Elena Dumitrescu',
      text: 'Cafeneaua mea preferată! Boabele sunt proaspăt prăjite și se simte în gust. Prețurile sunt corecte și mereu revin cu plăcere. Bravo Cafenescu!',
      rating: 5
    }
  ];

  return (
    <section className="testimonial" id="testimonial">
      <div className="testimonial__bg section">
        <h2 className="section__title">ceea ce spun clienții noștri</h2>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          paddingTop: '2rem'
        }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} style={{
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
  );
}

export default Testimonial;
