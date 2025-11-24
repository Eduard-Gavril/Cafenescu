import { useState, useEffect } from 'react';
import espressoPorcellana from '../img/espresso_porcellana.png';
import espressoMacchiato from '../img/espresso_macchiato.png';
import flavoredLatte from '../img/flavored_latte.png';
import cappuccino from '../img/cappucino.png';

function Products() {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [userInteractionTimer, setUserInteractionTimer] = useState(null);

  // Function to get greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    return hour < 17 || (hour === 17 && new Date().getMinutes() < 30) ? 'Bună ziua' : 'Bună seara';
  };
  
  const products = [
    { id: 1, name: 'Espresso Macchiato', price: '8.00', image: espressoMacchiato },
    { id: 2, name: 'Espresso', price: '6.00', image: espressoPorcellana },
    { id: 3, name: 'Flavored Latte', price: '14.00', image: flavoredLatte },
    { id: 4, name: 'Cappuccino', price: '10.00', image: cappuccino },
    { id: 5, name: 'Americano', price: '7.00', image: espressoPorcellana },
    { id: 6, name: 'Cortado', price: '9.00', image: espressoMacchiato },
    { id: 7, name: 'Flat White', price: '12.00', image: flavoredLatte },
    { id: 8, name: 'Mocha', price: '15.00', image: cappuccino },
    { id: 9, name: 'Macchiato', price: '8.50', image: espressoMacchiato },
    { id: 10, name: 'Ristretto', price: '6.50', image: espressoPorcellana },
    { id: 11, name: 'Affogato', price: '16.00', image: cappuccino },
    { id: 12, name: 'Irish Coffee', price: '18.00', image: flavoredLatte }
  ];

  // Triple the products array for infinite loop effect
  const infiniteProducts = [...products, ...products, ...products];

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Continuous smooth scrolling with seamless loop
  useEffect(() => {
    const speed = isMobile ? 0.8 : 0.8; // Pixel-based speed invece di percentuale
    
    const interval = setInterval(() => {
      if (!isPaused && !isDragging) {
        setOffset((prevOffset) => {
          const newOffset = prevOffset + speed;
          // Calcola la larghezza di un set completo (assumendo 215.5px per card: 200px + 15.5px gap)
          const cardTotalWidth = 215.5;
          const singleSetWidth = products.length * cardTotalWidth;
          
          // Reset seamless quando raggiungiamo la fine del primo set
          if (newOffset >= singleSetWidth) {
            return newOffset - singleSetWidth;
          }
          return newOffset;
        });
      }
    }, 16); // ~60fps per animazione più fluida
    
    return () => clearInterval(interval);
  }, [products.length, isMobile, isPaused, isDragging]);

  // Touch/Mouse handlers for mobile swipe
  const handleInteractionStart = (e) => {
    if (!isMobile) return;
    
    setIsDragging(true);
    const pageX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    setStartX(pageX);
    setScrollLeft(offset);
    
    // Clear any existing timer
    if (userInteractionTimer) {
      clearTimeout(userInteractionTimer);
    }
  };

  const handleInteractionMove = (e) => {
    if (!isDragging || !isMobile) return;
    
    e.preventDefault();
    const pageX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const walk = (startX - pageX) * 2; // Multiply by 2 for faster scroll
    setOffset(scrollLeft + walk);
  };

  const handleInteractionEnd = () => {
    if (!isMobile) return;
    
    setIsDragging(false);
    
    // Resume auto-scroll after 0.75 seconds of inactivity
    const timer = setTimeout(() => {
      setIsPaused(false);
    }, 0);
    
    setUserInteractionTimer(timer);
  };

  // Pause on touch/interaction
  const handleTouchStart = () => {
    if (isMobile) {
      setIsPaused(true);
    }
  };

  return (
    <section className="products" id="products">
      <div className="products__bg section">
        <div className="products__container container">
          <h2 className="section__title" style={{ color: 'var(--milk-foam)', marginBottom: '4rem' }}>
            Produsele noastre
          </h2>
          
          <div 
            className="products__carousel" 
            style={{
              position: 'relative',
              overflow: 'hidden',
              padding: '2rem 3rem',
              cursor: isMobile ? (isDragging ? 'grabbing' : 'grab') : 'default'
            }}
            onMouseDown={handleInteractionStart}
            onMouseMove={handleInteractionMove}
            onMouseUp={handleInteractionEnd}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={(e) => {
              handleTouchStart();
              handleInteractionStart(e);
            }}
            onTouchMove={handleInteractionMove}
            onTouchEnd={handleInteractionEnd}
          >
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              transform: `translateX(-${offset}px)`,
              transition: isDragging ? 'none' : 'transform 0.1s ease-out',
              willChange: 'transform',
              userSelect: 'none'
            }}>
            {infiniteProducts.map((product, index) => (
              <article 
                key={`${product.id}-${index}`} 
                className="products__card"
                style={{
                  background: 'rgba(249, 246, 242, 0.05)',
                  padding: '1.5rem 1rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(212, 165, 116, 0.2)',
                  transition: 'all .4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minHeight: '280px',
                  minWidth: '200px',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  if (!isMobile) setIsPaused(true);
                  e.currentTarget.style.background = 'rgba(249, 246, 242, 0.12)';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.5)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(26, 15, 10, 0.25)';
                }}
                onMouseLeave={(e) => {
                  if (!isMobile) setIsPaused(false);
                  e.currentTarget.style.background = 'rgba(249, 246, 242, 0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(212, 165, 116, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.2rem',
                  boxShadow: '0 6px 20px rgba(26, 15, 10, 0.2)',
                  border: '3px solid rgba(212, 165, 116, 0.3)',
                  background: 'rgba(212, 165, 116, 0.1)',
                  position: 'relative',
                  flexShrink: 0
                }}>
                  <img src={product.image} alt={product.name} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform .4s ease'
                  }} 
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.15rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: 'var(--milk-foam)',
                  letterSpacing: '0.3px',
                  textAlign: 'center'
                }}>{product.name}</h3>
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '1.35rem',
                  fontWeight: '700',
                  color: 'var(--accent)',
                  textShadow: '0 2px 8px rgba(212, 165, 116, 0.3)',
                  marginBottom: '1rem'
                }}>{product.price} RON</span>
                <a 
                  href={`https://wa.me/+40743881148?text=${encodeURIComponent(`${getGreeting()}, pot comanda un ${product.name}? Voi fi acolo în curând.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    background: 'linear-gradient(135deg, var(--caramel) 0%, var(--warm-brown) 100%)',
                    color: 'var(--milk-foam)',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    borderRadius: '50px',
                    border: '2px solid rgba(212, 165, 116, 0.5)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    letterSpacing: '0.5px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, var(--gold-accent) 0%, var(--caramel) 100%)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(212, 165, 116, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, var(--caramel) 0%, var(--warm-brown) 100%)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                  }}
                >
                  <i className="ri-whatsapp-fill" style={{ fontSize: '1.2rem' }}></i>
                  Comandă
                </a>
              </article>
            ))}
            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
