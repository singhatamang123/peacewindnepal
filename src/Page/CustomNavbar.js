import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.jpg';
import { RiHome2Line, RiInformationLine, RiContactsLine } from 'react-icons/ri';
import { FaHeart } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import ScrollToTopButton from './ScrollToTopButton';
import './ScrollToTopButton.css';

const CustomNavbar = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [isSticky, setIsSticky] = useState(false);

  const iconStyle = { fontSize: '1.5em', marginRight: '5px' };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        bg={isSticky ? 'blue' : 'transparent'}
        variant="blue"
        expand="lg"
        className={`navbar ${isSticky ? 'sticky' : ''}`}
        style={{ transition: 'all 0.4s' }}
      >

        <Container >
          <Navbar.Brand as={Link} to="/" style={{ borderRadius: '50%', overflow: 'hidden' }}>
            <img
              src={logo}
              width="100"
              height="90"
              className="d-inline-block align-top"
              alt="Bird Logo"
              style={{ borderRadius: '50%', transition: 'all 0.4s',marginRight: '90px' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className="navbar-toggler-icon">
      <FaBars style={{ color: '#87CEEB', fontSize: '1.5em' }} />
  </span>
    </Navbar.Toggle>
         

          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ms-auto">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <Nav.Link
                    as={Link}
                    to="/"
                    onClick={() => setActiveLink('#home')}
                    style={{
                      color: activeLink === '#home' ? 'blue' : '#333',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.4s',
                      fontWeight: 'bold', // Add this line
                      fontSize:'20px',
                    }}
                  >
                    <RiHome2Line style={iconStyle} />
                    Home
                  </Nav.Link>
                </div>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <Nav.Link
                    as={Link}
                    to="/about"
                    onClick={() => setActiveLink('#about')}
                    style={{
                      color: activeLink === '#about' ? 'blue' : '#333',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.4s',
                      fontWeight: 'bold', // Add this line
                      fontSize:'20px',
                    }}
                  >
                    <RiInformationLine style={iconStyle} />
                    About
                  </Nav.Link>
                </div>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <Nav.Link
                    as={Link}
                    to="/contact"
                    onClick={() => setActiveLink('#contact')}
                    style={{
                      color: activeLink === '#contact' ? 'blue' : '#333',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.4s',
                      fontWeight: 'bold', // Add this line
                      fontSize:'20px',
                    }}
                  >
                    <RiContactsLine style={iconStyle} />
                    Contact
                  </Nav.Link>
                </div>
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <Nav.Link
                    as={Link}
                    to="/donate"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.4s',
                      fontWeight: 'bold', // Add this line
                      fontSize:'20px',
                    }}
                  >
                    <FaHeart style={{ fontSize: '1.5em', marginRight: '5px', color: 'red' }} />
                    Donate
                  </Nav.Link>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* ... Other Content ... */}
        </div>
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default CustomNavbar;
