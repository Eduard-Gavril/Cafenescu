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
      <div className="testimonial__bg section" style={{paddingTop: '1rem', marginTop: '20px'}}>
        <h2 className="section__title" style={{marginBottom: '5rem', marginTop: '0'}}>ceea ce spun clienții noștri</h2>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          paddingTop: '1rem'
        }}>
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              style={{
                background: 'linear-gradient(135deg, rgba(245, 237, 224, 0.8) 0%, rgba(235, 224, 212, 0.9) 100%)',
                padding: '3rem 2rem',
                borderRadius: '30px',
                boxShadow: '0 8px 32px rgba(26, 15, 10, 0.12)',
                border: '1px solid rgba(184, 146, 106, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                transition: 'all .4s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(26, 15, 10, 0.18)';
                e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(26, 15, 10, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(184, 146, 106, 0.2)';
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(212, 165, 116, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
              }}></div>
              
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                justifyContent: 'center'
              }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <img 
                    key={i} 
                    src={stellaChicco} 
                    alt="rating" 
                    style={{
                      width: '36px', 
                      height: '36px', 
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 2px 6px rgba(184, 146, 106, 0.4))',
                      transition: 'transform .3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.2) rotate(15deg)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1) rotate(0deg)'}
                  />
                ))}
              </div>
              
              <p style={{
                lineHeight: '1.9',
                fontStyle: 'italic',
                color: 'var(--text-medium)',
                fontFamily: "'Lora', serif",
                fontSize: '1.05rem',
                textAlign: 'center',
                position: 'relative',
                zIndex: 1
              }}>"{testimonial.text}"</p>
              
              <div style={{
                marginTop: 'auto',
                paddingTop: '1.5rem',
                borderTop: '2px solid rgba(184, 146, 106, 0.25)',
                textAlign: 'center'
              }}>
                <span className="testimonial__name">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
