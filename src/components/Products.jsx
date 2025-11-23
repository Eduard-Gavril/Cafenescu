import espressoPorcellana from '../img/espresso_porcellana.png';
import espressoMacchiato from '../img/espresso_macchiato.png';
import flavoredLatte from '../img/flavored_latte.png';
import cappuccino from '../img/cappucino.png';

function Products() {
  const products = [
    { id: 1, name: 'Espresso Macchiato', price: '8.00', image: espressoMacchiato },
    { id: 2, name: 'Espresso', price: '6.00', image: espressoPorcellana },
    { id: 3, name: 'flavored Latte', price: '14.00', image: flavoredLatte },
    { id: 4, name: 'Cappuccino', price: '10.00', image: cappuccino }
  ];

  return (
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
            {products.map((product) => (
              <article key={product.id} className="products__card">
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
                  <img src={product.image} alt="products image" style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }} />
                </div>
                <h3 className="products__name">{product.name}</h3>
                <span className="products__price">{product.price} RON</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
