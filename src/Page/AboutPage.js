import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { AiOutlineHeart, AiOutlineFund, AiOutlineAim } from 'react-icons/ai';
import flood from './flood.jpg';
import e from './e.jpg';

const About = () => {
  const causes = [
    {
      icon: <AiOutlineHeart size={60} color="royalblue" />,
      title: 'Facilities',
      description: 'Description for Facilities.',
    },
    {
      icon: <AiOutlineFund size={60} color="green" />,
      title: 'Fund',
      description: 'Description for Fund.',
    },
    {
      icon: <AiOutlineAim size={60} color="goldenrod" />,
      title: 'Education',
      description: 'Description for Education.',
    },
  ];

  return (
    <div id="About">
    <Container>
      <h2 style={{ fontSize: '2.5em', color: 'navy', textAlign: 'center', marginBottom: '1.5em', fontFamily: 'Courier, monospace', fontWeight: 'bold' }}>Our Work</h2>
      <Row>
        <Col md={6}>
          <img src={flood} alt="NGO Work" style={{ width: '100%', height: 'auto' }} />
        </Col>
        <Col md={6}>
          <img src={e} alt="NGO Work" style={{ width: '100%', height: 'auto' }} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={6}>
          <p style={{ fontSize: '1.2em', color: '#555', fontFamily: 'serif', fontWeight: 'bold' }}>
            Here, describe the work done by the NGO in this section. You can provide details, achievements,
            goals, or any relevant information about the NGO's activities, social projects, or initiatives.
          </p>
        </Col>

        <Col md={6}>
          <p style={{ fontSize: '1.2em', color: '#555', fontFamily: 'serif', fontWeight: 'bold' }}>
            Here, describe the work done by the NGO in this section. You can provide details, achievements,
            goals, or any relevant information about the NGO's activities, social projects, or initiatives.
          </p>
        </Col>
      </Row>

      <h2 style={{ fontSize: '2.5em', color: 'navy', textAlign: 'center', marginBottom: '1.5em', fontFamily: 'Courier, monospace', fontWeight: 'bold' }}>Our Services</h2>
      <Row xs={1} md={3} className="g-4">
        {causes.map((cause, index) => (
          <Col key={index}>
            <Card className="p-3" bg="light">
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>{cause.icon}</div>
              <Card.Title style={{ textAlign: 'center', fontWeight: 'bold' }}>{cause.title}</Card.Title>
              <Card.Text style={{ textAlign: 'center' }}>{cause.description}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default About;
