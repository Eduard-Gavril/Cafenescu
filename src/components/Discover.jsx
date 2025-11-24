function Discover() {
  return (
    <section className="discover">
      <div className="discover__bg section">
        <div className="discover__container container">
          <div className="discover__data" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <a href="#products" className="products__button">
              Descoperă <i className="ri-arrow-down-s-line"></i>
            </a>
            <p className="discover__description" style={{
              fontSize: '1.15rem',
              lineHeight: '1.9rem',
              color: 'var(--text-medium)',
              fontFamily: 'var(--font-body)',
              maxWidth: '900px',
              margin: '0 auto',
              padding: '0 2rem',
              textAlign: 'center'
            }}>
              Ne străduim să construim parteneriate strânse cu fermierii din întreaga lume pentru a oferi cafea responsabilă, gustoasă și trasabilă — bazată pe încredere și respect. În cafeneaua noastră găsești și produse de patiserie proaspete: brioșe, croissante și snack-uri.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discover;
