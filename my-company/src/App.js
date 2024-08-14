import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: '10px', backgroundColor: '#282c34', color: 'white' }}>
          <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
          <Link to="/about" style={{ margin: '0 10px', color: 'white' }}>About</Link>
          <Link to="/services" style={{ margin: '0 10px', color: 'white' }}>Services</Link>
          <Link to="/contact" style={{ margin: '0 10px', color: 'white' }}>Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
