import './style_AM/index.css';
import Header from './components/Header';
import Home from './components/Home';
import Discover from './components/Discover';
import Products from './components/Products';
import About from './components/About';
import Steps from './components/Steps';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <Discover />
        <Products />
        <About />
        <Steps />
        <Testimonial />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
}
  
export default App;
