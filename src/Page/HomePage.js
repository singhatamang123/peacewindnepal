import React from 'react';
import { Link } from 'react-router-dom';
import help from './help.jpg';
import NewImage from './new.png';
import { Row, Col } from 'react-bootstrap';
import StatsSection from './StatsSection'
// Adjust the import statement based on the actual directory structure
import Chatbox from '../Chat/Chatbox';

// ... rest of the code

const HomePage = () => {
  const sectionStyle = {
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `url(${NewImage})`,
    backgroundSize: 'cover',
    position: 'relative',
    marginBottom: '50px',
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
  };

  const donateButtonStyle = {
    display: 'block',
    width: '150px',
    margin: '20px auto',
    padding: '10px 15px',
    borderRadius: '5px',
    background: 'rgba(255, 165, 0, 0.8)',
    color: 'white',
    textTransform: 'uppercase',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const imageStyle = {
    width: '100%', // Updated to fill the column width
    borderRadius: '5%',
    height: 'auto', // Responsive height
  };

  const textContainerStyle = {
    maxWidth: '600px',
    color: 'black',
    marginTop: '20px', // Added top margin for better spacing
  };

  const whoWeAreSectionStyle = {
    background: 'rgba(253, 228, 228, 0.9)',
    padding: '20px', // Adjusted padding
    borderRadius: '15px',
    textAlign: 'left',
    marginBottom: '50px',
  };

  const h2Style = {
    color: 'red',
    fontWeight: 'bold',
    marginTop: '0',
    fontSize: '36px',
    padding: '10px 0',
  };

  const pStyle = {
    fontFamily: 'serif',
    marginTop: '10px',
  };

  return (
    <div>
      <section style={sectionStyle}>
        <div style={textStyle}>
          <h2 style={{ color: 'white', fontFamily: 'cursive', fontSize: '40', fontWeight: 'bold' }}>"We can fight together"</h2>
          <p style={pStyle}>
            Acts of charity plant seeds of love and kindness, nurturing a garden of hope that blooms with the beauty of a better, more compassionate world.
          </p>
          <Link to="/donate" style={donateButtonStyle}>
            Donate Now
          </Link>
        </div>
      </section>

      <section style={whoWeAreSectionStyle}>
        <Row>
          <Col xs={12} md={6}>
            <img src={help} alt="Description" style={imageStyle} />
          </Col>
          <Col xs={12} md={6}>
            <div style={textContainerStyle}>
              <h2 style={h2Style}>Who We Are?</h2>
              <p style={pStyle}>
                Oxfam is an anti-poverty organization that focuses on water and sanitation, gender justice, conflicts and disasters, and much more. Since 2015, the NGO has reached over 3 million people in Yemen with services like clean water, sanitation, hygiene, and cash for food. In Syria, where millions have been forcibly displaced since 2011, Oxfam works in eight of the 14 governorates focusing on clean water, hygiene kits, farmers, and more. Oxfam also has charity shops around the world (most are in the UK) that sell donated and fair-trade items.
                According to the 2020-2021 annual report, Oxfam reached over 14 million people with their COVID-19 response; worked with 1.7 million people on gender justice; and made USD 912 million in total income.
              </p>
            </div>
          </Col>
        </Row>
      </section>
      <StatsSection/>
      <Chatbox />

      
    </div>
  );
};

export default HomePage;
