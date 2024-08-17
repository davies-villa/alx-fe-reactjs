import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '15px', textAlign: 'center', backgroundColor: 'green', color: '#f2f2f2', display: 'flex', justifyContent: 'space-between' }}>
      <Link to="/" style={{ margin: '0px 15px', color: '#ffffff', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ margin: '0px 15px', color: '#ffffff', textDecoration: 'none' }}>About</Link>
      <Link to="/services" style={{ margin: '0px 15px', color: '#ffffff', textDecoration: 'none' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0px 15px', color: '#ffffff', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
