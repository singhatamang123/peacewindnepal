import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons
import ceoPic from './ceo.jpg'; // Replace with your CEO's picture

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '50px 20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img src={ceoPic} alt="CEO" style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '20px' }} />
        <div style={{ textAlign: 'left' }}>
        <h3>Palden Tamang</h3>
          <p style={{ fontSize: '1.2em', color: 'brown', margin: '10px 0', fontWeight: 'bold' }}>"Comments about the CEO can go here".</p>
        </div>
      </div>
      <h3 style={{ marginBottom: '20px' }}>Follow us on social media</h3>

      <div>
        <a href="https://www.facebook.com">
          <FaFacebook style={{ color: 'white', fontSize: '24px', margin: '0 10px' }} />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter style={{ color: 'white', fontSize: '24px', margin: '0 10px' }} />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram style={{ color: 'white', fontSize: '24px', margin: '0 10px' }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
